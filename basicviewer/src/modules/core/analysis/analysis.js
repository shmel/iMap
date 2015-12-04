/**
 * Created by shmel on 5/6/14.
 */
define(["dojo/_base/declare",
    "dojo/dom-construct",
    "dijit/_WidgetBase",
    "dojo/on",
    "dijit/registry",
    "dojo/ready",
    "dojo/_base/lang",
    "dojo/_base/connect",
    "dijit/layout/ContentPane",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/_base/fx",
    "dojo/_base/lang",
    "dojo/_base/array",
    "../utilities/maphandler",
    "dojo/topic",
    "dijit/_TemplatedMixin",
    "dojo/text!./analysis.html",
    "dojo/json",
    "esri/layers/ArcGISDynamicMapServiceLayer",
    "esri/layers/FeatureLayer",
    "esri/tasks/Geoprocessor",
    "esri/toolbars/draw",
    "esri/graphic",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/SimpleLineSymbol",
    "esri/renderers/SimpleRenderer",
    "dojo/_base/Color",
    "dijit/form/Button",
    "dijit/form/ToggleButton",
    "dijit/form/CheckBox",
    "dojo/on",
    "esri/map",
    "dojo/dom",
    "dojo/number",
    "../attributetable/attributetable",
    "dojo/parser",
    "xstyle/css!./css/analysis.css"],

    function(declare,
             domConstruct,
             WidgetBase,
             dojoOn,
             registry,
             ready,
             lang,
             connect,
             ContentPane,
             domClass,
             domStyle,
             fxer,
             language,
             array,
             mapHandler, topic, TemplatedMixin, template,
             json , ArcGISDynamicMapServiceLayer, FeatureLayer ,
             Geoprocessor, Draw, Graphic, SimpleMarkerSymbol, SimpleLineSymbol,
             SimpleRenderer, Color, Button, ToggleButton, CheckBox, on, Map, dom, dojoNum, AttributeTable
        ){
        return declare([WidgetBase, TemplatedMixin],{
            //*** Properties needed for this style of module
            // The template HTML fragment (as a string, created in dojo/text definition above)

            templateString: template
            // The CSS class to be applied to the root node in our template

            , baseClass: "AnalysisDiv"
            // The ESRI map object to bind to the TOC. Set in constructor
            , map: null
            , toolbar: null
            , AttWidget : null
            , drawHandler: null
            , wwresultsHandler: null
            , waterresultsHandler: null




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
                //Create Button for Tool for Upstream Trace
                this.map = mapHandler.map;
                this.inherited(arguments);

                this.toolbar = new Draw(this.map);


                // WATER ISOLATION TRACE
                var wwTraceButton = new Button({
                    name: "wwTraceButton",
                    type: "button",
                    label: "Wastewater Trace",
                                  /*style: "width: 100px; height:100%; line-height:100%; text-align: left",*/
                    onClick: lang.hitch(this,  function(){

                        //Disable Popups
                        mapHandler.DisableMapPopups();

                        //Clear Previous Results
                        this.ClearResults();

                        //setup the geoprocessor task
                        // Old Task - Does not Include Customer Results gp = new esri.tasks.Geoprocessor("http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/UpstreamWWTrace/GPServer/Upstream_WW_Trace");
                        gp = new esri.tasks.Geoprocessor("http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/UpstreamWWBillingTrace/GPServer/Upstream_WW_Billing_Trace");
                        gp.setOutSpatialReference({wkid:26985});

                        esri.bundle.toolbars.draw.addPoint = "Click to place the origin point of the trace";

                        this.drawHandler =  dojo.connect(this.toolbar, "onDrawEnd", lang.hitch(this, this.executeUpstreamWWTrace));

                        this.toolbar.activate(Draw.POINT);

                    })                      //End On Click for Trace Button
                }, "WWTraceButton");

                var wwTraceClearButton = new Button({
                    name: "wwTraceClearButton",
                    type: "button",
                    label: "Cancel Tool / Clear Result",
                    /* style: "width: 100px; height:100%; line-height:100%; text-align: left",*/
                    onClick: lang.hitch(this, function(){
                        this.ClearResults();
                        this.toolbar.deactivate();
                             })                      //End On Click for Trace Button
                }, "WWTraceClearButton");


                var wwIncludeCustomersCheck = new CheckBox({
                    name: "wwIncludeCustomersCheck",
                    checked: true
                }, "WWCustomersCheck").startup();

                // WATER ISOLATION TRACE

                var waterTraceButton = new Button({
                    name: "waterTraceButton",
                    type: "button",
                    label: "Water Valve Trace",
                    style: "width: 100px; height:100%; line-height:100%; text-align: left",
                    onClick: lang.hitch(this,  function(){
                        //TODO: Implement Code for GP Tool

                        //Disable Popups
                        mapHandler.DisableMapPopups();

                        //Clear Previous Results
                        this.ClearResults();

                        //setup the geoprocessor task
                        //gp = new esri.tasks.Geoprocessor("http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/WaterValveIsolation/GPServer/ValveIsolationService");
                        gp = new esri.tasks.Geoprocessor("http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/WaterIsolation/GPServer/ValveandCustomerIsolationTraceService");
                        gp.setOutSpatialReference({wkid:26985});

                        esri.bundle.toolbars.draw.addPoint = "Click to place the origin point of the trace";

                        this.drawHandler =  dojo.connect(this.toolbar, "onDrawEnd", lang.hitch(this, this.executeWaterTrace));

                        this.toolbar.activate(Draw.POINT);
                    })                      //End On Click for Trace Button
                }, "WaterTraceButton");

                var waterTraceClearButton = new Button({
                    name: "waterTraceClearButton",
                    type: "button",
                    label: "Cancel Tool / Clear Result",
                   /* style: "width: 100px; height:100%; line-height:100%; text-align: left",*/
                    onClick: lang.hitch(this, function(){
                        this.ClearResults();
                        this.toolbar.deactivate();
                    })                      //End On Click for Trace Button
                }, "WaterTraceClearButton");


                //Make Results Buttons and Set Click Events
                this.MakeWWResultsButton();
                this.MakeWaterResultsButton();

            }
            , executeUpstreamWWTrace: function(geometry) {
                this.map.graphics.clear();

                var simpleMarkerSymbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_SQUARE, 16,
                    new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                        new Color([255,0,0]), 1),
                    new Color([225,0,0,0.5]));

                var graphic = new esri.Graphic(geometry,simpleMarkerSymbol);
                this.map.graphics.add(graphic);

                this.toolbar.deactivate();

                var features= [];
                features.push(graphic);
                var featureSet = new esri.tasks.FeatureSet();
                featureSet.features = features;

                //set the input parameters.  View the task in the services explorer to see the input variables required to run the model.
                //see http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_Currents_World/GPServer/MessageInABottle
                var params = { "Input_Point":featureSet };
                gp.submitJob(params, lang.hitch(this, this.DisplayWWTrace));
                document.body.style.cursor = "wait";

                //Show Loading Icon
                mapHandler.ShowLoadingIcon();

            }
            , DisplayWWTrace: function(jobInfo) {
                document.body.style.cursor = "default";

                if (jobInfo.jobStatus == "esriJobSucceeded") {
                // Old Task - Does not Include Customers var mapurl = "http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/UpstreamWWTrace/MapServer/jobs/" + jobInfo.jobId;
                var mapurl = "http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/UpstreamWWBillingTrace/MapServer/jobs/" + jobInfo.jobId;

                //the code snippet assumes the featureLayer is the first layer in the result map service
               /* var fLayerUrl = mapurl + "/0";
                console.log ("Feature Layer URL: " + fLayerUrl);*/
                var fLayerUrl = mapurl + "/1";
                var fCustomersLayerUrl = mapurl + "/0"

                    var includeCustomers = false; //Default to False

                    console.log ("Feature Layer URL: " + fLayerUrl)
                    console.log ("Customers Layer URL: " + fCustomersLayerUrl);

                    //Determine if Customers layer should be added
                    if (dijit.byId("WWCustomersCheck").checked) {
                        includeCustomers = true;
                    }

                    //create  feature layers for Main Lines and Customers
                    //the MODE_ONDEMAND property allows the client to restrictively download features for current web app extent
                    var featurelayer= FeatureLayer(fLayerUrl, {
                        id: "gpfLayer",
                        mode: esri.layers.FeatureLayer.MODE_SNAPSHOT,
                        outFields: ["*"]
                    });

                    var gpfWWCustomersLayer= FeatureLayer(fCustomersLayerUrl, {
                        id: "gpfWWCustomersLayer",
                        mode: esri.layers.FeatureLayer.MODE_SNAPSHOT,
                        outFields: ["*"]
                    });

                    on(this.map, "layers-add-result", lang.hitch (this, function(){
                        console.log ("LAYERS ADDED")
                        this.zoomToManyLayers([gpfWWCustomersLayer, featurelayer])
                    }));


                //make renderers
                var simpleJson = {
                    "type": "simple",
                    "label": "",
                    "description": "",
                    "symbol": {
                        "type": "esriSLS",
                        "style": "esriSLSSolid",
                        "color": [167,95,209,186],
                        "width": 4
                    }
                }

                    //make customers renderer - TODO: Update Symbols
                    var simplepointsCustJson = {
                        "type": "simple",
                        "label": "",
                        "description": "",
                        "symbol": {
                            "type": "esriSMS",
                            "style": "esriSMSCircle",
                            "color": [255,153,102,180],
                            "size": 8,
                            "outline":
                            {
                                "color": [255,153,102,180],
                                "width": 1
                            }
                        }
                    }


                    new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_SQUARE, 16,
                        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                            new Color([255,0,0]), 1),
                        new Color([225,0,0,0.5]));

                var rend = new SimpleRenderer(simpleJson);
                var custrend = new SimpleRenderer(simplepointsCustJson);

                featurelayer.setRenderer(rend);
                    gpfWWCustomersLayer.setRenderer(custrend);


                //Hide Loading Icon
                mapHandler.HideLoadingIcon();
                mapHandler.EnableMapPopups();
                //dojo.byId("wwTraceButton").checked = 'false';
                dojo.byId("msgWWTraceWarning").style.visibility = 'hidden';
                dojo.byId("msgValveTraceWarning").style.visibility = 'hidden';

                    var connectFirstLayerAdd = dojo.connect(this.map, "onLayerAddResult", this, lang.hitch (this, function(){

                        dojo.disconnect(connectFirstLayerAdd);

                        this.zoomToLayer(featurelayer);
                        featurelayer.setSelectionSymbol(new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,new Color([0,255,255,.5]), 3));

                        gpfWWCustomersLayer.setSelectionSymbol(new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 16,
                            new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                                new Color([0,255,255,.5]), 1),
                            new Color([0,255,255,.5])));
                    }));



                //this.map.addLayer(featurelayer);
                    if (includeCustomers) {
                    this.map.addLayers([gpfWWCustomersLayer, featurelayer]);
                    } else {
                        this.map.addLayer(featurelayer)
                    };

                 //show button for showing attribute table
                  //  this.MakeWWResultsButton();
                    domStyle.set(registry.byId("WWResultsButton").domNode, 'visibility', 'visible');
                }
                else
                {
                    //Show Error
                    this.TraceError("wwTrace");
                }

              }
            , zoomToLayer: function(featurelayer){
                //var featurelayer = this.map.getLayer(layername)

                var query = new esri.tasks.Query();
                var random =(new Date()).getTime(); //Fix for 10.1 Bug NIM086349
                query.where = random + " = " + random
                query.outSpatialReference = this.map.spatialReference;
                featurelayer.queryFeatures(query, lang.hitch(this, function (featureSet) {
                    var data = [];
                    if (featureSet && featureSet.features && featureSet.features.length > 0) {
                        data = featureSet.features;
                    }
                    var zoomExtent = esri.graphicsExtent(data);
                    this.map.setExtent(zoomExtent.expand(1.2));

                }));
            }

            , zoomToManyLayers: function(featurelayerset){
                //var featurelayer = this.map.getLayer(layername)

                //Use an input array of Layers to build an extent
                //Loop Through
               var newExtent;

                for (i = 0; i < featurelayerset.length; i++) {
                    //get extent
                    featurelayer = featurelayerset[i]

                    newExtent = featurelayer.fullExtent;

                    /*var query = new esri.tasks.Query();
                    var random =(new Date()).getTime(); //Fix for 10.1 Bug NIM086349
                    query.where = random + " = " + random
                    query.outSpatialReference = this.map.spatialReference;
                    featurelayer.queryFeatures(query, lang.hitch(this, function (featureSet) {
                        var data = [];
                        if (featureSet && featureSet.features && featureSet.features.length > 0) {
                            data = featureSet.features;
                        }
                        var zoomExtent = esri.graphicsExtent(data);
                        //this.map.setExtent(zoomExtent.expand(1.2));
                        if (i==0) {
                           var newExtent = zoomExtent
                        }
                        else {newExtent.union(zoomExtent)}
                    }));*/
                }
                    this.map.setExtent(newExtent.expand(1.2));
            }

            , executeWaterTrace: function(geometry) {
                this.map.graphics.clear();

                var simpleMarkerSymbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_SQUARE, 16,
                    new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                        new Color([255,0,0]), 1),
                    new Color([225,0,0,0.5]));

                var graphic = new esri.Graphic(geometry,simpleMarkerSymbol);
                this.map.graphics.add(graphic);

                this.toolbar.deactivate();

                var features= [];
                features.push(graphic);
                var featureSet = new esri.tasks.FeatureSet();
                featureSet.features = features;

                //set the input parameters.  View the task in the services explorer to see the input variables required to run the model.
                //see http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_Currents_World/GPServer/MessageInABottle
                //var params = { "Input_Point":featureSet };

                var params = { "Flags":featureSet };
                gp.submitJob(params, lang.hitch(this, this.DisplayWaterValveTrace));
                document.body.style.cursor = "wait";

                //Show Loading Icon
                mapHandler.ShowLoadingIcon();

            }
            , DisplayWaterValveTrace: function(jobInfo) {
                document.body.style.cursor = "default";

                if (jobInfo.jobStatus == "esriJobSucceeded") {
                //var mapurl = "http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/WaterValveIsolation/MapServer/jobs/" + jobInfo.jobId;
                var mapurl = "http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/WaterIsolation/MapServer/jobs/" + jobInfo.jobId;

                //the code snippet assumes the featureLayer is the first layer in the result map service
                var fMainsLayerUrl = mapurl + "/0";
                var fValvesLayerUrl = mapurl + "/3";
                var fCustomersLayerUrl = mapurl + "/2"

                console.log ("Mains Layer URL: " + fMainsLayerUrl);
                    console.log ("Valves Layer URL: " + fValvesLayerUrl);
                    console.log ("Customers Layer URL: " + fCustomersLayerUrl);


                //create  feature layer for Valves and Main Lines
                //the MODE_ONDEMAND property allows the client to restrictively download features for current web app extent
                var gpfMainsLayer= FeatureLayer(fMainsLayerUrl, {
                    id: "gpfMainsLayer",
                    mode: esri.layers.FeatureLayer.MODE_SNAPSHOT,
                    outFields: ["*"]
                });

                var gpfValvesLayer= FeatureLayer(fValvesLayerUrl, {
                    id: "gpfValvesLayer",
                    mode: esri.layers.FeatureLayer.MODE_SNAPSHOT,
                    outFields: ["*"]
                });

                var gpfCustomersLayer= FeatureLayer(fCustomersLayerUrl, {
                        id: "gpfCustomersLayer",
                        mode: esri.layers.FeatureLayer.MODE_SNAPSHOT,
                        outFields: ["*"]
                });

                //on(this.map,"layers-add-result", this.zoomToManyLayers([gpfCustomersLayer, gpfMainsLayer, gpfValvesLayer]) );
                on(this.map, "layers-add-result", lang.hitch (this, function(){
                    console.log ("LAYERS ADDED")
                    this.zoomToManyLayers([gpfCustomersLayer, gpfMainsLayer, gpfValvesLayer])
                }));


                //make valves renderer
                var simplepointsJson = {
                    "type": "simple",
                    "label": "",
                    "description": "",
                    "symbol": {
                        "type": "esriSMS",
                        "style": "esriSMSCircle",
                        "color": [204,0,0,10],
                        "size": 22,
                        "outline":
                        {
                            "color": [216,70,169,186],
                            "width": 4
                        }
                    }
                }

                //make mains renderer
                var simpleLineJson = {
                    "type": "simple",
                    "label": "",
                    "description": "",
                    "symbol": {
                        "type": "esriSLS",
                        "style": "esriSLSSolid",
                        "color": [216,70,169,186],
                        "width": 7
                    }
                }
                
                //make customers renderer - TODO: Update Symbols
                    var simplepointsCustJson = {
                        "type": "simple",
                        "label": "",
                        "description": "",
                        "symbol": {
                            "type": "esriSMS",
                            "style": "esriSMSCircle",
                            "color": [204,0,0,10],
                            "size": 22,
                            "outline":
                            {
                                "color": [0,112,55,186],
                                "width": 4
                            }
                        }
                    }

                var mainsrend = new SimpleRenderer(simpleLineJson);
                var valvesrend = new SimpleRenderer(simplepointsJson);
                var custrend = new SimpleRenderer(simplepointsCustJson);

                gpfMainsLayer.setRenderer(mainsrend);
                gpfValvesLayer.setRenderer(valvesrend);
                gpfCustomersLayer.setRenderer(custrend);

                //Hide Loading Icon
                mapHandler.HideLoadingIcon();
                mapHandler.EnableMapPopups();
                //dojo.byId("waterTraceButton").checked = 'false';
                dojo.byId("msgWWTraceWarning").style.visibility = 'hidden';
                dojo.byId("msgValveTraceWarning").style.visibility = 'hidden';


                    var connectFirstLayerAdd = dojo.connect(this.map, "onLayerAddResult", this, lang.hitch (this, function(){

                        dojo.disconnect(connectFirstLayerAdd);

                        //this.zoomToLayer(gpfCustomersLayer);
                       // layersSet = [gpfCustomersLayer, gpfMainsLayer, gpfValvesLayer];
                       
                       // this.zoomToManyLayers(layersSet);

                        gpfMainsLayer.setSelectionSymbol(new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,new Color([0,255,255,.5]), 3));
                        gpfValvesLayer.setSelectionSymbol(new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 16,
                            new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                                new Color([0,255,255,.5]), 1),
                            new Color([0,255,255,.5])));
                        gpfCustomersLayer.setSelectionSymbol(new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 16,
                            new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                                new Color([0,255,255,.5]), 1),
                            new Color([0,255,255,.5])));

                    }));


                    this.map.addLayers([gpfCustomersLayer, gpfMainsLayer, gpfValvesLayer]);





                    /*
                this.map.addLayer(gpfMainsLayer);
                this.map.addLayer(gpfValvesLayer);
                this.map.addLayer(gpfCustomersLayer);*/


                    //show button for showing attribute table
                    domStyle.set(registry.byId("WaterResultsButton").domNode, 'visibility', 'visible');

                }
                else
                {
                    //Show Error
                    this.TraceError("valveTrace");
                }
            }

            , TraceError: function(source){
                //console.log (source);
                if (source == "wwTrace") {
                    dojo.byId("msgWWTraceWarning").style.visibility = 'visible';
                }

                else if (source == "valveTrace") {
                    dojo.byId("msgValveTraceWarning").style.visibility = 'visible';
                }
                //Error Handling for Trace results
                document.body.style.cursor = "default";
                //dojo.byId("wwTraceButton").checked = 'false';

                mapHandler.HideLoadingIcon();
                mapHandler.EnableMapPopups();
            }

            , MakeWWResultsButton: function(){
                if (registry.byId("WWResultsButton")){ }
                else {
                    domConstruct.create('div', { id: "WWResultsButton" }, "wwResultsButtonContainer");
                }
                wwResultsTableButton = new ToggleButton({
                    name: "wwResultsButton",
                    type: "button",
                    label: "View and Export Results",
                    showLabel: "true",
                    checked: "false",
                    style: "width: 100px; height:100%; line-height:100%; text-align: left; visibility:hidden;"
                }, "WWResultsButton");


                //var modulePath = "src/modules/core/attributetable/attributetable.js";
                //var wwResultstoolClick = on(wwResultsTableButton, "click", lang.hitch(this, function () {
                this.wwresultsHandler = on(wwResultsTableButton, "click", lang.hitch(this, function () {
                    this.wwresultsHandler.remove();
                    var widgetParams = {
                        buttonDivId:  "WWResultsButton",
                        floaterDivId: 'floaterAttribute',
                        AppConfig: this._AppConfig,
                        clickSource: "ww"
                    };

                    this.AttWidget = new AttributeTable(widgetParams);

                }));
            }

            , MakeWaterResultsButton: function (){
                if (registry.byId("WaterResultsButton")) {}
                else {
                    domConstruct.create('div', { id: "WaterResultsButton" }, "waterResultsButtonContainer");
                }

                //WaterResultsButton
                waterResultsTableButton = new ToggleButton({
                    name: "WaterResultsButton",
                    type: "button",
                    label: "View and Export Results",
                    showLabel: "true",
                    style: "width: 100px; height:100%; line-height:100%; text-align: left; visibility:hidden;"
                }, "WaterResultsButton");

                //Modify Click Event and change on first Click
                this.waterresultsHandler = on(waterResultsTableButton, "click", lang.hitch(this, function () {
                    this.waterresultsHandler.remove();
                    var widgetParams = {
                        buttonDivId:  "WaterResultsButton",
                        floaterDivId: 'floaterAttribute',
                        AppConfig: this._AppConfig,
                        clickSource: "water"
                    };

                    this.AttWidget = new AttributeTable(widgetParams);

                }));
            }

            , ClearResults: function(){
                var layersList = ["gpfLayer", "gpfMainsLayer", "gpfValvesLayer", "gpfCustomersLayer", "gpfWWCustomersLayer"]
                //Clear the Feature Layer Result & Graphic
                this.map.graphics.clear();

                dojo.disconnect(this.drawHandler);

                dojo.byId("msgWWTraceWarning").style.visibility = 'hidden';
                dojo.byId("msgValveTraceWarning").style.visibility = 'hidden';
                //show button for showing attribute table

                  domStyle.set(registry.byId("WWResultsButton").domNode, 'visibility', 'hidden');
/*                registry.byId("WWResultsButton").set('label', "View and Export Results");
                registry.byId("WWResultsButton").set('checked', false);*/


                domStyle.set(registry.byId("WaterResultsButton").domNode, 'visibility', 'hidden');
/*                registry.byId("WaterResultsButton").set('label', "View and Export Results");
                registry.byId("WaterResultsButton").set('checked', false);*/
                //console.log ("clearresults set checked false")


                document.body.style.cursor = "default";
/*                mapHandler.HideLoadingIcon();
                mapHandler.EnableMapPopups();*/

                //Hide Atribute Table
                if (dom.byId("floaterAttribute")) {
                    if (dom.byId("floaterAttribute").style.visibility === 'visible') {

                        // if (registry.byId("WWResultsButton").checked = 'true') {
                        //Hide the Table
                        registry.byId("floaterAttribute").hide();

                        /*                            registry.byId("WWResultsButton").set('checked', false);
                         registry.byId("WWResultsButton").set('label', "View and Export Results"); //uncheck the toggle button}*/
                        //  }
                        //console.log("Test")
                    }
                };


                //Re Create the Results Buttons if it exists
                if (registry.byId("WWResultsButton")){
                    domStyle.set(registry.byId("WWResultsButton").domNode, 'visibility', 'hidden');
                    registry.byId("WWResultsButton").destroyRecursive();
                    if (registry.byId("floaterAttribute")){
                        registry.byId("floaterAttribute").destroyRecursive();
                    }
                    this.MakeWWResultsButton();
                } else {
                   //this.MakeWWResultsButton();
                };

                if (registry.byId("WaterResultsButton")){
                    domStyle.set(registry.byId("WaterResultsButton").domNode, 'visibility', 'hidden');
                    registry.byId("WaterResultsButton").destroyRecursive();
                    if (registry.byId("floaterAttribute")){
                        registry.byId("floaterAttribute").destroyRecursive();
                    }
                    this.MakeWaterResultsButton();
                } else {
                    //this.MakeWWResultsButton();
                };


                //Hide Attribute Table
                if (dom.byId("floaterAttribute")) {
                    if (dom.byId("floaterAttribute").style.visibility === 'visible') {

                       // if (registry.byId("WWResultsButton").checked = 'true') {
                        //Hide the Table
                            registry.byId("floaterAttribute").hide();

/*                            registry.byId("WWResultsButton").set('checked', false);
                            registry.byId("WWResultsButton").set('label', "View and Export Results"); //uncheck the toggle button}*/
                      //  }
                       // console.log("Test")
                    }
                }

                //Find layer with this id in the map
                for(var b = this.map.graphicsLayerIds.length -1; b > 0; --b) {
                    var layer = this.map.getLayer(this.map.graphicsLayerIds[b]);
                    //console.log(layer.id + ' ' + layer.opacity + ' ' + layer.visible);
                    if (layersList.indexOf(layer.id) > -1 ) {
                        //Remove Layer
                        this.map.removeLayer(layer)
                    }
                }
            }
            , NewFunctionHere: function(){

            }

        });
    });