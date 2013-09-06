/**
 * Created with JetBrains WebStorm.
 * User: ssporik
 * Date: 8/20/13
 * Time: 4:23 PM
 * To change this template use File | Settings | File Templates.
 */
define(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin", "dojo/on", "dojo/_base/lang", "dojo/topic", "./../utilities/maphandler", "dijit/layout/ContentPane"
    , "dijit/Menu", "dijit/registry", "dojox/layout/FloatingPane", "dojo/text!./templates/print.html", "dojo/dnd/move", "dojo/aspect" /*, "./custommenu"*/
    , "dojo/dom", "dojo/dom-construct", "dojo/dom-style", "dojo/query", "dijit/form/Select", "dijit/form/Button", "dijit/form/SimpleTextarea", "esri/dijit/Print", "esri/tasks/PrintTask", "esri/tasks/PrintTemplate", "esri/tasks/PrintParameters", "xstyle/css!./css/print.css"],
    function(declare, WidgetBase, TemplatedMixin, WidgetsInTemplateMixin, on, lang, topic, mapHandler, ContentPane, Menu, registry, floatingPane, template, move, aspect /*, custommenu*/
        , dom, domConstruct, domstyle, query, Select, Button, TextArea, PrintDijit, PrintTask, PrintTemplate, PrintParameters){
        return declare([WidgetBase], {
            // The ESRI map object. Set in constructor function.  Default is to set it to mapHandler.map.
            map: null,
            //The application configuration properties (originated as configOptions from app.js then overridden by AGO if applicable)
            AppConfig: null,
            //Set print task in toolmanager from configuration file.
           // printTask: null,
            //*** Properties needed for this style of module
            //Give a unique ID for the floating panel. Populated from constructor in toolmanager.js
            floaterDivId: null,
            //Give a unique ID for the button associated with this module. Populated from constructor in toolmanager.js
            buttonDivId: null,
            //Floater child
            innerDivId: null,
            // The title for your panel
            panelTitle: 'Print'

            //*** Create the basemap gallery
            , constructor: function(args) {
                // safeMixin automatically sets the properties above that are passed in from the toolmanager.js
                declare.safeMixin(this,args);
                this.innerDivId = this.floaterDivId + 'inner';
                // mapHandler is a singleton object that you can require above and use to get a reference to the map.
                this.map = mapHandler.map;
                //Create the div containers for the floating pane as a child of the map's div
                domConstruct.create('div', { id: this.floaterDivId, style: { padding: "0px" } }, 'map');
                domConstruct.create('div', { id: this.innerDivId }, this.floaterDivId);

                var ConstrainedFloatingPane = declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin, floatingPane], {

                    postCreate: function() {
                        this.inherited(arguments);
                        this.moveable = new move.constrainedMoveable(
                            this.domNode, {
                                handle: this.focusNode,
                                constraints: function() {
                                    //var coordsBody = dojo.coords(dojo.body());
                                    // or
                                    var coordsWindow = {
                                        l: 0,
                                        t: 0,
                                        w: window.innerWidth,
                                        h: window.innerHeight
                                    };

                                    return coordsWindow;
                                },
                                within: true
                            }
                        );
                    }

                });

                //Create Floating Pane to house the layout UI of the widget. The parentModule property is created to obtain a reference to this module in close button click.
                var fpI = new ConstrainedFloatingPane({
                    title: 'Print',
                    parentModule: this,
                    resizable: false,
                    dockable: false,
                    closable: false,
                    style: "position:absolute;top:0;left:50px;width:200px;height:228px;z-index:100;visibility:hidden;",
                    id: this.floaterDivId

                }, dom.byId(this.floaterDivId));
                fpI.startup();
                //Create a title bar for Floating Pane
                var titlePane = query('#floaterPrint .dojoxFloatingPaneTitle')[0];
                //Add close button to title pane. dijit.registry is used to obtain a reference to this floating pane's parentModule
                var closeDiv = domConstruct.create('div', {
                    id: "closePrintBtn",
                    innerHTML: esri.substitute({
                        close_title: 'Close Print', //i18n.panel.close.title,
                        close_alt: 'Close Print'//i18n.panel.close.label
                    }, '<a alt=${close_alt} title=${close_title} href="JavaScript:dijit.registry.byId(\'' + this.floaterDivId + '\').parentModule.ToggleTool();"><img  src="assets/close.png"/></a>')
                }, titlePane);
                //Set the content of the Floating Pane to the template HTML.
                dom.byId(this.innerDivId).innerHTML = template;
                var selLayout = new Select({
                    name: "selLayoutOptions",
                    id: "selLayoutOptions",
                    style: "margin-bottom:10px;",
                    options:[
                        {label: '8.5 x 11 Portrait PDF', value: '8x11port', selected: true},
                        {label: '8.5 x 11 Landscape PDF', value: '8x11land'},
                        {label: '11 x 17 Portrait PDF', value: '11x17port'},
                        {label: '11 x 17 Landscape PDF', value: '11x17land'}
                    ]
                }, "selPrintLayout");
                selLayout.startup();

                // add mapnotes text area
                var notesTextArea = new TextArea({
                    rows:3,
                    cols:20,
                    name: "notesTA",
                    value: "NOTES: ",
                    style:"width:auto;",
                    selectOnClick: true,
                    id: "notesTA"
                }, "taPrintNotes");
                notesTextArea.startup();

                // add print button
                var button = new Button({
                    label: "Print",
                    style: "margin-top:10px; margin-left:0px;",
                    onClick: lang.hitch(this, function(){
                        // call print gp service;
                        domstyle.set(dom.byId("loadingImg"),"display","inline");
                        domstyle.set(dom.byId("darkLayer"), "display", "inline");
                        this.advancedPrint();
                    })
                }, "printbutton");

                // On tool button click- toggle the floating pane
                on(registry.byId(this.buttonDivId), "click", lang.hitch(this, function () {
                    this.ToggleTool();
                }));
                //Open it
                this.ToggleTool();

            }
            //*** This gets called by the Close (x) button in the floating pane created above. Re-use in your widget.
            , ToggleTool: function () {
                if (dojo.byId(this.floaterDivId).style.visibility === 'hidden') {
                    //TODO: find better fix for dancing floating pane
                    //must reset top and left style properties to keep floating pane from dancing across page on multiple re-open.
                    domstyle.set(this.floaterDivId, "top", "0px");
                    domstyle.set(this.floaterDivId, "left", "0px");
                    dijit.byId(this.floaterDivId).show();

                } else {
                    dijit.byId(this.floaterDivId).hide();
                    dijit.byId(this.buttonDivId).set('checked', false); //uncheck the toggle button
                }
            }
            , advancedPrint: function (){

                var layout = dijit.byId("selLayoutOptions");
                var selectedValue_layout = layout.value; //layout.options[index].value;
                var notes = dijit.byId("notesTA");
                var valueNotes = notes.value;
                var selectedValue_format = "PDF";

//                var params = new PrintParameters;
                var params = new PrintParameters();
                var printTask = new PrintTask(this.AppConfig.printtask, {async:true});
                var template = new PrintTemplate();
                template.format = selectedValue_format;
                template.layout = selectedValue_layout;
                params.template = template;
                //params.template = {layout: selectedValue_layout, format: selectedValue_format};
                params.extraParameters = {Notes: valueNotes, MxdTemplatePath: this.AppConfig.printtemplatesfolder};
                params.map = this.map;
                printTask.execute(params, this.printComplete);
            }

            , printComplete: function (result) {
                domstyle.set(dom.byId("loadingImg"), "display", "none");
                domstyle.set(dom.byId("darkLayer"), "display", "none");
                window.open(result.url);
            }

            , handleError:  function (err){
                console.log("Unable to print webmap: ", err);
                domstyle.set(dom.byId("loadingImg"), "display", "none");
                domstyle.set(dom.byId("darkLayer"), "display", "none");
            }

            , postCreate: function () {
                this.inherited(arguments);

            }

        });
    });