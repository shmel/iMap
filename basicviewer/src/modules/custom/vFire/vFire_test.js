/**
 * Created by pskym on 10/20/2014.
 */
define(["dojo/_base/declare", "dojo/dom-construct", "dojo/on", "dojo/text!./templates/vFire.html", "dojo/_base/lang", "dojo/dom", "dojo/query", "dojo/_base/array"
    , "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/registry"
    , "dojox/charting/Chart", "dojox/charting/themes/Claro", "dojox/charting/plot2d/Pie", "dojox/charting/action2d/Tooltip", "dojox/charting/action2d/MoveSlice"
    , "../../core/utilities/maphandler"
    , "esri/tasks/QueryTask", "esri/tasks/query" , "esri/tasks/StatisticDefinition"
    , "xstyle/css!./css/vFire.css"],
    function(declare, domConstruct, on, template, lang, dom, query, array
        , WidgetBase, TemplatedMixin, regstry
        , Chart, theme, PiePlot, Tooltip, MoveSlice
        , mapHandler
        , QueryTask, Query, StatisticDefinition){
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template
            , baseClass: "vFireDiv"
            , map: null
            , chartData: null
            , constructor: function(arcgs) {
                declare.safeMixin(this, arcgs);
                this.map = mapHandler.map;
                var queryTest = new Query();
                var testQueryTask = new QueryTask("http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/water_vep_valves_fs/MapServer/0/query");
                var stats = new StatisticDefinition();
                stats.statisticType = "count";
                stats.onStatisticField = "OBJECTID";
                stats.outStatisticFieldName = "CountByValveStatus";
                queryTest.where = "1=1";
                queryTest.outStatistics = [stats];
                queryTest.groupFieldsForStatistics = "VEP_STATUS";
                testQueryTask.execute(queryTest, lang.hitch(this, function(resultsTest) {
                    this.chartData = array.map(resultsTest, function(featureTest) {
                        return {
                            kkkkk
                        }
                    })
                }));
            }
        })
    });