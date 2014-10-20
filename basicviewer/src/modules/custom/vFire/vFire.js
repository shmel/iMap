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
define(["dojo/_base/declare", "dojo/dom-construct", "dojo/on", "dojo/text!./templates/vFire.html", "dojo/_base/lang", "dojo/dom", "dojo/query", "dojo/_base/array"
    , "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/registry"
    , "dojox/charting/Chart", "dojox/charting/themes/Claro", "dojox/charting/plot2d/Pie", "dojox/charting/action2d/Tooltip", "dojox/charting/action2d/MoveSlice"
    , "../../core/utilities/maphandler"
    , "esri/tasks/QueryTask", "esri/tasks/query" , "esri/tasks/StatisticDefinition"
    , "xstyle/css!./css/vFire.css"],
    function(declare, domConstruct, on, template, lang, dom, query, arrayUtil
            , WidgetBase, TemplatedMixin, registry
            , Chart, theme, PiePlot, Tooltip, MoveSlice
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
                            countDiv.innerHTML = vCount + " Valves completed to date";
                        };
                        return {
                            x: 1,
                            y: vCount,
                            tooltip: valveTrans[vStatus].tooltip,
                            color: valveTrans[vStatus].color,
                            text: vCount
                        }
                    });
                    var pieChart = new Chart("vFireChartDiv", {
                        title: "V-FIRE Valve Status",
                        titlePos: "top",
                        titleFont: "normal normal normal 12 pt Arial",
                        titleFontColor: "black"
                    });
                    pieChart.setTheme(theme);
                    pieChart.addPlot("default", {
                        type: PiePlot,
                        radius: 200,
                        fontColor: "black",
                        labelOffset: -20
                    });
                    pieChart.addSeries("V-FIRE Valve Status", this.chartData);
                    var tip = new Tooltip(pieChart, "default", {
                        text: lang.hitch(this, function(o) {
                            return this.chartData[o.index].tooltip + "<br/>" + this.chartData[o.index].y
                        })
                    });
                    var anim = new MoveSlice(pieChart, "default", {});
                    pieChart.render();
                }));
            }

    });
});