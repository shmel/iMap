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
define(["dojo/_base/declare", "dojo/dom-construct", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/on", "dijit/registry"
    , "dojo/text!./templates/vFire.html", "dojo/_base/lang"
    , "dojo/dom", "dojo/query", "dojox/charting/Chart", "dojox/charting/themes/Claro", "../../core/utilities/maphandler"
    , "dojox/charting/plot2d/Pie", "dojox/charting/action2d/Tooltip", "dojox/charting/action2d/MoveSlice", "xstyle/css!./css/vFire.css"],
    function(declare, domConstruct, WidgetBase, TemplatedMixin, on, regstry, template, lang
            , dom, query, Chart, theme, mapHandler, PiePlot, Tooltip, MoveSlice){
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template
            , baseClass: "vFireDiv"
            , map: null
            , chartData: null
            , constructor: function(arcgs){
                declare.safeMixin(this, arcgs);
                this.map = mapHandler.map;
                this.chartData = [
                    {x: 1, y: 31508000, tooltip: "Cat1", text:"", color: "rgb(40, 75, 112)", mylabel: "Cat1"},
                    {x: 1, y: 561205000, tooltip: "Cat2",  text: "", color: "rgb(112, 40, 40)", mylabel: "Cat2" },
                    {x: 1, y: 314238000, tooltip: "Cat3", text: "", color: "rgb(95, 113, 67)", mylabel: "Cat3" },
                    {x: 1, y: 3090000, tooltip: "Cat4", text: "", color: "rgb(246, 188, 12)", mylabel: "Cat4" },
                    {x: 1, y: 31111000, tooltip: "Cat5", text: "",  color: "rgb(56, 44, 108)" },
                    {x: 1, y: 566600000, tooltip: "Cat6", text: "", color: "rgb(80, 34, 79)" }
                ];
        }
            , postCreate: function () {
                this.inherited(arguments);
            }
            , startup: function () {
                this.inherited(arguments);
                var pieChart = new Chart("vFireChartDiv", {
                    title: "Pie Chart",
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
                var tip = new Tooltip(pieChart, "default", {text: lang.hitch(this, function(arcgs){
                    var n = this, c = isNan(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "," : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
                    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
                    })
                });
                var anim = new MoveSlice(pieChart, "default", {
                    scale: 1,
                    shift: 3
                });
                pieChart.render();
            }
    });
});