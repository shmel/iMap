/**
 * Created by pskym on 10/15/2014.
 */
/** A pattern to use for custom tools. Implements a floating pane with custom content (or an esri dijit) inside.
 *  dojo/text! and xstyle/css! are used to dynamically load an HTML fragment and CSS sheet for this module. Update to your file names.
 *  utilities/maphandler is a singleton object containing a reference to the map object and other properties/fxns- such as enabling/disabling popups.
 *  A good help sample: http://dojotoolkit.org/documentation/tutorials/1.8/recipes/custom_widget/
 *  If using an esri dijit, they should all be AMD-compatible. Help: http://help.arcgis.com/en/webapi/javascript/arcgis/jshelp/#inside_dojo_amd
 *
 *  Note: It seems when working with map layer events (e.g. "onClick"),
 *  in order to work with modules, dojo/aspect after() or before() functions should be used.
 */
define(["dojo/_base/declare", "dojo/dom-construct", "dojo/on", "dojo/text!./templates/vFire.html", "dojo/_base/lang", "dojo/dom", "dojo/query", "dojo/_base/array", "dojo/date/locale", "dojo/parser", "dojo/date"
        , "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/registry", "dijit/form/DateTextBox", "dijit/form/Button"
        , "dojox/charting/Chart", "dojox/charting/plot2d/Pie", "dojox/charting/action2d/Tooltip", "dojox/charting/action2d/MoveSlice", "dojox/charting/widget/SelectableLegend", "dojox/charting/SimpleTheme", "dojox/charting/widget/Legend"
        , "../../core/utilities/maphandler"
        , "esri/tasks/QueryTask", "esri/tasks/query" , "esri/tasks/StatisticDefinition", "esri/symbols/SimpleMarkerSymbol", "esri/symbols/SimpleLineSymbol", "esri/tasks/Geoprocessor", "esri/renderers/SimpleRenderer", "esri/graphic", "esri/layers/ImageParameters", "esri/tasks/JobInfo", "esri/layers/FeatureLayer"
        , "dojo/domReady!"
        , "xstyle/css!./css/vFire.css"],
    function(declare, domConstruct, on, template, lang, dom, query, arrayUtil, locale, parser, date
        , WidgetBase, TemplatedMixin, registry, DateTextBox, Button
        , Chart, PiePlot, Tooltip, MoveSlice, SelectableLegend, SimpleTheme, pLegend
        , mapHandler
        , QueryTask, Query, StatisticDefinition, SimpleMarkerSymbol, SimpleLineSymbol, GP, SimpleRenderer, Graphic, ImageParameters, JobInfo, FeatureLayer){
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template
            , baseClass: "vFireDiv"
            , map: null
            , chartData: null
            , valveTrans: [
                {
                    "color": "rgb(2, 92, 230)",
                    "tooltip": "Not Exercised Yet",
                    "index": "0"
                },
                {
                    "color": "rgb(255, 255, 2)",
                    "tooltip": "In Process",
                    "index": "1"
                },
                {
                    "color": "rgb(170, 2,230)",
                    "tooltip": "In Process, Valve Not Found",
                    "index": "2"
                },
                {
                    "color": "rgb(230, 2, 2)",
                    "tooltip": "In Process, Repair Required",
                    "index": "3"
                },
                {
                    "color": "rgb(57, 169, 2)",
                    "tooltip": "Exercise Completed",
                    "index": "4"
                },
                {
                    "color": "rgb(137, 91, 70)",
                    "tooltip": "Requires GPS Location",
                    "index": "5"
                }
            ]
            , constructor: function(arcgs){
                declare.safeMixin(this, arcgs);
                this.map = mapHandler.map;
            }
            , postCreate: function () {
                this.inherited(arguments);
            }
            , startup: function () {
                convertStart = "";
                convertEnd = "";
                featureLayer = null;
                this.inherited(arguments);
                //call private function _queryMap with whereClause "1 = 1" initially
                this._queryMap("1 = 1");
                //create DateTextBoxes for startDate and endDate
                var widgetStart = new DateTextBox({
                    value: new Date()
                }, dojo.byId("startDate"));
                var widgetEnd = new DateTextBox({
                    value: new Date()
                }, dojo.byId("endDate"));
                //create buttons yesterday, lastWeek, submit, and original along with onClick events
                var yesterday = new Button ({
                    label: "Yesterday",
                    type: "button",
                    name: "Yesterday"
                }, "yesterday");
                yesterday.startup();
                on(yesterday, "click", lang.hitch(this, function(){
                    var $today = new Date();
                    var $yesterday = new Date($today);
                    $yesterday.setDate($today.getDate() - 1);
                    convertStart = widgetStart.format($yesterday, {
                        datePattern: "yyyy-MM-dd",
                        selector: "date"
                    });
                    convertEnd = widgetEnd.format($today, {
                        datePattern: "yyyy-MM-dd",
                        selector: "date"
                    });
                    this._clearLayer(featureLayer);
                    this._queryMap("VEP_LAST_EDIT > date '" + convertStart + "' AND VEP_LAST_EDIT <= date '" + convertEnd + "'");
                }));
                var lastWeek = new Button ({
                    label: "Last Week",
                    type: "button",
                    name: "lastWeek"
                }, "lastWeek");
                lastWeek.startup();
                on(lastWeek, "click", lang.hitch(this, function(){
                    var $today = new Date();
                    var $oneWeekBack = new Date($today);
                    var $oneWeekBackEnd = new Date($today);
                    var $Day = $oneWeekBack.getDay();
                    var $Sunday = $oneWeekBack;
                    $Sunday.setDate($today.getDate() - 7 - $Day);
                    var $Saturday = $oneWeekBackEnd;
                    $Saturday.setDate($today.getDate() - $Day - 1);
                    convertStart = widgetStart.format($Sunday, {
                        datePattern: "yyyy-MM-dd",
                        selector: "date"
                    });
                    convertEnd = widgetEnd.format($Saturday, {
                        datePattern: "yyyy-MM-dd",
                        selector: "date"
                    });
                    this._clearLayer(featureLayer);
                    this._queryMap("VEP_LAST_EDIT > date '" + convertStart + "' AND VEP_LAST_EDIT <= date '" + convertEnd + "'");
                }));
                var submit = new Button ({
                    label: "Submit",
                    type: "button",
                    name: "reQUERY"
                }, "submitCustomDate");
                submit.startup();
                on(submit, "click", lang.hitch(this, function(){
                    convertStart = widgetStart.format(widgetStart.value, {
                        datePattern: "yyyy-MM-dd",
                        selector: "date"
                    });
                    convertEnd = widgetEnd.format(widgetEnd.value, {
                        datePattern: "yyyy-MM-dd",
                        selector: "date"
                    });
                    this._clearLayer(featureLayer);
                    this._queryMap("VEP_LAST_EDIT > date '" + convertStart + "' AND VEP_LAST_EDIT <= date '" + convertEnd + "'");
                }));
                var Original = new Button ({
                    label: "Lifetime",
                    type: "button",
                    name: "Original"
                }, "Original");
                Original.startup();
                on(Original, "click", lang.hitch(this, function(){
                    convertStart = "1800-01-01";
                    convertEnd = "4000-12-31";
                    this._clearLayer(featureLayer);
                    this._queryMap("1 = 1");
                }));
                var Clear = new Button ({
                    label: "Clear Selection",
                    type: "button",
                    name: "clearQuerys"
                }, "clearQuery");
                Clear.startup();
                on(Clear, "click", lang.hitch(this, function () {
                    this._clearLayer(featureLayer);
                }));
                //whereClause builder
                conjugator = {
                    "State_Date" : convertStart,
                    "End_Date" : convertEnd,
                    "Valve_Count" : "",
                    "Valve_Limit" : "1000",
                    "Valve_Status" : "",
                    "whereClause" : "",
                    "color" : null
                };
                conjugator.whereClause = "VEP_LAST_EDIT > date '" + conjugator.State_Date + "' AND VEP_LAST_EDIT <= date '" + conjugator.End_Date + "' AND VEP_STATUS = " + conjugator.Valve_Status;
            }
            , //private function to which passes query as whereClause then creates the pie chart and legend to view
            _queryMap: function(whereClause) {
                var countDiv = dom.byId("completedCountDiv");
                var randomMath = Math.random();
                var queryTest = new Query();
                var testQueryTask = new QueryTask("http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/water_vep_valves_fs/MapServer/0/query");
                var stats = new StatisticDefinition();
                stats.statisticType = "count";
                stats.onStatisticField = "OBJECTID";
                stats.outStatisticFieldName = "CountByValveStatus";
                queryTest.where = whereClause + " AND " + randomMath + " = " + randomMath;
                queryTest.outStatistics = [stats];
                queryTest.groupByFieldsForStatistics = ["VEP_STATUS"];
                testQueryTask.execute(queryTest, lang.hitch(this, function(resultsTest) {
                    var valveTrans = this.valveTrans;
                    this._clearResults();
                    var countValvesCompleted = 0;
                    var countValvesPercent = "";
                    var sumN = 0;
                    if (whereClause == "1 = 1") {
                        arrayUtil.map(resultsTest.features, function(sumCount) {
                            sumN += sumCount.attributes["CountByValveStatus"];
                        })
                    }
                    this.chartData = arrayUtil.map(resultsTest.features, function(featureTest) {
                        var vStatus = featureTest.attributes["VEP_STATUS"];
                        var vCount = featureTest.attributes["CountByValveStatus"];
                        if (vStatus == 4) {
                            countValvesCompleted = vCount;
                        }
                        var pieChartPercent = "";
                        if (whereClause == "1 = 1") {
                            var percent = vCount/sumN;
                            var percentage = percent * 100;
                            var percentTwoDeci = percentage.toFixed(2);
                            var percentString = percentTwoDeci.toString();
                            pieChartPercent = ", " + percentString + "%";
                            if (vStatus == 4) {
                                countValvesPercent = ", (" + percentString + "%)";
                            }
                        }
                        if(vCount > 0) {
                            return {
                                x: 1,
                                y: vCount,
                                tooltip: valveTrans[vStatus].tooltip,
                                color: valveTrans[vStatus].color,
                                legend: valveTrans[vStatus].tooltip + pieChartPercent,
                                text: vCount,
                                index: valveTrans[vStatus].index
                            }
                        }
                    });
                    if(resultsTest.features.length == 0) {
                        countDiv.innerHTML = "<h1>No Valves Were Modified During The Specified Time-Frame<h1>";
                    } else {
                        countDiv.innerHTML = "<h1><b>" + countValvesCompleted + countValvesPercent + "</b> Valves Completed</h1>";
                    }
                    var pieChart = new Chart("vFireChartDiv", {
                        title: "",
                        titlePos: "top",
                        titleFont: "normal normal normal 12 pt Arial",
                        titleFontColor: "black",
                        legend: this.chartData.legend
                    });
                    var myTheme = new SimpleTheme({
                        chart: {
                            stroke: null,
                            fill: "transparent",
                            pageStyle: null
                        },
                        plotarea: {
                            stroke: null,
                            fill: "transparent"
                        }
                    });
                    pieChart.setTheme(myTheme);
                    pieChart.addPlot("default", {
                        type: PiePlot,
                        radius: 70,
                        fontColor: "black",
                        labelOffset: -10,
                        font: "normal normal 10pt Tahoma",
                        labelStyle: "columns",
                        htmlLabels: true
                    });
                    pieChart.addSeries("V-FIRE Valve Status", this.chartData);
                    var tip = new Tooltip(pieChart, "default", {
                        text: lang.hitch(this, function(o) {
                            return this.chartData[o.index].tooltip + "<br/>" + this.chartData[o.index].y;
                        })
                    });
                    var anim = new MoveSlice(pieChart, "default", {});
                    pieChart.render();
                    pieChart.connectToPlot("default", lang.hitch(this, function(evt) {
                        if(evt.type == "onclick") {
                            if (this.pieQueryinProcess == false) {
                                this.pieQueryinProcess = true;
                                this._clearLayer(featureLayer);
                                var colorSlice = evt.run.data[evt.index].color;
                                var colorSliceRGB = colorSlice.replace("rgb(", "");
                                var colorSlicetwofivefive = colorSliceRGB.replace(")", ",255");
                                colorSlice = colorSlicetwofivefive.replace(", ", ",");
                                var colorSlicePreArray = colorSlice.replace(" ", "");
                                colorSlice = colorSlicePreArray.split(",");
                                var startDate = convertStart;
                                var endDate = convertEnd;
                                var count = evt.run.data[evt.index].y;
                                var c = count.toString();
                                var status = evt.run.data[evt.index].index;
                                var s = status.toString();
                                conjugator.State_Date = startDate;
                                conjugator.End_Date = endDate;
                                conjugator.Valve_Count = c;
                                conjugator.Valve_Status = status;
                                if (convertStart == "") {
                                    conjugator.whereClause = "VEP_STATUS = " + conjugator.Valve_Status;
                                }
                                else {
                                    conjugator.whereClause = "VEP_LAST_EDIT > date '" + conjugator.State_Date + "' AND VEP_LAST_EDIT <= date '" + conjugator.End_Date + "' AND VEP_STATUS = " + conjugator.Valve_Status;
                                }
                                this._displayFMainsLayer(colorSlice);
                            }
                        }
                    }));
                    var legend = dijit.byId("Legend");
                    if(legend != undefined) {
                        legend.destroyRecursive(true);
                    }
                    var Legend = new pLegend({
                        chart: pieChart,
                        horizontal: false,
                        domNode: Legend
                    }, "Legend");
                    Legend.refresh();
                }));
            }
            , //private function to delete the domNodes associated with the pie chart and legend
            _clearResults: function() {
                var clearPieChart = dom.byId("vFireChartDiv");
                clearPieChart.innerHTML = null;
                var clearCompletedCount = dom.byId("completedCountDiv");
                clearCompletedCount.innerHTML = null;
            }
            , //private function zoom to layer
            _zoomToLayer: function(featurelayer) {
                //var featurelayer = this.map.getLayer(layername)
                var query = new Query();
                var random = (new Date()).getTime();
                query.where = random + " = " + random;
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
            , //private function display features
            _displayFMainsLayer: function(colorSlice) {
                document.body.style.cursor = "default";
                var FLayerURL = "http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/water_vep_valves_fs/MapServer/0";
                featureLayer = new FeatureLayer(FLayerURL, {
                    id: "FLayer",
                    mode: FeatureLayer.MODE_SNAPSHOT
                });
                var random = (new Date()).getTime();
                featureLayer.setDefinitionExpression(conjugator.whereClause + " AND " + random + " = " + random);
                var simpleJson = {
                    "type": "simple",
                    "label": "",
                    "description": "",
                    "symbol": {
                        "type": "esriSMS",
                        "style": "esriSMSCircle",
                        //"color": [0,255,0,255],
                        "color": colorSlice,
                        "width": 32,
                        "outline": {
                            //"color" : [255,255,255,255],
                            "color": [0, 255, 255, 255],
                            "width" : 3,
                            "type" : "esriSLS",
                            "style" : "esriSLSSolid"
                        }
                    }
                };
                var count = parseInt(conjugator.Valve_Count);
                var limit = parseInt(conjugator.Valve_Limit);
                if(count <= limit) {
                    mapHandler.ShowLoadingIcon();
                    var rend = new SimpleRenderer(simpleJson);
                    featureLayer.setRenderer(rend);
                    featureLayer.setMinScale(0);
                    this.map.addLayer(featureLayer);
                    this._zoomToLayer(featureLayer);
                    mapHandler.HideLoadingIcon();
                }
                else {
                    var messageAlert = "There are too many valves to display at this time.";
                    alert(messageAlert);
                }
                this.pieQueryinProcess = false;
            }
            , //private function to clear layer
            _clearLayer: function(featureLayer) {
                var layersList = ["FLayer"];
                if (featureLayer != null) {
                    this.map.removeLayer(featureLayer);
                }
            }
            , //private process
            pieQueryinProcess : false

        });
    });

