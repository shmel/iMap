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
    , "dojo/_base/fx", "dojo/_base/lang", "dojo/_base/array", "dojo/dom", "dojox/layout/FloatingPane", "dojo/query", "./../utilities/maphandler", "dojo/text!./templates/attributetable.html", "dojo/has", "dojo/json",
    "dojo/_base/Color", "dojo/dnd/move", "dojo/dom-style",
    "dijit/form/Button",  "dgrid/Selection", "dstore/Memory", "dstore/RequestMemory", "dstore/legacy/DstoreAdapter","esri/tasks/query", "esri/tasks/QueryTask", "esri/tasks/Geoprocessor","esri/tasks/FeatureSet", "esri/layers/FeatureLayer", "esri/geometry/Extent", "dijit/layout/TabContainer",
    "dijit/layout/ContentPane", "dgrid/OnDemandGrid",  "xstyle/css!./css/attributetable.css"],
    function(declare, WidgetBase, TemplatedMixin, WidgetsInTemplateMixin, aspect, domConstruct, on, registry, ready, parser, fxer, lang, array,
             dom, floatingPane, query, mapHandler, template, has, JSON, Color, move, domstyle, Button,  Selection, Memory, RequestMemory, DstoreAdapter, Query, QueryTask, Geoprocessor, FeatureSet, FeatureLayer, Extent, TabContainer, ContentPane, OnDemandGrid){
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
            clickSource: null,
            map: null,
            grid: null,
            grid2: null,
            grid3: null,
            tc: null,
            cp1: null,
            cp2: null,
            cp3: null,
            resultLayers: ["gpfLayer", "gpfMainsLayer", "gpfValvesLayer", "gpfCustomersLayer", "gpfWWCustomersLayer"],
            resultFields: [["GISOBJID", "ENABLED", "SubtypeLabel", "INSTALLDATE", "LIFECYCLESTATUS", "WATERTYPE", "MATERIAL", "CROSSSECTIONSHAPE", "UPSTREAMINVERT",
                "DOWNSTREAMINVERT", "MEASUREMENT1", "SLOPE", "PIPELENGTH", "UPSTREAMMH", "DOWNSTREAMMH", "SYSTEMCODE", "ORG", "DEPT", "CleanOutCount"],
                ["GISOBJID", "ENABLED", "INSTALLDATE", "LIFECYCLESTATUS", "SubtypeLabel", "WATERTYPE", "MATERIAL", "DIAMETER", "PIPELENGTH", "SYSTEMCODE"],
                ["GISOBJID", "ENABLED", "SubtypeLabel", "INSTALLDATE", "LOCATIONDESCRIPTION", "OPERATIONALAREA", "ROTATION", "LIFECYCLESTATUS", "WATERTYPE", "DIAMETER", "BYPASSVALVE", "CLOCKWISETOCLOSE", "CURRENTLYOPEN", "MOTORIZED", "NORMALLYOPEN", "PERCENTOPEN", "PRESSURESETTING", "REGULATIONTYPE", "TURNSTOCLOSE", "OPERABLE", "SYSTEMCODE"], 
                ["OBJECTID","wLateralPoint_ADDRESS", "wLateralPoint_ACCTID", "wLateralPoint_TAXLINK", "BilllingData_2013111_Annual_FY_2013_Consumption__7_1_2012_6_30_2",
                    "BilllingData_2013111_Q1__2014__7_1_2013_9_30_2013_",
                    "BilllingData_2013111_Q2__2013__10_1_2012_12_31_2012_",
                    "BilllingData_2013111_Q3__2013__1_1_2013_3_31_2013_",
                    "BilllingData_2013111_Q4__2013__4_1_2013_6_30_2013_",
                    "BilllingData_2013111_Total_Consumption",
                    "BilllingData_2013111_AVG_Flow",
                    "BilllingData_2013111_First_Read",
                    "BilllingData_2013111_Last_Read",
                    "BilllingData_2013111_Installation_Date"],
                ["OBJECTID","ssLateralPoint_ADDRESS", "ssLateralPoint_ACCTID", "ssLateralPoint_TAXLINK", "BilllingData_2013111_Annual_FY_2013_Consumption__7_1_2012_6_30_2",
                    "BilllingData_2013111_Q1__2014__7_1_2013_9_30_2013_",
                    "BilllingData_2013111_Q2__2013__10_1_2012_12_31_2012_",
                    "BilllingData_2013111_Q3__2013__1_1_2013_3_31_2013_",
                    "BilllingData_2013111_Q4__2013__4_1_2013_6_30_2013_",
                    "BilllingData_2013111_Total_Consumption",
                    "BilllingData_2013111_AVG_Flow",
                    "BilllingData_2013111_First_Read",
                    "BilllingData_2013111_Last_Read",
                    "BilllingData_2013111_Installation_Date"]],
            gpURLS: ["http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/ExportMainstoCSV/GPServer/ExportMainstoCSV",
                "http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/ExportPressMainstoCSV/GPServer/ExportPressMainstoCSV",
                "http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/ExportValvestoCSV/GPServer/ExportValvestoCSV", 
                 "http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/ExportCustomerstoCSV/GPServer/ExportCustomerstoCSV",
                "http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/ExportWWCustomerstoCSV/GPServer/ExportWWCustomerstoCSV"],
            gp: null,
            currLayerName: null


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


                //Get Data Store from Feature Layers
                var emptyStore = new Memory({
                    idProperty: "OBJECTID",
                    data: { identifier: 'OBJECTID',
                        items: []}
                })
                ;

                //Add dojo OnDemandGrid
                grid = new (declare([OnDemandGrid, Selection]))({
                    // use Infinity so that all data is available in the grid
                    bufferRows: Infinity,
                    minRowsPerPage: 10000,
                    columns: {
                        "Results": "Results"
                    },
                    loadingMessage: "Loading data..." ,
                    noDataMessage: "No results found.",
                    store: emptyStore
                });

                //Check Button Source, create another grid if water
                if (this.clickSource == 'water'){
                    grid3 = new (declare([OnDemandGrid, Selection]))({
                        // use Infinity so that all data is available in the grid
                        bufferRows: Infinity,
                        minRowsPerPage: 10000,
                        columns: {
                            "Results": "Results"
                        },
                        loadingMessage: "Loading data..." ,
                        noDataMessage: "No results found.",
                        store: emptyStore
                    });

                    grid2 = new (declare([OnDemandGrid, Selection]))({
                        // use Infinity so that all data is available in the grid
                        bufferRows: Infinity,
                        minRowsPerPage: 10000,
                        columns: {
                            "Results": "Results"
                        },
                        loadingMessage: "Loading data..." ,
                        noDataMessage: "No results found.",
                        store: emptyStore
                    });

                    //Add Export Button
                    var exportButton =  new Button({
                        name: "ExportTableButton",
                        type: "button",
                        label: "Export All Records to CSV",
                        /* style: "width: 100px; height:100%; line-height:100%; text-align: left",*/
                        onClick: lang.hitch(this, function(){
                            this.ExportGrid("gpfMainsLayer");
                        })                      //End On Click for Trace Button
                    });
                    //}, "ExportButton");

                    var zoomAllButton = new Button({
                        name: "ZoomAllButton",
                        type: "button",
                        label: "Zoom Extent of All Features",
                        /* style: "width: 100px; height:100%; line-height:100%; text-align: left",*/
                        onClick: lang.hitch(this, function(){
                        this.zoomToExtent("gpfMainsLayer");
                        })                      //End On Click
                    });

                    var clearAllButton = new Button({
                        name: "ClearAllButton",
                        type: "button",
                        label: "Clear Selected Features",
                        /* style: "width: 100px; height:100%; line-height:100%; text-align: left",*/
                        onClick: lang.hitch(this, function(){
                            this.clearSelected("gpfMainsLayer");
                        })                      //End On Click
                    });

                    //Add Export Button2
                    var exportButton2 =  new Button({
                        name: "ExportTableButton",
                        type: "button",
                        label: "Export All Records to CSV",
                        /* style: "width: 100px; height:100%; line-height:100%; text-align: left",*/
                        onClick: lang.hitch(this, function(){
                            this.ExportGrid("gpfValvesLayer");
                        })                      //End On Click for Trace Button
                    });

                    var zoomAllButton2 = new Button({
                        name: "ZoomAllButton",
                        type: "button",
                        label: "Zoom Extent of All Features",
                        /* style: "width: 100px; height:100%; line-height:100%; text-align: left",*/
                        onClick: lang.hitch(this, function(){
                            this.zoomToExtent("gpfValvesLayer");
                        })                      //End On Click
                    });

                    var clearAllButton2 = new Button({
                        name: "ClearAllButton",
                        type: "button",
                        label: "Clear Selected Features",
                        /* style: "width: 100px; height:100%; line-height:100%; text-align: left",*/
                        onClick: lang.hitch(this, function(){
                            this.clearSelected("gpfValvesLayer");
                        })                      //End On Click
                    });

                    //Add Export Button2
                    var exportButton3 =  new Button({
                        name: "ExportTableButton",
                        type: "button",
                        label: "Export All Records to CSV",
                        /* style: "width: 100px; height:100%; line-height:100%; text-align: left",*/
                        onClick: lang.hitch(this, function(){
                            this.ExportGrid("gpfCustomersLayer");
                        })                      //End On Click for Trace Button
                    });

                    var zoomAllButton3 = new Button({
                        name: "ZoomAllButton",
                        type: "button",
                        label: "Zoom Extent of All Features",
                        /* style: "width: 100px; height:100%; line-height:100%; text-align: left",*/
                        onClick: lang.hitch(this, function(){
                            this.zoomToExtent("gpfCustomersLayer");
                        })                      //End On Click
                    });

                    var clearAllButton3 = new Button({
                        name: "ClearAllButton",
                        type: "button",
                        label: "Clear Selected Features",
                        /* style: "width: 100px; height:100%; line-height:100%; text-align: left",*/
                        onClick: lang.hitch(this, function(){
                            this.clearSelected("gpfCustomersLayer");
                        })                      //End On Click
                    });

                    fpI.startup();

                    var cp1 = new ContentPane({
                        title: "Pressurized Mains",
                        content: ""
                    });

                    var cp2 = new ContentPane({
                        title: "System Valves",
                        content: ""
                    });

                    var cp3 = new ContentPane({
                        title: "Customers",
                        content: ""
                    });

                    //Add Items to ContentPane
                    cp1.set("content", [
                        exportButton.domNode,
                        zoomAllButton.domNode,
                        clearAllButton.domNode,
                        grid.domNode
                    ])

                    cp2.set("content", [
                        exportButton2.domNode,
                        zoomAllButton2.domNode,
                        clearAllButton2.domNode,
                        grid2.domNode
                    ])

                    cp3.set("content", [
                        exportButton3.domNode,
                        zoomAllButton3.domNode,
                        clearAllButton3.domNode,
                        grid3.domNode
                    ])

                    //Add ContentPane to Tab Container
                    tc.addChild(cp1);
                    tc.addChild(cp2);
                    tc.addChild(cp3);
                }
                else {
                    //Add Second Grid for Customers
                    grid2 = new (declare([OnDemandGrid, Selection]))({
                        // use Infinity so that all data is available in the grid
                        bufferRows: Infinity,
                        columns: {
                            "Results": "Results"
                        },
                        minRowsPerPage: 10000,
                        loadingMessage: "Loading data..." ,
                        noDataMessage: "No results found.",
                        store: emptyStore
                    });

                    //Add Export Button
                    var exportButton =  new Button({
                        name: "ExportTableButton",
                        type: "button",
                        label: "Export All Records to CSV",
                        /* style: "width: 100px; height:100%; line-height:100%; text-align: left",*/
                        onClick: lang.hitch(this, function(){
                            this.ExportGrid("gpfLayer");
                        })                      //End On Click for Trace Button
                    });

                    var zoomAllButton = new Button({
                        name: "ZoomAllButton",
                        type: "button",
                        label: "Zoom Extent of All Features",
                        /* style: "width: 100px; height:100%; line-height:100%; text-align: left",*/
                        onClick: lang.hitch(this, function(){
                            this.zoomToExtent("gpfLayer");
                        })
                    });

                    var clearAllButton = new Button({
                        name: "ClearAllButton",
                        type: "button",
                        label: "Clear Selected Features",
                        /* style: "width: 100px; height:100%; line-height:100%; text-align: left",*/
                        onClick: lang.hitch(this, function(){
                            this.clearSelected("gpfLayer");
                        })                      //End On Click
                    });

                    //Add Export Button2
                    var exportButton2 =  new Button({
                        name: "ExportTableButton",
                        type: "button",
                        label: "Export All Records to CSV",
                        /* style: "width: 100px; height:100%; line-height:100%; text-align: left",*/
                        onClick: lang.hitch(this, function(){
                            this.ExportGrid("gpfWWCustomersLayer");
                        })                      //End On Click for Trace Button
                    });

                    var zoomAllButton2 = new Button({
                        name: "ZoomAllButton",
                        type: "button",
                        label: "Zoom Extent of All Features",
                        /* style: "width: 100px; height:100%; line-height:100%; text-align: left",*/
                        onClick: lang.hitch(this, function(){
                            this.zoomToExtent("gpfWWCustomersLayer");
                        })                      //End On Click
                    });

                    var clearAllButton2 = new Button({
                        name: "ClearAllButton",
                        type: "button",
                        label: "Clear Selected Features",
                        /* style: "width: 100px; height:100%; line-height:100%; text-align: left",*/
                        onClick: lang.hitch(this, function(){
                            this.clearSelected("gpfWWCustomersLayer");
                        })                      //End On Click
                    });



                    fpI.startup();



                    var cp1 = new ContentPane({
                        title: "Gravity Mains",
                        content: ""
                    });

                    var cp2 = new ContentPane({
                        title: "Customers",
                        content: ""
                    });

                    //Add Items to ContentPane
                    cp1.set("content", [
                        exportButton.domNode,
                        zoomAllButton.domNode,
                        clearAllButton.domNode,
                        grid.domNode
                    ])

                    cp2.set("content", [
                        exportButton2.domNode,
                        zoomAllButton2.domNode,
                        clearAllButton2.domNode,
                        grid2.domNode
                    ])

                    //Add ContentPane to Tab Container
                    tc.addChild(cp1);
                    tc.addChild(cp2);
                }


                //Add ContentPane to Tab Container
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
                //console.log ("toggle tool")
                if (dom.byId(this.floaterDivId).style.visibility === 'hidden') {
                   // console.log ("toggle tool - show the pane")
                    //TODO: find better fix for dancing floating pane
                    //must reset top and left style properties to keep floating pane from dancing across page on multiple re-open.
                    domstyle.set(this.floaterDivId, "top", "0px");
                    domstyle.set(this.floaterDivId, "left", "0px");
                    registry.byId(this.floaterDivId).show();
                    registry.byId(this.buttonDivId).set('label', "Hide Results");

                    if (grid.store.data.length == 0) {
                        if (this.clickSource =='ww') {
                            this.LoadResults("gpfLayer");
                            this.LoadResults("gpfWWCustomersLayer");
                            //grid.on(".dgrid-row:click", this.selectFeature(event,"gpfLayer"));
                        }
                        else if (this.clickSource =='water') {
                            this.LoadResults("gpfValvesLayer");
                            this.LoadResults("gpfMainsLayer");
                            this.LoadResults("gpfCustomersLayer");
                        }


                    };


                   // this._measureDij.setTool("location",true);
                   // mapHandler.DisableMapPopups();
                } else {
                   // console.log ("toggle tool - hide the pane")
                    registry.byId(this.floaterDivId).hide();
                    registry.byId(this.buttonDivId).set('checked', false);
                   // console.log ("toggle - set checked false")
                    registry.byId(this.buttonDivId).set('label', "View and Export Results"); //uncheck the toggle button
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


                query.outFields = this.resultFields[this.resultLayers.indexOf(layername)];

/*                query.outFields =  ["GISOBJID", "ENABLED", "SubtypeLabel", "INSTALLDATE", "LIFECYCLESTATUS", "WATERTYPE", "MATERIAL", "CROSSSECTIONSHAPE", "UPSTREAMINVERT",
                    "DOWNSTREAMINVERT", "MEASUREMENT1", "SLOPE", "PIPELENGTH", "UPSTREAMMH", "DOWNSTREAMMH", "SYSTEMCODE", "ORG", "DEPT"];*/
                query.orderByFields = ["GISOBJID ASC"];


                //Change Query Inputs and Grid Columns based on LayerName
                if (layername == 'gpfLayer') {
                    qt.execute(query, lang.hitch(this, function(results){
                        var mydata = array.map(results.features, function(feature) {
                            return {
                                "id": feature.attributes[query.outFields[0]],
                                "CleanoutCount": feature.attributes[query.outFields[18]],
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
                        // TODO: Load this from a Json file
                        grid.set ("columns", [
                            {	field: "id",
                                label: "GISOBJID"
                            },
                            {
                                field: "CleanoutCount",
                                label: "CleanoutCount"
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
                        grid.set("collection", myTestStore)    ;
                        grid.refresh();
                        grid.set("message", "gpfLayer")

                        document.body.style.cursor = "default";
                        mapHandler.HideLoadingIcon();
                        // add a click listener on the ID column
                        grid.on(".dgrid-row:click", lang.hitch(this, function(e) {
                            this.currLayerName = "gpfLayer"
                            this.selectFeature(e);
                        }
                        )); //This works

                    }));
                }
                else if (layername == 'gpfValvesLayer') {
                    qt.execute(query, lang.hitch(this, function(results){
                        var mydata = array.map(results.features, function(feature) {
                            return {
                                "id": feature.attributes[query.outFields[0]],
                                "ENABLED": feature.attributes[query.outFields[1]],
                                "SubtypeLabel": feature.attributes[query.outFields[2]],
                                "INSTALLDATE": feature.attributes[query.outFields[3]],
                                "LOCATIONDESCRIPTION": feature.attributes[query.outFields[4]],
                                "OPERATIONALAREA": feature.attributes[query.outFields[5]],
                                "ROTATION": feature.attributes[query.outFields[6]],
                                "LIFECYCLESTATUS": feature.attributes[query.outFields[7]],
                                "WATERTYPE": feature.attributes[query.outFields[8]],
                                "DIAMETER": feature.attributes[query.outFields[9]],
                                "BYPASSVALVE": feature.attributes[query.outFields[10]],
                                "CLOCKWISETOCLOSE": feature.attributes[query.outFields[11]],
                                "CURRENTLYOPEN": feature.attributes[query.outFields[12]],
                                "MOTORIZED": feature.attributes[query.outFields[13]],
                                "NORMALLYOPEN": feature.attributes[query.outFields[14]],
                                "PERCENTOPEN": feature.attributes[query.outFields[15]],
                                "PRESSURESETTING": feature.attributes[query.outFields[16]],
                                "REGULATIONTYPE": feature.attributes[query.outFields[17]],
                                "TURNSTOCLOSE": feature.attributes[query.outFields[18]],
                                "OPERABLE": feature.attributes[query.outFields[19]],
                                "SYSTEMCODE": feature.attributes[query.outFields[20]]

                            }
                        });

                        var myTestStore = new Memory({ data: mydata });

                        grid2.set ("columns", [
                            {	field: "id",
                                label: "GISOBJID"
                            },
                            {	field: "ENABLED",
                                label: "ENABLED"
                            },
                            {	field: "SubtypeLabel",
                                label: "SubtypeLabel"
                            },
                            {	field: "INSTALLDATE",
                                label: "INSTALLDATE",
                                formatter: this.date_formatter

                            },
                            {	field: "LOCATIONDESCRIPTION",
                                label: "LOCATIONDESCRIPTION"
                            },
                            {	field: "OPERATIONALAREA",
                                label: "OPERATIONALAREA"
                            },
                            {	field: "ROTATION",
                                label: "ROTATION"
                            },
                            {	field: "LIFECYCLESTATUS",
                                label: "LIFECYCLESTATUS"
                            },
                            {	field: "WATERTYPE",
                                label: "WATERTYPE"
                            },
                            {	field: "DIAMETER",
                                label: "DIAMETER"
                            },
                            {	field: "BYPASSVALVE",
                                label: "BYPASSVALVE"
                            },
                            {	field: "CLOCKWISETOCLOSE",
                                label: "CLOCKWISETOCLOSE"
                            },
                            {	field: "CURRENTLYOPEN",
                                label: "CURRENTLYOPEN"
                            },
                            {	field: "MOTORIZED",
                                label: "MOTORIZED"
                            },
                            {	field: "NORMALLYOPEN",
                                label: "NORMALLYOPEN"
                            },
                            {	field: "PERCENTOPEN",
                                label: "PERCENTOPEN"
                            },
                            {	field: "PRESSURESETTING",
                                label: "PRESSURESETTING"
                            },
                            {	field: "REGULATIONTYPE",
                                label: "REGULATIONTYPE"
                            },
                            {	field: "TURNSTOCLOSE",
                                label: "TURNSTOCLOSE"
                            },
                            {	field: "OPERABLE",
                                label: "OPERABLE"
                            },
                            {	field: "SYSTEMCODE",
                                label: "SYSTEMCODE"
                            }]
                        )
                        grid2.set("collection", myTestStore);
                        grid2.refresh();

                        document.body.style.cursor = "default";
                        mapHandler.HideLoadingIcon();

                        // add a click listener on the ID column
                        grid2.on(".dgrid-row:click", lang.hitch(this, function(e) {
                                this.currLayerName = "gpfValvesLayer"
                                this.selectFeature(e);
                            }
                        )); //This works

                    }));
                }

                else if (layername == 'gpfMainsLayer') {
                    qt.execute(query, lang.hitch(this, function(results){
                        var mydata = array.map(results.features, function(feature) {
                            return {
                                "id": feature.attributes[query.outFields[0]],
                                "ENABLED": feature.attributes[query.outFields[1]],
                                "INSTALLDATE": feature.attributes[query.outFields[2]],
                                "LIFECYCLESTATUS": feature.attributes[query.outFields[3]],
                                "SubtypeLabel": feature.attributes[query.outFields[4]],
                                "WATERTYPE": feature.attributes[query.outFields[5]],
                                "MATERIAL": feature.attributes[query.outFields[6]],
                                "DIAMETER": feature.attributes[query.outFields[7]],
                                "PIPELENGTH": feature.attributes[query.outFields[8]],
                                "SYSTEMCODE": feature.attributes[query.outFields[9]]
                            }
                        });

                        var myTestStore = new Memory({ data: mydata });

                        grid.set ("columns", [
                            { field: "id",
                                label: "GISOBJID"
                            },
                            { field: "ENABLED",
                                label: "ENABLED"
                            },
                            { field: "INSTALLDATE",
                                label: "INSTALLDATE",
                                formatter: this.date_formatter

                            },
                            { field: "LIFECYCLESTATUS",
                                label: "LIFECYCLESTATUS"
                            },
                            { field: "SubtypeLabel",
                                label: "SubtypeLabel"
                            },
                            { field: "WATERTYPE",
                                label: "WATERTYPE"
                            },
                            { field: "MATERIAL",
                                label: "MATERIAL"
                            },
                            { field: "DIAMETER",
                                label: "DIAMETER"
                            },
                            { field: "PIPELENGTH",
                                label: "PIPELENGTH"
                            },
                            { field: "SYSTEMCODE",
                                label: "SYSTEMCODE"
                            }
                        ])
                        grid.set("collection", myTestStore)    ;
                        grid.refresh();

                        document.body.style.cursor = "default";
                        mapHandler.HideLoadingIcon();

                        // add a click listener on the ID column
                        grid.on(".dgrid-row:click", lang.hitch(this, function(e) {
                                this.currLayerName = "gpfMainsLayer"
                                this.selectFeature(e);
                            }
                        )); //This works

                    }));
                }

                else if (layername == 'gpfCustomersLayer') {
                    query.orderByFields = ["wLateralPoint_ADDRESS ASC"];
                    qt.execute(query, lang.hitch(this, function(results){
                        var mydata = array.map(results.features, function(feature) {
                            return {
                                "id": feature.attributes[query.outFields[0]],
                                "ACCTID" : feature.attributes[query.outFields[2]],
                                "ADDRESS": feature.attributes[query.outFields[1]],
                                "TAXLINK": feature.attributes[query.outFields[3]],
                                "FY2013_Consumption": feature.attributes[query.outFields[4]],
                                "2013_Q1": feature.attributes[query.outFields[5]],
                                "2013_Q2": feature.attributes[query.outFields[6]],
                                "2013_Q3": feature.attributes[query.outFields[7]],
                                "2013_Q4": feature.attributes[query.outFields[8]],
                                "2013_Total_Consumption": feature.attributes[query.outFields[9]],
                                "2013_Avg_Flow": feature.attributes[query.outFields[10]],
                                "2013_First_Read": feature.attributes[query.outFields[11]],
                                "2013_Last_Read": feature.attributes[query.outFields[12]],
                                "Installation_Date": feature.attributes[query.outFields[13]]
                            }
                        });
                        var myTestStore = new Memory({ data: mydata });

                        grid3.set ("columns", [
                            {   id: "id",
                                field: "id",
                                label: "OBJECTID"

                            },
                            {   id: "ACCTID",
                                field: "ACCTID",
                                label: "ACCTID"
                            },
                            {   id: "ADDRESS",
                                field: "ADDRESS",
                                label: "ADDRESS"
                            },
                            {   id: "TAXLINK",
                                field: "TAXLINK",
                                label: "TAX LINK",
                                formatter: this.hyperlink_formatter
                            },
                            { id: "FY2013_Consumption",
                                field: "FY2013_Consumption",
                                label: "FY2013_Consumption"
                            },
                            { id: "2013_Q1",
                                field: "2013_Q1",
                                label: "2013_Q1"
                            },
                            { id: "2013_Q2",
                                field: "2013_Q2",
                                label: "2013_Q2"
                            },
                            { id: "2013_Q3",
                                field: "2013_Q3",
                                label: "2013_Q3"
                            },
                            { id: "2013_Q4",
                                field: "2013_Q4",
                                label: "2013_Q4"
                            },
                            { id: "2013_Total_Consumption",
                                field: "2013_Total_Consumption",
                                label: "2013_Total_Consumption"
                            },
                            { id: "2013_Avg_Flow",
                                field: "2013_Avg_Flow",
                                label: "2013 Avg Flow"
                            },
                            { id: "2013_First_Read",
                                field: "2013_First_Read",
                                label: "2013 First Read",
                                formatter: this.stringDate_formatter
                            },
                            { id: "2013_Last_Read",
                                field: "2013_Last_Read",
                                label: "2013 Last Read",
                                formatter: this.stringDate_formatter
                            },
                            { id: "Installation_Date",
                                field: "Installation_Date",
                                label: "Installation Date",
                                formatter: this.stringDate_formatter
                            }
                            ]
                        )
                        
                        grid3.styleColumn("id", "display: none;");
                        grid3.set("collection", myTestStore);
                        grid3.refresh();

                        document.body.style.cursor = "default";
                        mapHandler.HideLoadingIcon();

                        // add a click listener on the ID column
                        grid3.on(".dgrid-row:click", lang.hitch(this, function(e) {
                                this.currLayerName = "gpfCustomersLayer"
                                this.selectFeature(e);
                            }
                        )); //This works

                    }));
                }

                else if (layername == 'gpfWWCustomersLayer') {
                    query.orderByFields = ["ssLateralPoint_ADDRESS ASC"];
                    qt.execute(query, lang.hitch(this, function(results){
                        var mydata = array.map(results.features, function(feature) {
                            return {
                                "id": feature.attributes[query.outFields[0]],
                                "ACCTID" : feature.attributes[query.outFields[2]],
                                "ADDRESS": feature.attributes[query.outFields[1]],
                                "TAXLINK": feature.attributes[query.outFields[3]],
                                "FY2013_Consumption": feature.attributes[query.outFields[4]],
                                "2013_Q1": feature.attributes[query.outFields[5]],
                                "2013_Q2": feature.attributes[query.outFields[6]],
                                "2013_Q3": feature.attributes[query.outFields[7]],
                                "2013_Q4": feature.attributes[query.outFields[8]],
                                "2013_Total_Consumption": feature.attributes[query.outFields[9]],
                                "2013_Avg_Flow": feature.attributes[query.outFields[10]],
                                "2013_First_Read": feature.attributes[query.outFields[11]],
                                "2013_Last_Read": feature.attributes[query.outFields[12]],
                                "Installation_Date": feature.attributes[query.outFields[13]]
                            }
                        });
                        var myTestStore = new Memory({ data: mydata });

                        grid2.set ("columns", [
                                {   id: "id",
                                    field: "id",
                                    label: "OBJECTID"

                                },
                                {   id: "ACCTID",
                                    field: "ACCTID",
                                    label: "ACCTID"
                                },
                                {   id: "ADDRESS",
                                    field: "ADDRESS",
                                    label: "ADDRESS"
                                },
                                {   id: "TAXLINK",
                                    field: "TAXLINK",
                                    label: "TAX LINK",
                                    formatter: this.hyperlink_formatter
                                },
                                { id: "FY2013_Consumption",
                                    field: "FY2013_Consumption",
                                    label: "FY2013_Consumption"
                                },
                                { id: "2013_Q1",
                                    field: "2013_Q1",
                                    label: "2013_Q1"
                                },
                                { id: "2013_Q2",
                                    field: "2013_Q2",
                                    label: "2013_Q2"
                                },
                                { id: "2013_Q3",
                                    field: "2013_Q3",
                                    label: "2013_Q3"
                                },
                                { id: "2013_Q4",
                                    field: "2013_Q4",
                                    label: "2013_Q4"
                                },
                                { id: "2013_Total_Consumption",
                                    field: "2013_Total_Consumption",
                                    label: "2013_Total_Consumption"
                                },
                                { id: "2013_Avg_Flow",
                                    field: "2013_Avg_Flow",
                                    label: "2013 Avg Flow"
                                },
                                { id: "2013_First_Read",
                                    field: "2013_First_Read",
                                    label: "2013 First Read",
                                    formatter: this.stringDate_formatter
                                },
                                { id: "2013_Last_Read",
                                    field: "2013_Last_Read",
                                    label: "2013 Last Read",
                                    formatter: this.stringDate_formatter
                                },
                                { id: "Installation_Date",
                                    field: "Installation_Date",
                                    label: "Installation Date",
                                    formatter: this.stringDate_formatter
                                }
                            ]
                        )

                        grid2.styleColumn("id", "display: none;");
                        grid2.set("collection", myTestStore);
                        grid2.refresh();

                        document.body.style.cursor = "default";
                        mapHandler.HideLoadingIcon();

                        // add a click listener on the ID column
                        grid2.on(".dgrid-row:click", lang.hitch(this, function(e) {
                                this.currLayerName = "gpfWWCustomersLayer"
                                this.selectFeature(e);
                            }
                        )); //This works

                    }));
                }
            }
            , clearSelected: function(e) {
                //Clear the Selection for the input Layer
                layername = this.currLayerName;
                // select the feature

                //Get the layer name from the grid query

                var fl = this.map.getLayer(layername);
                fl.clearSelection();

            }

                , selectFeature: function(e) {
                layername = this.currLayerName;
                // select the feature

                //Get the layer name from the grid query

                var fl = this.map.getLayer(layername);
                var query = new Query();
                var GISOBJID  = [parseInt(e.target.innerHTML)];

                switch (layername) {
                    case "gpfCustomersLayer":
                        query.where = "wLateralPoint_ACCTID = '" + (e.target.innerHTML) + "'";
                        break;
                    case "gpfWWCustomersLayer":
                        query.where = "ssLateralPoint_ACCTID = '" + (e.target.innerHTML) + "'";
                        break;

                    default:
                        query.where = "GISOBJID = " + (e.target.innerHTML);
                        break;
                }

        //        query.where = "GISOBJID = " + (e.target.innerHTML);


                fl.selectFeatures(query, FeatureLayer.SELECTION_NEW, lang.hitch(this, function(result) {
                    if ( result.length ) {

                        //Handling for point features
                        if (result[0].geometry.type == "point") {
                            var pt = result[0].geometry;
                            var factor = 1; //some factor for converting point to extent
                            var extent = new Extent(pt.x - factor, pt.y - factor, pt.x + factor, pt.y + factor, pt.spatialReference);

                            this.map.setExtent(extent.expand(10));
                        }
                        else{
                            var zoomExtent = result[0].geometry.getExtent();
                            this.map.setExtent(zoomExtent.expand(1.2));
                        }


                        // re-center the map to the selected feature
                       //this.map.centerAt(result[0].geometry.getExtent().getCenter());


                    } else {
                        console.log("Feature Layer query returned no features... ", result);
                    }
                }));
            }

            , zoomToExtent: function(layername) {

            /*    for(var b = this.map.graphicsLayerIds.length -1; b > 0; --b) {
                    var featurelayer = this.map.getLayer(this.map.graphicsLayerIds[b]);
                    //console.log(layer.id + ' ' + layer.opacity + ' ' + layer.visible);
                    if (featurelayer.id == layername) {
                        var qURL = featurelayer.url
                    }
                }*/
                var featurelayer = this.map.getLayer(layername)

                //Given an input layer name, zoom to the extent of it
                    var query = new esri.tasks.Query();
                    var random =(new Date()).getTime(); //Fix for 10.1 Bug NIM086349
                    query.where = random + " = " + random
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

            , ClearGrid: function() {
                //Empty Store
                //Get Data Store from Feature Layers
                var emptyStore = new Memory({
                    idProperty: "OBJECTID",
                    data: { identifier: 'OBJECTID',
                        items: []}
                });

                grid.set("collection", emptyStore)    ;
                grid.refresh();
            }

            , ExportGrid: function(layername) {
                //setup the geoprocessor task
                var gpURL = this.gpURLS[this.resultLayers.indexOf(layername)];
                gp = new esri.tasks.Geoprocessor(gpURL);
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
                }));
            }

            , completeCallback: function(jobInfo){
                document.body.style.cursor = "default";
                //Show Loading Icon
                mapHandler.HideLoadingIcon();

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
/*                document.body.style.cursor = "default";
                mapHandler.HideLoadingIcon();*/

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

            , stringDate_formatter: function (columnData) {
                if (columnData != null) {
              var inputDateString = columnData.toString();
                var year        = inputDateString.substring(0,4);
                var month       = inputDateString.substring(4,6);
                var day         = inputDateString.substring(6,8);

                return (month + "/" + day + "/" + year);
                }
                else {
                    return ('');
                }
            }

            , hyperlink_formatter: function(columnData){
                //console.log("make link", columnData);
                if (columnData != null) {
                    return columnData;
                } else {
                    return ('');
                }
                //return "[HTML]" + columnData + "[HTML]";
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