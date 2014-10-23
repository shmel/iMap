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
    , "esri/tasks/QueryTask", "esri/tasks/query" , "esri/tasks/StatisticDefinition"
    , "dojo/domReady!"
    , "xstyle/css!./css/vFire.css"],
    function(declare, domConstruct, on, template, lang, dom, query, arrayUtil, locale, parser, date
            , WidgetBase, TemplatedMixin, registry, DateTextBox, Button
            , Chart, PiePlot, Tooltip, MoveSlice, SelectableLegend, SimpleTheme, pLegend
            , mapHandler
            , QueryTask, Query, StatisticDefinition){
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template
            , baseClass: "vFireDiv"
            , map: null
            , chartData: null
            , valveTrans: [
                {
                    "color": "rgb(2, 92, 230)",
                    "tooltip": "Not Exercised Yet"
                },
                {
                    "color": "rgb(255, 255, 2)",
                    "tooltip": "In Process"
                },
                {
                    "color": "rgb(170, 2,230)",
                    "tooltip": "In Process, Valve Not Found"
                },
                {
                    "color": "rgb(230, 2, 2)",
                    "tooltip": "In Process, Repair Required"
                },
                {
                    "color": "rgb(57, 169, 2)",
                    "tooltip": "Exercise Completed"
                },
                {
                    "color": "rgb(137, 91, 70)",
                    "tooltip": "Requires GPS Location"
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
                this.inherited(arguments);
                this._queryMap("1 = 1");
                var widgetStart = new DateTextBox({
                    value: new Date()
                }, dojo.byId("startDate"));
                var widgetEnd = new DateTextBox({
                    value: new Date()
                }, dojo.byId("endDate"));
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
                    var convertYesterday = widgetStart.format($yesterday, {
                        datePattern: "yyyy-MM-dd",
                        selector: "date"
                    });
                    var convertEnd = widgetEnd.format($today, {
                        datePattern: "yyyy-MM-dd",
                        selector: "date"
                    });
                    this._queryMap("VEP_LAST_EDIT > date '" + convertYesterday + "' AND VEP_LAST_EDIT <= date'" + convertEnd + "'");
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
                    var convertSunday = widgetStart.format($Sunday, {
                        datePattern: "yyyy-MM-dd",
                        selector: "date"
                    });
                    var convertSaturday = widgetEnd.format($Saturday, {
                        datePattern: "yyyy-MM-dd",
                        selector: "date"
                    });
                    this._queryMap("VEP_LAST_EDIT > date '" + convertSunday + "' AND VEP_LAST_EDIT <= date'" + convertSaturday + "'");
                }));
                var submit = new Button ({
                    label: "Submit",
                    type: "button",
                    name: "reQUERY"
                }, "submitCustomDate");
                submit.startup();
                on(submit, "click", lang.hitch(this, function(){
                    var convertStart = widgetStart.format(widgetStart.value, {
                        datePattern: "yyyy-MM-dd",
                        selector: "date"
                    });
                    var convertEnd = widgetEnd.format(widgetEnd.value, {
                        datePattern: "yyyy-MM-dd",
                        selector: "date"
                    });
                    this._queryMap("VEP_LAST_EDIT > date '" + convertStart +"' AND VEP_LAST_EDIT <= date'" + convertEnd + "'");
                }));
                var Original = new Button ({
                    label: "Lifetime",
                    type: "button",
                    name: "Original"
                }, "Original");
                Original.startup();
                on(Original, "click", lang.hitch(this, function(){
                    this._queryMap("1 = 1")
                }));
            }
            , _queryMap: function(whereClause) {
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
                testQueryTask.execute(queryTest, lang.hitch(this, function(resultsTest){
                    var valveTrans = this.valveTrans;
                    this._clearResults();
                    var countValvesCompleted = 0;
                    this.chartData = arrayUtil.map(resultsTest.features, function(featureTest) {
                        var vStatus = featureTest.attributes["VEP_STATUS"];
                        var vCount = featureTest.attributes["CountByValveStatus"];
                        if (vStatus == 4) {
                            countValvesCompleted = vCount

                        }
                        if(vCount > 0) {
                            return {
                                x: 1,
                                y: vCount,
                                tooltip: valveTrans[vStatus].tooltip,
                                color: valveTrans[vStatus].color,
                                legend: valveTrans[vStatus].tooltip,
                                text: vCount
                            }
                        }
                    });
                    if(resultsTest.features.length == 0) {
                        countDiv.innerHTML = "<h1>No Valves Were Modified During The Specified Time-Frame<h1>";
                    } else {
                        countDiv.innerHTML = "<h1><b>" + countValvesCompleted + "</b> Valves Completed</h1>";
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
                        radius: 80,
                        fontColor: "black",
                        labelOffset: -10,
                        font: "normal normal 10pt Tahoma",
                        labelStyle: "columns",
                        htmlLabels: true
                    });
                    pieChart.addSeries("V-FIRE Valve Status", this.chartData);
                    var tip = new Tooltip(pieChart, "default", {
                        text: lang.hitch(this, function(o) {
                            return this.chartData[o.index].tooltip + "<br/>" + this.chartData[o.index].y
                        })
                    });
                    var anim = new MoveSlice(pieChart, "default", {});
                    pieChart.render();
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
            , _clearResults : function(){
                var clearPieChart = dom.byId("vFireChartDiv");
                clearPieChart.innerHTML = null;
                var clearCompletedCount = dom.byId("completedCountDiv");
                clearCompletedCount.innerHTML = null;
            }

    });
});