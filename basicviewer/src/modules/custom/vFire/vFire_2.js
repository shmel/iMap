/**
 * Created by pskym on 10/16/2014.
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
define(["dojo/_base/declare", "dojo/dom-construct", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/on", "dijit/registry"
        , "dojo/text!./templates/vFire.html", "dojo/_base/lang"
        , "dojo/dom", "dojo/query", "dojox/charting/Chart", "dojox/charting/themes/Claro", "../../core/utilities/maphandler"
        , "dojox/charting/plot2d/Pie", "dojox/charting/action2d/Tooltip", "dojox/charting/action2d/MoveSlice", "dojo/_base/array", "esri/tasks/QueryTasks", "esri/tasks/query", "xstyle/css!./css/vFire.css"],
    function(declare, domConstruct, WidgetBase, TemplatedMixin, on, regstry, template, lang
        , dom, query, Chart, theme, mapHandler, PiePlot, Tooltip, MoveSlice, array, QueryTask, Query){
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template
            , baseClass: "vFireDiv"
            , map: null
            , chartData: null
            , constructor: function(arcgs){
                declare.safeMixin(this, arcgs);
                this.map = mapHandler.map;
                this.chartData = [
                    {x: 1, y: 10, tooltip: "Not Exercised Yet", text:"", color: "rgb(2, 92, 230)", mylabel: "Not Exercised Yet"},
                    {x: 1, y: 15, tooltip: "In Process",  text: "", color: "rgb(255, 255, 2)", mylabel: "In Process" },
                    {x: 1, y: 20, tooltip: "In Process, Valve Not Found", text: "", color: "rgb(170, 2, 230)", mylabel: "In Process, Valve Not Found" },
                    {x: 1, y: 15, tooltip: "In Process, Repair Required", text: "", color: "rgb(230, 2, 2)", mylabel: "In Process, Repair Required" },
                    {x: 1, y: 25, tooltip: "Exercise Completed", text: "",  color: "rgb(57, 169, 2)", mylabel: "Exercise Completed"},
                    {x: 1, y: 35, tooltip: "Requires GPS Location", text: "", color: "rgb(137, 91, 70)", mylabel: "Requires GPS Location" }
                ];
            }
            , postCreate: function () {
                this.inherited(arguments);
            }
            , startup: function () {
                this.inherited(arguments);
                var pieChart = new Chart("vFireChartDiv", {
                    title: "V-FIRE Valve Status",
                    titlePos: "top",
                    titleFont: "normal normal normal 12pt Arial",
                    titleFontColor: "black"
                });
                pieChart.setTheme(theme);
                pieChart.addPlot("default", {
                    type: PiePlot,
                    radius: 200,
                    fontColor: "black",
                    labelOffset: -20
                });
                pieChart.addSeries("Pie Chart - FY XXXX", this.chartData);
                var tip = new Tooltip(pieChart, "default", {
                    text: lang.hitch(this, function(o){
                        return this.chartData[o.index].tooltip + "<br/>" + this.chartData[o.index].y;
                    })
                });
                var anim = new MoveSlice(pieChart, "default", {});
                pieChart.render();
            }
        });
    });