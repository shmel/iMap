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
    "dojo/text!./Streets_AL.js",
    "dojo/text!./Streets_MZ.js",
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
             Memory, json , FilteringSelect, sewersystems, streetsAL, streetsMZ, FeatureLayer , Button, on, Map, Query, QueryTask,
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
                //------SEWER SYSTEM / PUMP STATION
                var SewerSystemStore = new Memory({
                    idProperty: "OBJECTID",
                    data: json.parse(sewersystems)
                });
                var SelectedSewerVal;

                //------Streets A_L
                var StreetsALStore = new Memory({
                    idProperty: "ID",
                    data: json.parse(streetsAL)
                });
                //------Streets MZ
                var StreetsMZStore = new Memory({
                    idProperty: "ID",
                    data: json.parse(streetsMZ)
                });
                var SelectedStreetALID, SelectedStreetALVal, SelectedStreetMZID, SelectedStreetMZVal;


                var emptyStore = new Memory({
                    idProperty: "OBJECTID",
                    data: { identifier: 'OBJECTID',
                        items: []}
                });

                //Create Grid
                grid = new (declare([OnDemandGrid, Selection]))({
                    // use Infinity so that all data is available in the grid
                    bufferRows: Infinity,
                    columns: {
                        "Results": "Results"
                    },
                    loadingMessage: "Loading data..." ,
                    noDataMessage: "No results found.",
                    store: emptyStore
                }, "grid");

                //Create the Pump Station FilterSelect box
                var SewerSystemSearchSelect = new FilteringSelect({
                    name: "SewerSearchSelect",
                    id: "SewerSearchSelect",
                    placeHolder: "Select Pump Station",
                    store: SewerSystemStore,
                    maxHeight: 200,
                    onChange: lang.hitch(this, function(val){
                        SelectedSewerVal   = val

                        if (SelectedSewerVal != ''){
                            //Clear Other Drop Downs
                            StreetALSearchSelect.reset();
                            StreetMZSearchSelect.reset();

                            this.ClearLayers;
                            //   document.getElementById("value").innerHTML = val;
                            //    document.getElementById("displayedValue").innerHTML = this.get("displayedValue");



                            this.outFields =  ["OBJECTID", "NAME"];

                            // create a feature layer
                            var featureLayer = new FeatureLayer("https://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/CharlesUtilities/MapServer/105", {
                                id: "systems",
                                mode: 1,
                                outFields: this.outFields
                            });

                            this.map.addLayer(featureLayer)

                            var query = new Query();
                            var qt = new QueryTask("https://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/CharlesUtilities/MapServer/105");
                            var random = (new Date()).getTime(); //Fix for 10.1 Bug NIM086349
                            query.where = "OBJECTID = " + SelectedSewerVal + " AND " + random + "=" + random;
                            //query.objectIds = SelectedSewerVal;
                            query.outFields = ["OBJECTID", "NAME" ];
                            query.orderByFields = ["NAME ASC"];
                            query.returnGeometry  = false;

                            qt.execute(query, lang.hitch(this, function(results){
                                var mydata = array.map(results.features, function(feature) {
                                    return {
                                        "id": feature.attributes[query.outFields[0]],
                                        "name": feature.attributes[query.outFields[1]]
                                    }
                                });
                                var myTestStore = new Memory({ data: mydata });

                                //Set Columns on Grid
                                grid.set ("columns", {
                                    "id": "ID",
                                    "name": "Name"
                                });
                                grid.set("store", myTestStore)    ;
                                grid.refresh();

                                // add a click listener on the ID column
                                grid.on(".dgrid-row:click", lang.hitch(this, this.SelectSewerSystem));
                                //grid.set("store", SewerSystemStore)

                            }));
                        }} )
                }, "SewerSearchSelect");

                //Create the Street A-L Search FilterSelect box
                var StreetALSearchSelect = new FilteringSelect({
                    id: "StreetAL",
                    name: "StreetALSelect",
                    placeHolder: "Select Street A-L",
                    store: StreetsALStore,
                    maxHeight: 200,
                    onChange: lang.hitch(this, function(val){
                        SelectedStreetALID   = val     ;
                        SelectedStreetALVal = StreetALSearchSelect.get("displayedValue")    ;

                        if (SelectedStreetALVal != ''){
                            //Clear Other Drop Downs
                            SewerSystemSearchSelect.reset();
                            StreetMZSearchSelect.reset();

                            var systemLayer = this.map.getLayer("systems");
                            if (typeof systemLayer != 'undefined'){
                                this.map.removeLayer(systemLayer) ;
                            }   else {}

                            this.outFields =  ["OBJECTID", "STREET", "LCITY", "l_zip"];

                            // create a feature layer
                            var featureLayer = new FeatureLayer("https://prod1.spatialsys.com/arcgis/rest/services/Charles/BasemapSimple/MapServer/0", {
                                id: "streets",
                                mode: 1,
                                outFields: this.outFields,
                                maxScale: 50000
                            });

                            this.map.addLayer(featureLayer) ;


                            var query = new Query();
                            var qt = new QueryTask("https://prod1.spatialsys.com/arcgis/rest/services/Charles/BasemapSimple/MapServer/0");
                            var random = (new Date()).getTime(); //Fix for 10.1 Bug NIM086349
                            query.where = "STREET = '" + SelectedStreetALVal + "'" + " AND " + random + "=" + random;
                            query.outFields = ["OBJECTID", "STREET", "LCITY", "l_zip" ];
                            query.orderByFields = ["LCITY ASC"];
                            query.returnGeometry  = false;

                            qt.execute(query, lang.hitch(this, function(results){
                                var mydata = array.map(results.features, function(feature) {
                                    return {
                                        "id": feature.attributes[query.outFields[0]],
                                        "street": feature.attributes[query.outFields[1]],
                                        "city": feature.attributes[query.outFields[2]],
                                        "zipcode": feature.attributes[query.outFields[3]]

                                    }
                                });
                                var streetALStore = new Memory({ data: mydata });

                                //Set Columns on Grid
                                grid.set ("columns", {
                                    "id": "ID",
                                    "street": "STREET",
                                    "city": "CITY",
                                    "zipcode": "ZIPCODE"
                                });
                                grid.set("store", streetALStore)    ;
                                grid.refresh();

                                // add a click listener on the ID column
                                grid.on(".dgrid-row:click", lang.hitch(this, this.SelectStreet));
                                //grid.set("store", SewerSystemStore)

                            }));
                        }} )
                }, "Street_AL_SearchSelect");

                //Create the Street M-Z Search FilterSelect box
                var StreetMZSearchSelect = new FilteringSelect({
                    id: "StreetMZ",
                    name: "StreetMZSelect",
                    placeHolder: "Select Street M-Z",
                    store: StreetsMZStore,
                    maxHeight: 200,
                    onChange: lang.hitch(this, function(val){
                        SelectedStreetMZID   = val     ;
                        SelectedStreetMZVal = StreetMZSearchSelect.get("displayedValue")    ;

                        if (SelectedStreetMZVal != ''){
                            //Clear Other Drop Downs
                            SewerSystemSearchSelect.reset();
                            StreetALSearchSelect.reset();

                            var systemLayer = this.map.getLayer("systems");
                            if (typeof systemLayer != 'undefined'){
                                this.map.removeLayer(systemLayer) ;
                            }   else {}

                            this.outFields =  ["OBJECTID", "STREET", "LCITY", "l_zip"];

                            // create a feature layer
                            var featureLayer = new FeatureLayer("https://prod1.spatialsys.com/arcgis/rest/services/Charles/BasemapSimple/MapServer/0", {
                                id: "streets",
                                mode: 1,
                                outFields: this.outFields,
                                maxScale: 50000
                            });

                            this.map.addLayer(featureLayer) ;


                            var query = new Query();
                            var qt = new QueryTask("https://prod1.spatialsys.com/arcgis/rest/services/Charles/BasemapSimple/MapServer/0");
                            var random = (new Date()).getTime(); //Fix for 10.1 Bug NIM086349
                            query.where = "STREET = '" + SelectedStreetMZVal + "'" + " AND " + random + "=" + random;
                            query.outFields = ["OBJECTID", "STREET", "LCITY", "l_zip" ];
                            query.orderByFields = ["LCITY ASC"];
                            query.returnGeometry  = false;

                            qt.execute(query, lang.hitch(this, function(results){
                                var mydata = array.map(results.features, function(feature) {
                                    return {
                                        "id": feature.attributes[query.outFields[0]],
                                        "street": feature.attributes[query.outFields[1]],
                                        "city": feature.attributes[query.outFields[2]],
                                        "zipcode": feature.attributes[query.outFields[3]]
                                    }
                                });
                                var streetMZStore = new Memory({ data: mydata });

                                //Set Columns on Grid
                                grid.set ("columns", {
                                    "id": "ID",
                                    "street": "STREET",
                                    "city": "CITY",
                                    "zipcode": "ZIPCODE"
                                });

                                grid.set("store", streetMZStore)    ;
                                grid.refresh();

                                // add a click listener on the ID column
                                grid.on(".dgrid-row:click", lang.hitch(this, this.SelectStreet));
                                //grid.set("store", SewerSystemStore)

                            }));
                        }} )
                }, "Street_MZ_SearchSelect");
                var ClearSearchButton = new Button({
                    name: "ClearResults",
                    type: "button",
                    label: "Clear Search Results",
                    style: "width: 300px; height:25px; line-height:25px; text-align: center",
                    onClick: lang.hitch(this,  function(){
                        // Do something:
                        /*  for(var j = 0; j < this.map.graphicsLayerIds.length; j++) {
                         var layer = this.map.getLayer(this.map.graphicsLayerIds[j]);
                         //alert(layer.id + ' ' + layer.opacity + ' ' + layer.visible);

                         if(layer.id = "systems") {
                         this.map.removeLayer(layer)          ;
                         } else {}
                         }*/

                        //Remove Layers
                        this.ClearLayers();


                        //Clear Selection Boxes
                        SewerSystemSearchSelect.reset();
                        StreetALSearchSelect.reset();
                        StreetMZSearchSelect.reset();
                        grid.set("store", emptyStore)    ;
                        grid.refresh();
                    })                      //End On Click
                }, "ClearResults")

                SewerSystemSearchSelect.startup();
                StreetALSearchSelect.startup();
                StreetMZSearchSelect.startup();

            }
            , SelectSewerSystem:  function(e){
                // select the feature
                var fl = this.map.getLayer("systems");
                if (typeof fl != 'undefined'){

                var query = new Query();
//              query.objectIds = [parseInt(e.target.innerHTML)];
                query.objectIds = [parseInt(e.target.parentElement.firstChild.innerHTML)];



                //query.where = "OBJECTID = '" + [parseInt(e.target.innerHTML)] + "'";
                //query.returnGeometry = true;
                fl.queryFeatures(query,  lang.hitch(this, function(result) {
                    if ( result.features.length ) {
                        // re-center the map to the selected feature
                        this.map.centerAt(result.features[0].geometry.getExtent().getCenter());
                        this.map.setExtent(result.features[0].geometry.getExtent());
                    } else {
                        console.log("Feature Layer query returned no features... ", result);
                    }
                }));;
                }   else {}
            }
            , ClearLayers: function(){
                //Remove Layers
                var systemLayer = this.map.getLayer("systems");
                if (typeof systemLayer != 'undefined'){
                    this.map.removeLayer(systemLayer) ;
                }   else {}

                var streetLayer = this.map.getLayer("streets");
                if (typeof streetLayer != 'undefined') {
                    this.map.removeLayer(streetLayer) ;
                } else {}
            }

            , SelectStreet:  function(e){
                // select the feature
                var fl = this.map.getLayer("streets");
                if (typeof fl != 'undefined'){
                var query = new Query();
                query.objectIds = [parseInt(e.target.parentElement.firstChild.innerHTML)];
                //query.where = "STREET = '" + (e.target.innerHTML) + "'";
                fl.selectFeatures(query, FeatureLayer.SELECTION_NEW, lang.hitch(this, function(result) {
                    if ( result.length ) {
                        // re-center the map to the selected feature
                        this.map.centerAt(result[0].geometry.getExtent().getCenter());
                        this.map.setExtent(result[0].geometry.getExtent());
                    } else {
                        console.log("Feature Layer query returned no features... ", result);
                    }
                }));;
                }   else {}
            }
        });
    });