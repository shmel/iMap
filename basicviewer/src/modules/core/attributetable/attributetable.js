/**
 * Created by shmel on 6/16/14.
 */
/** A pattern to use for custom tools. Implements a floating pane with custom content (or an esri dijit) inside.
 *  utilities/maphandler is a singleton object containing a reference to the map object and other properties/fxns- such as enabling/disabling popups.
 *
 *  Note: It seems when working with map layer events (e.g. "onClick"),
 *  in order to work with modules, dojo/aspect after() or before() functions should be used.
 */
define(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin", "dojo/aspect", "dojo/dom-construct", "dojo/on", "dijit/registry", "dojo/ready", "dojo/parser"
    , "dojo/_base/fx", "dojo/_base/lang", "dojo/_base/array", "dojo/dom", "dojox/layout/FloatingPane", "dojo/query", "./../utilities/maphandler", "dojo/text!./templates/attributetable.html", "dojo/has", "dojo/json", "dojo/_base/Color", "dojo/dnd/move", "dojo/dom-style",
    "dijit/form/Button", "dgrid/OnDemandGrid", "dgrid/Selection", "dojo/store/Memory", "esri/tasks/query", "esri/tasks/QueryTask", "esri/tasks/Geoprocessor","esri/tasks/FeatureSet", "dijit/layout/TabContainer", "dijit/layout/ContentPane", "xstyle/css!./css/attributetable.css"],
    function(declare, WidgetBase, TemplatedMixin, WidgetsInTemplateMixin, aspect, domConstruct, on, registry, ready, parser, fxer, lang, array,
             dom, floatingPane, query, mapHandler, template, has, JSON, Color, move, domstyle, Button, OnDemandGrid, Selection, Memory, Query, QueryTask, Geoprocessor, FeatureSet, TabContainer, ContentPane){
        return declare([WidgetBase],{
            //*** Properties needed for this style of module
            //Give a unique ID for the floating panel. Populated from constructor in toolmanager.js
            floaterDivId: null,
            //Give a unique ID for the button associated with this module. Populated from constructor in toolmanager.js
            buttonDivId: null,
            //Floater child
            innerDivId: null,
            // The title for your panel
            panelTitle: 'Attribute Table',
            map: null,
            grid: null,
            resultLayers: ["gpfLayer", "gpfMainsLayer", "gpfValvesLayer"],
            gp: null




            //*** Creates the floating pane. Should be included in your module and be re-usable without modification (if using floating pane)
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
                    title: 'Attribute Table',
                    parentModule: this,
                    resizable: true,
                    dockable: false,
                    closable: false,
                    style: "position:absolute;top:20px;left:0px;width:100%;height:200px;z-index:100;visibility:hidden;",
                    id: this.floaterDivId

                }, dom.byId(this.floaterDivId));
                //fpI.startup();
                //Create a title bar for Floating Pane
                var titlePane = query('#floaterAttribute .dojoxFloatingPaneTitle')[0];
                //Add close button to title pane. dijit.registry is used to obtain a reference to this floating pane's parentModule
                var closeDiv = domConstruct.create('div', {
                    id: "closeBtn",
                    innerHTML: esri.substitute({
                        close_title: 'Close', //i18n.panel.close.title,
                        close_alt: 'Close'//i18n.panel.close.label
                    }, '<a alt=${close_alt} title=${close_title} href="JavaScript:dijit.registry.byId(\'' + this.floaterDivId + '\').parentModule.ToggleTool();"><img  src="assets/close.png"/></a>')
                }, titlePane);
                //Set the content of the Floating Pane
                dom.byId(this.innerDivId).innerHTML = template;

                var tc = new TabContainer({
                    style: "height: 100%; width: 100%;"
                }, "GridTabContainer");

               // var tc = registry.byID("")

                //Get Data Store from Feature Layers
                var emptyStore = new Memory({
                    idProperty: "OBJECTID",
                    data: { identifier: 'OBJECTID',
                        items: []}
                });

                //Add dojo OnDemandGrid
                grid = new (declare([OnDemandGrid, Selection]))({
                    // use Infinity so that all data is available in the grid
                    bufferRows: 1000,
                    columns: {
                        "Results": "Results"
                    },
                    loadingMessage: "Loading data..." ,
                    noDataMessage: "No results found.",
                    store: emptyStore
                });
                //}, "AttributeTableGrid");

                //Add Export Button
                var exportButton =  new Button({
                    name: "ExportTableButton",
                    type: "button",
                    label: "Export",
                    /* style: "width: 100px; height:100%; line-height:100%; text-align: left",*/
                    onClick: lang.hitch(this, function(){
                        this.ExportGrid("gpfLayer");
                    })                      //End On Click for Trace Button
                });
                //}, "ExportButton");




                //Add Export DDL
                //Load Records from results layer
                fpI.startup();

                var cp1 = new ContentPane({
                    title: "Gravity Mains",
                    content: ""
                });

                //Add Items to ContentPane
                cp1.set("content", [
                    exportButton.domNode,
                    grid.domNode
                ])


                //Add ContentPane to Tab Container
                tc.addChild(cp1);
                tc.startup();

                // On tool button click- toggle the floating pane
                on(registry.byId(this.buttonDivId), "click", lang.hitch(this, function () {
                    this.ToggleTool();
                }));
                //Open it
                this.ToggleTool();
            }

            //*** This gets called by the Close (x) button in the floating pane created above. Re-use in your widget.
            , ToggleTool: function () {
                if (dom.byId(this.floaterDivId).style.visibility === 'hidden') {
                    //TODO: find better fix for dancing floating pane
                    //must reset top and left style properties to keep floating pane from dancing across page on multiple re-open.
                    domstyle.set(this.floaterDivId, "top", "0px");
                    domstyle.set(this.floaterDivId, "left", "0px");
                    registry.byId(this.floaterDivId).show();

                    this.LoadResults("gpfLayer");
                   // this._measureDij.setTool("location",true);
                   // mapHandler.DisableMapPopups();
                } else {
                    registry.byId(this.floaterDivId).hide();
                    registry.byId(this.buttonDivId).set('checked', false); //uncheck the toggle button
                  //  mapHandler.EnableMapPopups(); //enable map popup windows
                    //deactivate the tool and clear the results
                    /*var measure = registry.byId('measureToolDij');
                     measure.clearResult();
                     if (measure.activeTool) {
                     measure.setTool(measure.activeTool, false);
                     }*/
                }
            }

            , LoadResults: function(layername) {
                document.body.style.cursor = "wait";
                //Show Loading Icon
                mapHandler.ShowLoadingIcon();

                //Find layer with this id in the map
                for(var b = this.map.graphicsLayerIds.length -1; b > 0; --b) {
                    var layer = this.map.getLayer(this.map.graphicsLayerIds[b]);
                    //console.log(layer.id + ' ' + layer.opacity + ' ' + layer.visible);
                    if (layer.id == layername) {
                        //Remove Layer
                        var qURL = layer.url
                    }
                }

                var qt = new QueryTask(qURL);
                var query = new Query();
                query.where = "1=1";
                query.returnGeometry = false;
                query.outFields =  ["GISOBJID", "ENABLED", "SubtypeLabel", "INSTALLDATE", "LIFECYCLESTATUS", "WATERTYPE", "MATERIAL", "CROSSSECTIONSHAPE", "UPSTREAMINVERT",
                    "DOWNSTREAMINVERT", "MEASUREMENT1", "SLOPE", "PIPELENGTH", "UPSTREAMMH", "DOWNSTREAMMH", "SYSTEMCODE", "ORG", "DEPT"];
                query.orderByFields = ["GISOBJID ASC"];

                qt.execute(query, lang.hitch(this, function(results){
                    var mydata = array.map(results.features, function(feature) {
                        return {
                            "id": feature.attributes[query.outFields[0]],
                            "ENABLED": feature.attributes[query.outFields[1]],
                            "SubtypeLabel": feature.attributes[query.outFields[2]],
                            "INSTALLDATE": feature.attributes[query.outFields[3]],
                            "LIFECYCLESTATUS": feature.attributes[query.outFields[4]],
                            "WATERTYPE": feature.attributes[query.outFields[5]],
                            "MATERIAL": feature.attributes[query.outFields[6]],
                            "CROSSSECTIONSHAPE": feature.attributes[query.outFields[7]],
                            "UPSTREAMINVERT": feature.attributes[query.outFields[8]],
                            "DOWNSTREAMINVERT": feature.attributes[query.outFields[9]],
                            "MEASUREMENT1": feature.attributes[query.outFields[10]],
                            "SLOPE": feature.attributes[query.outFields[11]],
                            "PIPELENGTH": feature.attributes[query.outFields[12]],
                            "UPSTREAMMH": feature.attributes[query.outFields[13]],
                            "DOWNSTREAMMH": feature.attributes[query.outFields[14]],
                            "SYSTEMCODE": feature.attributes[query.outFields[15]],
                            "ORG": feature.attributes[query.outFields[16]],
                            "DEPT": feature.attributes[query.outFields[17]]
                        }
                    });
                    var myTestStore = new Memory({ data: mydata });

/*                    //Set Columns on Grid
                    grid.set ("columns", {
                        "id": "GISOBJID",
                        "ENABLED": "ENABLED",
                        "SubtypeLabel": "SubtypeLabel",
                        "INSTALLDATE": {label:"INSTALLDATE",formatter:date_formatter},
                        "LIFECYCLESTATUS": "LIFECYCLESTATUS",
                        "WATERTYPE": "WATERTYPE",
                        "MATERIAL": "MATERIAL",
                        "CROSSSECTIONSHAPE": "CROSSSECTIONSHAPE",
                        "UPSTREAMINVERT": "UPSTREAMINVERT",
                        "DOWNSTREAMINVERT": "DOWNSTREAMINVERT",
                        "MEASUREMENT1": "MEASUREMENT1",
                        "SLOPE": "SLOPE",
                        "PIPELENGTH": "PIPELENGTH",
                        "UPSTREAMMH": "UPSTREAMMH",
                        "DOWNSTREAMMH": "DOWNSTREAMMH",
                        "SYSTEMCODE": "SYSTEMCODE",
                        "ORG": "ORG",
                        "DEPT": "DEPT"
                    });*/
                    grid.set ("columns", [
                    {	field: "id",
                        label: "GISOBJID"
                    },
                    {
                        field: "ENABLED",
                            label: "ENABLED"
                    },
                    {
                        field: "SubtypeLabel",
                            label: "SubtypeLabel"
                    },
                    {
                        field: "INSTALLDATE",
                            label: "INSTALLDATE",
                        formatter: this.date_formatter
                    },
                    {
                        field: "LIFECYCLESTATUS",
                            label: "LIFECYCLESTATUS"
                    },
                    {
                        field: "WATERTYPE",
                            label: "WATERTYPE"
                    },
                    {
                        field: "MATERIAL",
                            label: "MATERIAL"
                    },
                    {
                        field: "CROSSSECTIONSHAPE",
                            label: "CROSSSECTIONSHAPE"
                    },
                    {
                        field: "UPSTREAMINVERT",
                            label: "UPSTREAMINVERT"
                    },
                    {
                        field: "DOWNSTREAMINVERT",
                            label: "DOWNSTREAMINVERT"
                    },
                    {
                        field: "MEASUREMENT1",
                            label: "MEASUREMENT1"
                    },
                    {
                        field: "SLOPE",
                            label: "SLOPE"
                    },
                    {
                        field: "PIPELENGTH",
                            label: "PIPELENGTH"
                    },
                    {
                        field: "UPSTREAMMH",
                            label: "UPSTREAMMH"
                    },
                    {
                        field: "DOWNSTREAMMH",
                            label: "DOWNSTREAMMH"
                    },
                    {
                        field: "SYSTEMCODE",
                            label: "SYSTEMCODE"
                    },
                    {
                        field: "ORG",
                            label: "ORG"
                    },
                    {
                        field: "DEPT",
                            label: "DEPT"
                    }])
                    grid.set("store", myTestStore)    ;
                    grid.refresh();

                    document.body.style.cursor = "default";
                    mapHandler.HideLoadingIcon();
                    // add a click listener on the ID column
                    //sjh 0618 grid.on(".dgrid-row:click", lang.hitch(this, this.SelectSewerSystem));


                }));


            }
            , selectFeature: function() {
                // select the feature
                var fl = map.getLayer("states");
                var query = new Query();
                query.objectIds = [parseInt(e.target.innerHTML)];
                fl.selectFeatures(query, FeatureLayer.SELECTION_NEW, function(result) {
                    if ( result.length ) {
                        // re-center the map to the selected feature
                        window.map.centerAt(result[0].geometry.getExtent().getCenter());
                    } else {
                        console.log("Feature Layer query returned no features... ", result);
                    }
                });


            }
            , ClearGrid: function() {
                //Empty Store
                //Get Data Store from Feature Layers
                var emptyStore = new Memory({
                    idProperty: "OBJECTID",
                    data: { identifier: 'OBJECTID',
                        items: []}
                });

                grid.set("store", emptyStore)    ;
                grid.refresh();
            }

            , ExportGrid: function(layername) {
                //setup the geoprocessor task
                gp = new esri.tasks.Geoprocessor("http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/ExportMainstoCSV/GPServer/ExportMainstoCSV");
                gp.setOutSpatialReference({wkid:26985});

                //Find layer with this id in the map
                for(var b = this.map.graphicsLayerIds.length -1; b > 0; --b) {
                    var layer = this.map.getLayer(this.map.graphicsLayerIds[b]);
                    //console.log(layer.id + ' ' + layer.opacity + ' ' + layer.visible);
                    if (layer.id == layername) {
                        b = 0 //Found Layer, Quit
                    }
                }

                var query = new Query();
                var random = (new Date()).getTime(); //Fix for 10.1 Bug NIM086349
                query.where = random + "=" + random;
                query.outFields =  ["*"];


                layer.queryFeatures(query, lang.hitch(this, function (features) {
                    var inputFeatures = new FeatureSet();
                    inputFeatures.features = features.features;
                    var params= { "InputFeatures":inputFeatures};
                    gp.submitJob(params, this.completeCallback , this.statusCallback,function(error){
                        //alert(error);
                        //esri.hide(loading);
                    });
                    document.body.style.cursor = "wait";

                    //Show Loading Icon
                    mapHandler.ShowLoadingIcon();
                }));
            }

            , completeCallback: function(jobInfo){
                if(jobInfo.jobStatus !== "esriJobFailed"){
                    gp.getResultData(jobInfo.jobId,"OutFile", lang.hitch(this, function(outputFile) {

                            var theurl = outputFile.value.url;
                            console.log(theurl);
                            window.location = theurl;
                        }
                    )
                   );
                }
            }

            ,statusCallback: function(jobInfo) {
                var status = jobInfo.jobStatus;
                document.body.style.cursor = "default";
                mapHandler.HideLoadingIcon();

                if(status === "esriJobFailed"){
                    alert(status);

                }
                else if (status === "esriJobSucceeded"){
;
                }
            }

            , downloadFile: function(outputFile) {
                this.map.graphics.clear();
                var theurl = outputFile.value.url;
                console.log(theurl);
                window.location = theurl;
            }

            , date_formatter: function(columnData){
                var inputDate = new Date(columnData);
                return dojo.date.locale.format(inputDate, {
                    selector: 'date',
                    datePattern: 'MM/dd/yyyy'
                });
            }
            , NewFunction: function() {}


            /* A standard module event handler. In the postcreate and startup handlers,
             * you can assume the module has been created.  You don't need to add a handler function if you are not writing code in it.
             */
            /*, startup: function () {
             this.inherited(arguments);

             }*/
        });
    });