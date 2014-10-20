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
define(["dojo/_base/declare", "dojo/dom-construct", "dojo/on", "dojo/text!./templates/vFire.html", "dojo/_base/lang", "dojo/dom", "dojo/query", "dojo/_base/array", "dojo/date/locale"
    , "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/registry", "dijit/form/DateTextBox"
    , "dojox/charting/Chart", "dojox/charting/plot2d/Pie", "dojox/charting/action2d/Tooltip", "dojox/charting/action2d/MoveSlice", "dojox/charting/widget/SelectableLegend", "dojox/charting/SimpleTheme"
    , "../../core/utilities/maphandler"
    , "esri/tasks/QueryTask", "esri/tasks/query" , "esri/tasks/StatisticDefinition"
    , "dojo/domReady!"
    , "xstyle/css!./css/vFire.css"],
    function(declare, domConstruct, on, template, lang, dom, query, arrayUtil, locale
            , WidgetBase, TemplatedMixin, registry, DateTextBox
            , Chart, PiePlot, Tooltip, MoveSlice, SelectableLegend, SimpleTheme
            , mapHandler
            , QueryTask, Query, StatisticDefinition){
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template
            , baseClass: "vFireDiv"
            , map: null
            , chartData: null
            , constructor: function(arcgs){
                declare.safeMixin(this, arcgs);
                this.map = mapHandler.map;
            }
            , postCreate: function () {
                this.inherited(arguments);
            }
            , startup: function () {
                this.inherited(arguments);
                var countDiv = dom.byId("completedCountDiv");
                var valveTrans = [
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
                ];
                var queryTest = new Query();
                var testQueryTask = new QueryTask("http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/water_vep_valves_fs/MapServer/0/query");
                var stats = new StatisticDefinition();
                stats.statisticType = "count";
                stats.onStatisticField = "OBJECTID";
                stats.outStatisticFieldName = "CountByValveStatus";
                queryTest.where = "1 = 1";
                queryTest.outStatistics = [stats];
                queryTest.groupByFieldsForStatistics = ["VEP_STATUS"];
                testQueryTask.execute(queryTest, lang.hitch(this, function(resultsTest){
                    this.chartData = arrayUtil.map(resultsTest.features, function(featureTest) {
                        var vStatus = featureTest.attributes["VEP_STATUS"];
                        var vCount = featureTest.attributes["CountByValveStatus"];
                        if (vStatus == 4) {
                            countDiv.innerHTML = "<big><big><big><center>" + vCount + " valves completed to date</center></big></big></big>";
                        };
                        return {
                            x: 1,
                            y: vCount,
                            tooltip: valveTrans[vStatus].tooltip,
                            color: valveTrans[vStatus].color,
                            legend: valveTrans[vStatus].tooltip,
                            text: vCount
                        }
                    });
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
                            fill: "#eaf4ff"
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
                    var selectableLegend = new SelectableLegend({
                        chart: pieChart
                    }
                    , "selectableLegend");
                }));
                // Text Date Box
                declare("OracleDateTextBox", DateTextBox, {
                    oracleFormat: {selector: 'date', datePattern: 'dd-MMM-yyyy', locale: 'en-us'},
                    value: "", // prevent parser from trying to convert to Date object
                    postMixInProperties: function(){ // change value string to Date object
                        this.inherited(arguments);
                        // convert value to Date object
                        this.value = locale.parse(this.value, this.oracleFormat);
                    },
                    // To write back to the server in Oracle format, override the serialize method:
                    serialize: function(dateObject, options){
                        return locale.format(dateObject, this.oracleFormat).toUpperCase();
                    }
                });
                function showServerValue(){
                    dom.byId('toServerValue').value = document.getElementsByName('oracle')[0].value;
                }
                new OracleDateTextBox({
                    value: "31-DEC-2009",
                    name: "oracle",
                    onChange: function(v){ setTimeout(showServerValue, 0)}
                }, "oracle").startup();
                showServerValue();
            }

    });
});