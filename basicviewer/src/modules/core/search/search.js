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
    "dijit/form/TextBox",
    "dojo/text!./SewerSystemsList.js",
    "dojo/text!./Streets_ALL.js",
    "esri/layers/ArcGISDynamicMapServiceLayer",
    "esri/layers/FeatureLayer",
    "dijit/form/Button",
    "dojo/on",
    "esri/map",
    "esri/tasks/query",
    "esri/tasks/QueryTask",
    "esri/tasks/FindTask",
    "esri/tasks/FindParameters",
    "esri/tasks/FindResult",
    "esri/geometry/Extent",
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
             Memory, json , FilteringSelect, TextBox, sewersystems, streetsALL, ArcGISDynamicMapServiceLayer, FeatureLayer , Button, on, Map, Query, QueryTask,
             FindTask, FindParameters, FindResult, Extent,
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
            , GOIDStore: null
            , svcList: null


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

                //------Streets ALL
                var StreetsALLStore = new Memory({
                    idProperty: "ID",
                    data: json.parse(streetsALL)
                });
/*                //------Streets MZ - Removed 4/11/2014 to consolidate street search
                var StreetsMZStore = new Memory({
                    idProperty: "ID",
                    data: json.parse(streetsMZ)
                });*/
                var SelectedStreetALLID, SelectedStreetALLVal;


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


                //---------------------------------------------------------------------------------
                // ---------------------------SEARCH BY Pump Station------------------------------------
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
                            StreetALLSearchSelect.reset();
                            GOIDText.reset();
                            //StreetMZSearchSelect.reset();

                            this.ClearLayers();
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


                //---------------------------------------------------------------------------------
                // ---------------------------SEARCH BY Street------------------------------------
                //Create the Street Search FilterSelect box
                var StreetALLSearchSelect = new FilteringSelect({
                    id: "Streets",
                    name: "StreetSelect",
                    placeHolder: "Select or Type Street Name",
                    store: StreetsALLStore,
                    maxHeight: 200,
                    onChange: lang.hitch(this, function(val){
                        SelectedStreetALLID   = val     ;
                        SelectedStreetALLVal = StreetALLSearchSelect.get("displayedValue")    ;

                        if (SelectedStreetALLVal != ''){
                            //Clear Other Drop Downs
                            SewerSystemSearchSelect.reset();
                            GOIDText.reset();
                            //StreetMZSearchSelect.reset();

                            var systemLayer = this.map.getLayer("systems");
                            if (typeof systemLayer != 'undefined'){
                                this.map.removeLayer(systemLayer) ;
                            }   else {}

                            var GOIDLayer = this.map.getLayer("findLayer");
                            if (typeof GOIDLayer != 'undefined'){
                                this.map.removeLayer(GOIDLayer) ;
                            }   else {}

                            this.outFields =  ["OBJECTID", "STREET", "ADDRESS_RANGE", "LCITY", "l_zip"];

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
                            query.where = "STREET = '" + SelectedStreetALLVal + "'" + " AND " + random + "=" + random;
                            query.outFields = ["OBJECTID", "STREET", "ADDRESS_RANGE", "LCITY", "l_zip" ];
                            query.orderByFields = ["LCITY ASC"];
                            query.returnGeometry  = false;

                            qt.execute(query, lang.hitch(this, function(results){
                                var mydata = array.map(results.features, function(feature) {
                                    return {
                                        "ID": feature.attributes[query.outFields[0]],
                                        "addrange": feature.attributes[query.outFields[2]],
                                        "street": feature.attributes[query.outFields[1]],
                                        "city": feature.attributes[query.outFields[3]],
                                        "zipcode": feature.attributes[query.outFields[4]]

                                    }
                                });
                                var streetALLStore = new Memory({ data: mydata });

                                //Set Columns on Grid
                                grid.set ("columns", {
                                    "ID": "ObjectID",
                                    "addrange": "RANGE",
                                    "street": "STREET",
                                    "city": "CITY",
                                    "zipcode": "ZIPCODE"
                                });
                                grid.styleColumn("ID", "display: none;");
                                grid.set("store", streetALLStore)    ;
                                grid.refresh();

                                // add a click listener on the ID column
                                grid.on(".dgrid-row:click", lang.hitch(this, this.SelectStreet));
                                //grid.set("store", SewerSystemStore)

                            }));
                        }} )
                }, "Street_SearchSelect");


                //---------------------------------------------------------------------------------
                // ---------------------------SEARCH BY GISOBJID------------------------------------
               //Create the GISOBJID Search box
                var GOIDText = new TextBox({
                    id:"GOIDSearch",
                    name: "GISOBJID",
                    placeHolder: "GISOBJID", //value: "" /* no or empty value! */,
                    style: "width: 80px",
                    onKeyUp: lang.hitch(this, function(e){
                        //Find out what Key
                        if (e.keyCode =="13")
                        {//submit
                            document.getElementById('GISOBJIDSearchButton').click();
                         }
                    })

                }, "GISOBJIDSearchText" );
                //Define List of Services to use for Find Task
                svcList = ["http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/Charles_Utilities_Water/MapServer/",
                    "http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/Charles_Utilities_LateralPts/MapServer/",
                    "http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/Charles_Utilities_Reclaimed/MapServer/",
                    "http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/Charles_Utilities_Wastewater/MapServer/"
                    ];
                //Each Service has a list of Layer to search
                var svcLayerList = ["0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27",
                    "0", "0,1,2,3,4,5,6,7,8",
                    "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35"];


                var GISOBJIDSearchButton = new Button({
                    name: "GISOBJIDSearch",
                    type: "button",
                    label: "Search",
                    style: "width: 100px; height:100%; line-height:100%; text-align: left",
                    onClick: lang.hitch(this,  function(){
                        //Remove Old Query Layers
/*                        var findLayer = this.map.getLayer("findLayer");
                        if (typeof findLayer != 'undefined'){
                            this.map.removeLayer(findLayer) ;
                        }   else {}

                        var systemLayer = this.map.getLayer("systems");
                        if (typeof systemLayer != 'undefined'){
                            this.map.removeLayer(systemLayer) ;
                        }   else {}*/
                        this.ClearLayers();

                        //TODO: Go Through Array of Services
                        var items;
                        this.GOIDStore = new Memory();
                       //for (var i = 0; i < svcList.length; i++) {
                       // while ( i < svcList.length && taskComplete == "FALSE" ) {
                            //Create the Find Task
                            var svcURL, searchLayersList

                            //TO DO - Get Layer List Dynamically from ServiceLayer
                            /*var searchSvc = new ArcGISDynamicMapServiceLayer(svcURL);
                                var searchLayerList
                            if (searchLayer.loaded) {
                                searchLayerList = this.BuildLayerList(searchLayer);
                            } else {
                                dojo.connect(searchLayer, "onLoad", function(){
                                    searchLayerList = this.BuildLayerList(searchLayer);
                                });
                            }*/

                            var findTask,  findTask2,  findTask3, findTask4, findParams ;

                        //Create the find parameters
                        findParams = new FindParameters();
                        findParams.returnGeometry = true;
                        findParams.searchFields = ["GISOBJID"];
                        findParams.outSpatialReference = map.spatialReference;
                        //Set the search text to the value in the box
                        findParams.searchText = GOIDText.get("value");


                        //Create the Find Task, Specific to svcURL
                        //SVC 1 -
                        findTask = new FindTask(svcList[0]);
                        searchLayersList = svcLayerList[0];
                        //Search Layers List is specific to the service
                        findParams.layerIds = searchLayersList.split(",");


                        console.log ("Current Service being Searched: " + svcList[0]);
                        //Get Results
                        findTask.execute(findParams, lang.hitch(this, this.FindTaskResults0));


                        //SVC 2 -
                        findTask2 = new FindTask(svcList[1]);
                        searchLayersList = svcLayerList[1];

                        //Search Layers List is specific to the service
                        findParams.layerIds = searchLayersList.split(",");

                        console.log ("Current Service being Searched: " + svcList[1]);
                        findTask2.execute(findParams, lang.hitch(this, this.FindTaskResults1));


                        //SVC 3 -
                        findTask3 = new FindTask(svcList[2]);
                        searchLayersList = svcLayerList[2];

                        //Search Layers List is specific to the service
                        findParams.layerIds = searchLayersList.split(",");

                        console.log ("Current Service being Searched: " + svcList[2]);
                        findTask3.execute(findParams, lang.hitch(this, this.FindTaskResults2));


                        //SVC 4 -
                        findTask4 = new FindTask(svcList[3]);
                        searchLayersList = svcLayerList[3];

                        //Search Layers List is specific to the service
                        findParams.layerIds = searchLayersList.split(",");

                        console.log ("Current Service being Searched: " + svcList[3]);
                        findTask4.execute(findParams, lang.hitch(this, this.FindTaskResults3));
/*                            //findTask.execute(findParams, lang.hitch(this, this.FindTaskResults));
                            var def = findTask.execute(findParams);
                            var processResults = function(results, svcname){
                                //create array of attributes
                                console.log ("Result Count: " + results.length);
                                items = array.map(results, function(result) {
                                    // var feature = result.feature
                                    return {
                                        "ID": result.feature.attributes.OBJECTID,
                                        "GISOBJID": result.feature.attributes.GISOBJID,
                                        "Layer": result.layerName,
                                        "ServiceURL": svcURL,
                                        "LayerID": result.layerId
                                    }
                                });

                                if (items.length > 0) {
                                    GOIDStore.put(items[0]);
                                    // create a feature layer
                                    var layerURL = svcURL + items[0].LayerID
                                    var featureLayer = new FeatureLayer(layerURL, {
                                        id: "findLayer",
                                        mode: 1,
                                        maxScale: 50000
                                    });

                                    console.log ("Added Layer findLayer with URL:" + layerURL)

                                    this.map.addLayer(featureLayer) ;

                                    //Set Data Results in Grid
                                    //Set Columns on Grid
                                    grid.set ("columns", {
                                        "ID": "ID",
                                        "GISOBJID": "GISOBJID",
                                        "Layer": "Layer"
                                    });
                                    grid.styleColumn("ID", "display: none;");
                                    grid.set("store", GOIDStore)    ;
                                    grid.refresh();

                                    // add a click listener on the ID column
                                    grid.on(".dgrid-row:click", lang.hitch(this, this.SelectFeature));
                                    //Exit For????
                                    }
                            }
                            def.addCallback(processResults);*/

                           /* findTask.execute(findParams, lang.hitch(this, function(results, svcURL){
                                //create array of attributes
                                console.log ("Result Count: " + results.length);
                                items = array.map(results, function(result) {
                                    // var feature = result.feature
                                    return {
                                        "ID": result.feature.attributes.OBJECTID,
                                        "GISOBJID": result.feature.attributes.GISOBJID,
                                        "Layer": result.layerName,
                                        "ServiceURL": svcURL,
                                        "LayerID": result.layerId
                                    }
                                });

                                if (items.length > 0) {
                                    taskComplete = "TRUE";
                                    GOIDStore.put(items[0]);
                                    // create a feature layer
                                    var layerURL = svcURL + items[0].LayerID
                                    var featureLayer = new FeatureLayer(layerURL, {
                                        id: "findLayer",
                                        mode: 1,
                                        maxScale: 50000
                                    });

                                    console.log ("Added Layer findLayer with URL:" + layerURL)

                                    this.map.addLayer(featureLayer) ;

                                    //Set Data Results in Grid
                                    //Set Columns on Grid
                                    grid.set ("columns", {
                                        "ID": "ID",
                                        "GISOBJID": "GISOBJID",
                                        "Layer": "Layer"
                                    });
                                    grid.styleColumn("ID", "display: none;");
                                    grid.set("store", GOIDStore)    ;
                                    grid.refresh();

                                    // add a click listener on the ID column
                                    grid.on(".dgrid-row:click", lang.hitch(this, this.SelectFeature));
                                    //Exit For????
                                    taskComplete = "FALSE";
                                    i++;


                                }
                                else
                                {
                                    taskComplete = "FALSE";
                                    i++;
                                }


                            } )); //End Find Task Execute
                        }   // End Loop of Services*/



                    })                      //End On Click for Search Button
                }, "GISOBJIDSearchButton");



                /*//Create the Street M-Z Search FilterSelect box
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
                            StreetALLSearchSelect.reset();

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
                }, "Street_MZ_SearchSelect");*/
                //---------------------------------------------------------------------------------
                // ---------------------------Clear Search------------------------------------
                var ClearSearchButton = new Button({
                    name: "ClearResults",
                    type: "button",
                    label: "Clear Search Results",
                    /*style: "width: 300px; height:25px; line-height:25px; text-align: center",*/
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
                        StreetALLSearchSelect.reset();
                        GOIDText.reset();

                        //StreetMZSearchSelect.reset();
                        grid.set("store", emptyStore)    ;
                        grid.refresh();
                    })                      //End On Click
                }, "ClearResults")

                SewerSystemSearchSelect.startup();
                StreetALLSearchSelect.startup();

                //StreetMZSearchSelect.startup();

            }
            , FindTaskResults0: function(results){
                //Work with the results of the complete Find Task
                console.log ("Result Count: " + results.length);
                svcURL = svcList[0];
                items = array.map(results, function(result) {
                    var feature = result.feature
                    return {
                        "ID": result.feature.attributes.OBJECTID,
                        "GISOBJID": result.feature.attributes.GISOBJID,
                        "Layer": result.layerName,
                        "ServiceURL": svcURL,
                        "LayerID": result.layerId
                    }
                });

                if (items.length > 0) {
                    this.DisplayFindTaskResults(items);
                }
            }
            , FindTaskResults1: function(results){
                //Work with the results of the complete Find Task
                console.log ("Result Count: " + results.length);
                svcURL = svcList[1];
                items = array.map(results, function(result) {
                    var feature = result.feature
                    return {
                        "ID": result.feature.attributes.OBJECTID,
                        "GISOBJID": result.feature.attributes.GISOBJID,
                        "Layer": result.layerName,
                        "ServiceURL": svcURL,
                        "LayerID": result.layerId
                    }
                });

                if (items.length > 0) {
                    this.DisplayFindTaskResults(items);
                }
            }
            , FindTaskResults2: function(results){
                //Work with the results of the complete Find Task
                console.log ("Result Count: " + results.length);
                svcURL = svcList[2];
                items = array.map(results, function(result) {
                    var feature = result.feature
                    return {
                        "ID": result.feature.attributes.OBJECTID,
                        "GISOBJID": result.feature.attributes.GISOBJID,
                        "Layer": result.layerName,
                        "ServiceURL": svcURL,
                        "LayerID": result.layerId
                    }
                });

                if (items.length > 0) {
                    this.DisplayFindTaskResults(items);
                }
            }
            , FindTaskResults3: function(results){
                //Work with the results of the complete Find Task
                console.log ("Result Count: " + results.length);
                svcURL = svcList[3];
                items = array.map(results, function(result) {
                    var feature = result.feature
                    return {
                        "ID": result.feature.attributes.OBJECTID,
                        "GISOBJID": result.feature.attributes.GISOBJID,
                        "Layer": result.layerName,
                        "ServiceURL": svcURL,
                        "LayerID": result.layerId
                    }
                });

                if (items.length > 0) {
                    this.DisplayFindTaskResults(items);
                }
            }

            ,DisplayFindTaskResults: function(items) {
                this.GOIDStore.put(items[0]);

                // create a feature layer
                var layerURL = items[0].ServiceURL + items[0].LayerID
                var featureLayer = new FeatureLayer(layerURL, {
                    id: "findLayer",
                    mode: 1,
                    maxScale: 50000
                });

                console.log ("Added Layer findLayer with URL:" + layerURL)

                this.map.addLayer(featureLayer) ;

                //Set Data Results in Grid
                //Set Columns on Grid
                grid.set ("columns", {
                    "ID": "ID",
                    "GISOBJID": "GISOBJID",
                    "Layer": "Layer"
                });
                grid.styleColumn("ID", "display: none;");
                grid.set("store", this.GOIDStore)    ;
                grid.refresh();

                // add a click listener on the ID column
                grid.on(".dgrid-row:click", lang.hitch(this, this.SelectFeature));
                //Exit For????

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

                var utilsLayer = this.map.getLayer("findLayer");
                if (typeof utilsLayer != 'undefined') {
                    this.map.removeLayer(utilsLayer) ;
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
            , SelectFeature: function(e){
                //Select and Zoom to the Feature
                //Needs OBJECTID of Features
                // select the feature
                var fl = this.map.getLayer("findLayer");
                if (typeof fl != 'undefined'){
                    var query = new Query();
                    query.objectIds = [parseInt(e.target.parentElement.firstChild.innerHTML)];
                    //query.where = "STREET = '" + (e.target.innerHTML) + "'";
                    fl.selectFeatures(query, FeatureLayer.SELECTION_NEW, lang.hitch(this, function(result) {
                        if ( result.length ) {
                            // re-center the map to the selected feature

                            //Handling for point features
                            if (result[0].geometry.type == "point") {
                                var pt = result[0].geometry;
                                var factor = 1; //some factor for converting point to extent
                                var extent = new Extent(pt.x - factor, pt.y - factor, pt.x + factor, pt.y + factor, pt.spatialReference);

                                this.map.setExtent(extent.expand(2));
                            }
                            else{
                            this.map.centerAt(result[0].geometry.getExtent().getCenter());
                            this.map.setExtent(result[0].geometry.getExtent());
                            }
                        } else {
                            console.log("Feature Layer query returned no features... ", result);
                        }
                    }));;
                }   else {}

            }
            ,  BuildLayerList: function(layer){
                var LayerList = [];
                var items = dojo.map(layer.layerInfos,function(info,index){
                    LayerList.push(info.id);
                });
                return LayerList;
            }
        });
    });