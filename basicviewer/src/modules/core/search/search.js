define(["dojo/_base/declare",
    "dojo/dom-construct",
    "dijit/_WidgetBase",
    "dojo/on",
    "dijit/registry",
    "dojo/ready",
    "dojo/_base/lang",
    "dijit/layout/ContentPane",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/_base/fx",
    "dojo/_base/lang",
    "dojo/_base/array",
    "dojo/dom-style",
    "../utilities/maphandler",
    "dojo/topic",
    "dijit/_TemplatedMixin",
    "dojo/text!./search.html",
    "dojo/store/Memory",
    "dojo/json",
    "dijit/form/FilteringSelect",
    "dojo/text!./SewerSystemsList.js",
    "esri/layers/FeatureLayer",
    "dijit/form/Button",
    "dojo/on",
    "esri/map",
    "esri/tasks/query",
    "esri/tasks/QueryTask",
    "dgrid/OnDemandGrid",
    "dgrid/Selection",
    "dojo/dom",
    "dojo/data/ItemFileReadStore",
    "dojo/number",
    "dojo/parser",
    "xstyle/css!./css/search.css"],

    function(declare,
             domConstruct,
             WidgetBase,
             dojoOn,
             registry,
             ready,
             lang,
             ContentPane,
             domClass,
             domStyle,
             fxer,
             language,
             array,
             domStyle, mapHandler, topic, TemplatedMixin, template,
            Memory, json , FilteringSelect, sewersystems, FeatureLayer , Button, on, Map, Query, QueryTask,
            OnDemandGrid, Selection, dom , filestore, dojoNum
        ){
        return declare([WidgetBase, TemplatedMixin],{
            //*** Properties needed for this style of module
            // The template HTML fragment (as a string, created in dojo/text definition above)
            templateString: template
            // The CSS class to be applied to the root node in our template
            , baseClass: "SearchDiv"
            // The ESRI map object to bind to the TOC. Set in constructor
            , map: null
            , grid: null


            //*** Creates
            , constructor: function(args) {
                // safeMixin automatically sets the properties above that are passed in from the toolmanager.js
                declare.safeMixin(this,args);
                // mapHandler is a singleton object that you can require above and use to get a reference to the map.
                this.map = mapHandler.map;



            }

            //The widget has been added to the DOM, though not visible yet. This is the recommended place to do most of the module's work
            , postCreate: function () {
                this.inherited(arguments);
            }

            /* A standard module event handler. In the postcreate and startup handlers,
             * you can assume the module has been created. You don't need to add a handler function if you are not writing code in it.
             */
            , startup: function () {
                this.map = mapHandler.map;
                this.inherited(arguments);
                //Get Data Store
                // create store instance referencing data from states.json
                var SewerSystemStore = new Memory({
                    idProperty: "OBJECTID",
                    data: json.parse(sewersystems)
                });

                var SelectedSewerVal;

                //Create the FilterSelect box
                var SewerSystemSearchSelect = new FilteringSelect({
                    name: "SewerSearchSelect",
                    placeHolder: "Select Sewer System",
                    store: SewerSystemStore,
                    onChange: function(val){
                    SelectedSewerVal   = val
                    document.getElementById("value").innerHTML = val;
                    document.getElementById("displayedValue").innerHTML = this.get("displayedValue");

                }
                }, "SewerSearchSelect");

                var SewerSearchButton = new Button({
                    name: "SewerSearchBrowse",
                    type: "button",

                    label: "Zoom to Selection",
                    style: "width: 300px",
                    onClick: function(){
                        // Do something:
                        //queryFeatureLayer
                        //TESTING
                        grid = new (declare([OnDemandGrid, Selection]))({
                            // use Infinity so that all data is available in the grid
                            bufferRows: Infinity,
                            columns: {
                                /*                     "id": "ID",
                                 "name": "name"*/
                                "id": "ID",
                                "name": "Name"
                            }

                        }, "grid");

                        this.outFields =  ["OBJECTID", "NAME"];

                        // create a feature layer
                        var featureLayer = new FeatureLayer("https://demo3.spatialsys.com/ArcGIS/rest/services/CharlesCounty/CharlesBasemap/MapServer/1", {
                            id: "systems",
                            mode: 1,
                            outFields: this.outFields
                        });



                        //var data,features, sampleData, myTestStore;
//                var features, sampleData;
                        //var myTestStore = new Memory()     ;

                        var query = new Query();
                        var qt = new QueryTask("https://demo3.spatialsys.com/ArcGIS/rest/services/CharlesCounty/CharlesBasemap/MapServer/1");
                        query.where = "OBJECTID = '" + SelectedSewerVal + "'";
                        query.outFields = ["OBJECTID", "NAME" ];
                        query.returnGeometry  = false;

                        qt.execute(query, function(results){
                            var mydata = array.map(results.features, function(feature) {
                                return {
                                    "id": feature.attributes[query.outFields[0]],
                                    "name": feature.attributes[query.outFields[1]]
                                }
                            });
                            var myTestStore = new Memory({ data: mydata });
                            // myTestStore.data = DATA;
                            grid.set("store", myTestStore)    ;
                            //grid.set("store", SewerSystemStore)

                        });

                         //-------------------TEST SAMPLE - THIS POPULATES GRID WITH SAMPLE DATA
                  /*      var myTestStore2 = new Memory({
                            idProperty: "OBJECTID",
                            data: { identifier: 'OBJECTID',
                                    items: [
                                    { objectid: "123", name: 'Test1'},
                                    { objectid: "345", name: 'Test2'},
                                    { objectid: "456", name: 'Test3'},
                                    { objectid: "567", name: 'Test4'},
                                    { objectid: "678", name: 'Test5'}]}
                        });

                        // create a dgrid

                        var grid2 = new OnDemandGrid({
                            columns: {
                                "objectid":"ID",
                                "name": "NAME"
                            }                 ,
                            store: myTestStore2
                        }, "grid2");

                       grid2.startup();*/
                        //-------------------TEST SAMPLE - THIS POPULATES GRID WITH SAMPLE DATA

                                           }                      //End On Click


                }, "SewerSearchBrowse")

                SewerSystemSearchSelect.startup();
                SewerSearchButton.startup();


            }
            , SelectSewerSystem: function(e){
                var id = e.graphic.attributes.OBJECTID;
                // select the feature that was clicked
                var query = new Query();
                query.objectIds = [id];
                var systems = this.map.getLayer("systems");
                systems.selectFeatures(query, FeatureLayer.SELECTION_NEW);
                // select the corresponding row in the grid
                // and make sure it is in view
                grid.clearSelection();
                grid.select(id);
                grid.row(id).element.scrollIntoView();
            }


             /*, queryFeatureLayer: function(features) {
                // create a feature layer
                var featureLayer = new FeatureLayer("https://demo3.spatialsys.com/ArcGIS/rest/services/CharlesCounty/CharlesBasemap/MapServer/1", {
                    outFields:["OBJECTID", "NAME"]
                });

                // create the query to fetch object IDs for SewerSystems with selected val
                var query = new esri.tasks.Query();
                query.where = "NAME = 'Bryans Road'";
                query.objectIds = [features[0].attributes.OBJECTID];
                query.outFields = [ "OBJECTID", "NAME" ];
                featureLayer.queryFeatures(query, function(results){

                var fset = results[features[0].attributes.OBJECTID];

                //return an array of feature attributes to provide to the dojo data store.
                var items = this.map(fset.features, function(feature) {
                    return feature.attributes;
                });

                //Create data object to be used in store
                        var data = {
                            identifier: "OBJECTID",  //This field needs to have unique values
                            label: "OBJECTID", //Name field for display. Not pertinent to a grid but may be used elsewhere.
                            items: items
                        };

                //Create data store and bind to grid.
                store = new dojo.data.ItemFileReadStore({ data:data });
                });

                // create a dgrid

                var grid = new OnDemandGrid({
                    store: data,
                    columns:{
                        id: {
                            label: "ID"
                        }
                    }
                }, "grid");
                }*/
                });
        });