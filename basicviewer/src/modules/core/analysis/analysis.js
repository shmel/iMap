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
             ContentPane,
             domClass,
             domStyle,
             fxer,
             language,
             array,
             mapHandler, topic, TemplatedMixin, template,
             json , ArcGISDynamicMapServiceLayer, FeatureLayer ,
             Geoprocessor, Draw, Graphic, SimpleMarkerSymbol, SimpleLineSymbol,
             SimpleRenderer, Color, Button, ToggleButton, on, Map, dom, dojoNum, AttributeTable
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


               /* var wwTraceButton = new ToggleButton({
                    name: "wwTraceButton",
                    type: "button",
                    label: "Wastewater Trace",
                    *//*style: "width: 100px; height:100%; line-height:100%; text-align: left",*//*
                    onClick: lang.hitch(this,  function(){*/

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
                        gp = new esri.tasks.Geoprocessor("http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/UpstreamWWTrace/GPServer/Upstream_WW_Trace");
                        gp.setOutSpatialReference({wkid:26985});

                        esri.bundle.toolbars.draw.addPoint = "Click to place the origin point of the trace";

                        dojo.connect(this.toolbar, "onDrawEnd", lang.hitch(this, this.executeUpstreamWWTrace));

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

                //var modulePath = "/src/modules/core/attributetable/attributetable"

                var wwResultsTableButton = new ToggleButton({
                    name: "wwResultsButton",
                    type: "button",
                    label: "View and Export Results",
                    showLabel: "true",
                    style: "width: 100px; height:100%; line-height:100%; text-align: left; visibility:visible;"
                }, "WWResultsButton");


                var modulePath = "src/modules/core/attributetable/attributetable.js";
                var toolClick = on(wwResultsTableButton, "click", lang.hitch(this, function () {
                    toolClick.remove();
                    var widgetParams = {
                        buttonDivId:  "WWResultsButton",
                        floaterDivId: 'floaterAttribute',
                        AppConfig: this._AppConfig
                    };

                    this.AttWidget = new AttributeTable(widgetParams);
                }));

                // WATER ISOLATION TRACE

                // VALVE ISOLATION TRACE
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
                        gp = new esri.tasks.Geoprocessor("http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/WaterValveIsolation/GPServer/ValveIsolationService");
                        gp.setOutSpatialReference({wkid:26985});

                        esri.bundle.toolbars.draw.addPoint = "Click to place the origin point of the trace";

                        dojo.connect(this.toolbar, "onDrawEnd", lang.hitch(this, this.executeWaterTrace));

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

                //WaterResultsButton
                var waterResultsTableButton = new Button({
                    name: "WaterResultsButton",
                    type: "button",
                    label: "View Results",
                    showLabel: "true",
                    style: "width: 100px; height:100%; line-height:100%; text-align: left; visibility:hidden;",
                    onClick: lang.hitch(this, function(){

                    })                      //End On Click for Trace Button
                }, "WaterResultsButton");

                // VALVE ISOLATION TRACE
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
                var mapurl = "http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/UpstreamWWTrace/MapServer/jobs/" + jobInfo.jobId;

                //the code snippet assumes the featureLayer is the first layer in the result map service
                var fLayerUrl = mapurl + "/0";
                console.log (fLayerUrl);
                //create a feature layer
                //the MODE_ONDEMAND property allows the client to restrictively download features for current web app extent
                var featurelayer= FeatureLayer(fLayerUrl, {
                    id: "gpfLayer",
                    mode: esri.layers.FeatureLayer.MODE_SNAPSHOT,
                    outFields: ["*"]
                });

                //make renderer
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
                var rend = new SimpleRenderer(simpleJson);

                featurelayer.setRenderer(rend);
/*
                var msLayer  = new ArcGISDynamicMapServiceLayer(mapurl);

                dojo.connect (featurelayer, "onLoad", function(){
                    //Get Extent from Map Service
                    console.log ("layer loaded")
                    var zoomExtent = esri.graphicsExtent(featureLayer.graphics);
                    this.map.setExtent(zoomExtent, true);
                })
*/
                //Hide Loading Icon
                mapHandler.HideLoadingIcon();
                mapHandler.EnableMapPopups();
                //dojo.byId("wwTraceButton").checked = 'false';
                dojo.byId("msgWWTraceWarning").style.visibility = 'hidden';
                dojo.byId("msgValveTraceWarning").style.visibility = 'hidden';


                this.map.addLayer(featurelayer);

                var query = new esri.tasks.Query();
                query.where = "1=1";
                query.outSpatialReference = this.map.spatialReference;
                featurelayer.queryFeatures(query, lang.hitch(this, function (featureSet) {
                    var data = [];
                    if (featureSet && featureSet.features && featureSet.features.length > 0) {
                        data = featureSet.features;
                    }
                    var zoomExtent = esri.graphicsExtent(data);
                    this.map.setExtent(zoomExtent);
                }));

                 //show button for showing attribute table
                    domStyle.set(registry.byId("WWResultsButton").domNode, 'visibility', 'visible');


                }
                else
                {
                    //Show Error
                    this.TraceError("wwTrace");
                }

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
                var params = { "Input_Point":featureSet };
                gp.submitJob(params, lang.hitch(this, this.DisplayWaterValveTrace));
                document.body.style.cursor = "wait";

                //Show Loading Icon
                mapHandler.ShowLoadingIcon();

            }
            , DisplayWaterValveTrace: function(jobInfo) {
                document.body.style.cursor = "default";

                if (jobInfo.jobStatus == "esriJobSucceeded") {
                var mapurl = "http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/WaterValveIsolation/MapServer/jobs/" + jobInfo.jobId;

                //the code snippet assumes the featureLayer is the first layer in the result map service
                var fMainsLayerUrl = mapurl + "/1";
                var fValvesLayerUrl = mapurl + "/0";

                console.log (fMainsLayerUrl);
                console.log (fValvesLayerUrl);

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
                var mainsrend = new SimpleRenderer(simpleLineJson);
                var valvesrend = new SimpleRenderer(simplepointsJson);

                gpfMainsLayer.setRenderer(mainsrend);
                gpfValvesLayer.setRenderer(valvesrend);
                /*
                 var msLayer  = new ArcGISDynamicMapServiceLayer(mapurl);

                 dojo.connect (featurelayer, "onLoad", function(){
                 //Get Extent from Map Service
                 console.log ("layer loaded")
                 var zoomExtent = esri.graphicsExtent(featureLayer.graphics);
                 this.map.setExtent(zoomExtent, true);
                 })
                 */
                //Hide Loading Icon
                mapHandler.HideLoadingIcon();
                mapHandler.EnableMapPopups();
                //dojo.byId("waterTraceButton").checked = 'false';
                dojo.byId("msgWWTraceWarning").style.visibility = 'hidden';
                dojo.byId("msgValveTraceWarning").style.visibility = 'hidden';
                this.map.addLayer(gpfMainsLayer);
                this.map.addLayer(gpfValvesLayer);

                var query = new esri.tasks.Query();
                query.where = "1=1";
                query.outSpatialReference = this.map.spatialReference;
                gpfValvesLayer.queryFeatures(query, lang.hitch(this, function (featureSet) {
                    var data = [];
                    if (featureSet && featureSet.features && featureSet.features.length > 0) {
                        data = featureSet.features;
                    }
                    var zoomExtent = esri.graphicsExtent(data);
                    this.map.setExtent(zoomExtent.expand(1.2));
                }));

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
                console.log (source);
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


            , ClearResults: function(){
                var layersList = ["gpfLayer", "gpfMainsLayer", "gpfValvesLayer"]
                //Clear the Feature Layer Result & Graphic
                this.map.graphics.clear();

                dojo.byId("msgWWTraceWarning").style.visibility = 'hidden';
                dojo.byId("msgValveTraceWarning").style.visibility = 'hidden';
                //show button for showing attribute table

                domStyle.set(registry.byId("WWResultsButton").domNode, 'visibility', 'hidden');
                domStyle.set(registry.byId("WaterResultsButton").domNode, 'visibility', 'hidden');

                //Hide Atribute Table
                if (dom.byId("floaterAttribute")) {
                    //dom.byId("floaterAttribute").style.visibility === 'hidden'
                    this.AttWidget.ClearGrid();
                    registry.byId("floaterAttribute").hide();
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