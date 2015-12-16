/**
 * Created by shmel on 5/6/14.
 */
define(["dojo/_base/declare",
    "dojo/dom-construct",
    "dijit/_WidgetBase",
    "dojo/on",
    "dijit/registry",
    "dojo/ready",
    "dojo/_base/lang",
    "dojo/_base/connect",
    "dijit/layout/ContentPane",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/_base/fx",
    "dojo/_base/lang",
    "dojo/_base/array",
    "dojo/_base/Deferred",
    "../../core/utilities/maphandler",
    "dojo/topic",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./imageviewergrid.html",
    "dojo/json",
    "esri/layers/ArcGISDynamicMapServiceLayer",
    "esri/layers/FeatureLayer",
    "esri/tasks/Geoprocessor",
    "esri/toolbars/draw",
    "esri/graphic",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/SimpleLineSymbol",
    "esri/renderers/SimpleRenderer",
    "dojo/_base/Color",
    "dojox/form/BusyButton",
    "dijit/form/Button",
    "dijit/form/ToggleButton",
    "dstore/Memory",
    "dstore/Trackable",
    "dstore/Tree",
    "dgrid/OnDemandGrid",
    "dgrid/Tree",
    "dgrid/Selection",
    "dojo/on",
    "dojo/query",
    "esri/map",
    "esri/dijit/HomeButton",
    "dojo/dom",
    "dojo/number",
    "dojo/dnd/move",
    "dijit/Dialog",
    "dojox/layout/FloatingPane",
    "dijit/layout/TabContainer",
    "../../core/attributetable/attributetable",
    "dojo/parser",
    "xstyle/css!./css/imageviewergrid.css",
    "xstyle/css!dgrid/css/dgrid.css"],

    function(declare,
             domConstruct,
             WidgetBase,
             dojoOn,
             registry,
             ready,
             lang,
             connect,
             ContentPane,
             domClass,
             domStyle,
             fxer,
             language,
             array,
             Deferred,
             mapHandler, topic, TemplatedMixin, WidgetsInTemplateMixin, template,
             json , ArcGISDynamicMapServiceLayer, FeatureLayer ,
             Geoprocessor, Draw, Graphic, SimpleMarkerSymbol, SimpleLineSymbol,
             SimpleRenderer, Color, BusyButton, Button, ToggleButton, Memory, Trackable, TreeStoreMixin, OnDemandGrid, Tree, Selection, on, query, Map, HomeButton, dom, dojoNum, move, Dialog, FloatingPane, TabContainer, AttributeTable
        ){
        return declare([WidgetBase, TemplatedMixin],{
            //*** Properties needed for this style of module
            // The template HTML fragment (as a string, created in dojo/text definition above)

            templateString: template
            // The CSS class to be applied to the root node in our template

            , baseClass: "ImageViewerDiv"
            // The ESRI map object to bind to the TOC. Set in constructor
            , map: null
            , toolbar: null
            , gpQueryImageDataURL: "http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/QueryImageData/GPServer/QueryImageData"
            , gpGetImageLayerURL: "http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/GetImageLayer/GPServer/GetImageLayer"
            , gpGetImageLayerMapSvcURL: "http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/GetImageLayer/MapServer"
            , gpExportImageLayerURL: "http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/ExportImageLayertoPDF/GPServer/ExportImageLayer"
            , gpExportMultiImageLayerURL: "http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/ExportMultiImageLayertoPDF/GPServer/ExportMultiImageLayer"
            , dialogBox: null
            , titlegrid: null
            , gridPlansets: null
            , imageData: null
            , _self: null
            , floaterDivId: null
            , innerDivId: null
            , fpImageViewer: null


            //*** Creates
            , constructor: function(args) {
                // safeMixin automatically sets the properties above that are passed in from the toolmanager.js
                declare.safeMixin(this,args);
                // mapHandler is a singleton object that you can require above and use to get a reference to the map.
                this.map = mapHandler.map;

                this.floaterDivId = "imageViewerFloaterDiv"
                this.innerDivId = "imageViewerInnerDiv"
                domConstruct.create('div', { id: this.floaterDivId, style: { padding: "0px" , position:"absolute"} }, 'imageViewerContainerDiv'); //Add to overall bordercontainer
                domConstruct.create('border')
                domConstruct.create('div', { id: this.innerDivId }, this.floaterDivId);

                var ConstrainedFloatingPane = declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin, FloatingPane], {

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
                fpImageViewer = new ConstrainedFloatingPane({
                    title: 'Image Viewer',
                    parentModule: this,
                    resizable: true,
                    dockable: false,
                    closable: false,
                    style: "position:absolute;top:20px;left:0px;width:750px;height:650px;z-index:100;visibility:hidden;",
                    id: this.floaterDivId
                }, dom.byId(this.floaterDivId));
//                fpImageViewer.startup();

               /* //Create a title bar for Floating Pane
                var titlePane = query('#floaterAttribute .dojoxFloatingPaneTitle')[0];
                //Add close button to title pane. dijit.registry is used to obtain a reference to this floating pane's parentModule
                var closeDiv = domConstruct.create('div', {
                    id: "closeBtn",
                    innerHTML: esri.substitute({
                        close_title: 'Close', //i18n.panel.close.title,
                        close_alt: 'Close'//i18n.panel.close.label
                    }, '<a alt=${close_alt} title=${close_title} href="JavaScript:dijit.registry.byId(\'' + this.floaterDivId + '\').parentModule.ToggleTool();"><img  src="assets/close.png"/></a>')
                }, titlePane);*/
                //Set the content of the Floating Pane
                var htmlFragment = '<div id="fpbc" data-dojo-id="fpbc" data-dojo-type="dijit/layout/BorderContainer"><div id="tabImages"><div id="ExportAll"></div></div></div>'
                dom.byId(this.innerDivId).innerHTML = htmlFragment;
            }

            //The widget has been added to the DOM, though not visible yet. This is the recommended place to do most of the module's work
            , postCreate: function () {
                this.inherited(arguments);
            }

            /* A standard module event handler. In the postcreate and startup handlers,
             * you can assume the module has been created. You don't need to add a handler function if you are not writing code in it.
             */
            , startup: function () {
                this.map.infoWindow.domNode;

                _self = this;

                var aboutButton = new Button(
                    {label: "About"})
                    .placeAt("aboutButton");

                on(aboutButton, "click", function(){
                    var aboutDialog;
                    if (!aboutDialog) {
                        var htmlFragment = '<div width="400"><div><h2>About the Image Viewer</h2></div>';
                        htmlFragment += '<div>Version 1.1 (Beta)</div>';
                        htmlFragment += '<div">The Image Viewer component launches from the <strong>List Plan Set Documents</strong> link in the Identify/Pop Up window when a feature is clicked on. ' +
                            'The <strong>ImageViewer</strong> tab will show the list of associated images and the folders, as well as the Title Page information associated with the document. ' +
                            'Click on the Image ID in the row to open a viewer window to pan and zoom the images.</div><br><br>';
                        htmlFragment += '<div>Future functionality includes :</div>' +
                            '<div><ul>' +
                            '<li>Export Individual Images - Added 07/17/2015</li>' +
                            '<li>View multiple images in a preview window at once - Added 07/24/2015</li>' +
                            '<li>Export Multiple Images - Added 8/7/2015</li>' +
                            '<li>Improved Image Viewing in separate, movable window</li>' +
                            '<li>Select Features view associated images</li>' +
                            '</ul></div></div><br><br>';

                        // CREATE DIALOG
                        aboutDialog = new dijit.Dialog({
                            title: "About",
                            content: htmlFragment,
                            class: "aboutDlg"
                        });

                        // DISPLAY DIALOG
                        aboutDialog.show();
                    }
                    else {
                        aboutDialog.show();
                    }
                })


                //TODO  - Replace with the Event Driven Creation of the Link
                //Add the Documents Link to the Infowindow Popups
                var link = domConstruct.create("a",{
                    "class": "action",
                    "id": "statsLink",
                    "innerHTML": "List Plan Set Documents", //text that appears in the popup for the link
                    "href": "javascript: void(0);",
                    "feat_id" : "{UTIL_ID}"
                }, query(".actionList", this.map.infoWindow.domNode)[0]);

                //when the link is clicked register a function that will run
                on(link, "click", this.GetPlansets);


                //TODO - Leverage PopUp Events to Add Planset Link
                //https://developers.arcgis.com/javascript/jsapi/popup-amd.html#features
                //https://developers.arcgis.com/javascript/jsapi/infowindow-amd.html

               /* on(this.map.infoWindow, "set-features", lang.hitch(this, function(){


                    var feature = mapHandler.map.infoWindow.getSelectedFeature();


                        if (feature.attributes.UTIL_ID) {
                            console.log ("UTIL ID:" + feature.attributes.UTIL_ID)

                            //Add the Documents Link to the Infowindow Popups
                            var link = domConstruct.create("a",{
                                "class": "action",
                                "id": "statsLink",
                                "innerHTML": "List Plan Set Documents", //text that appears in the popup for the link
                                "href": "javascript: void(0);",
                                "feat_id" : "{UTIL_ID}"
                            }, query(".actionList", this.map.infoWindow.domNode)[0]);

                            //when the link is clicked register a function that will run
                            on(link, "click", this.GetPlansets);
                        }
                        else {

                        }
                }))*/
                //TODO


                var dEmptyPlanSetStore =  new (declare([Memory, Trackable, TreeStoreMixin]))({
                    idProperty: "FOLDER",
                    data: { identifier: 'FOLDER',
                        items: []}
                });


                var dEmptyTitleInfoStore =  new (declare([Memory, Trackable, TreeStoreMixin]))({
                    idProperty: "column",
                    data: { identifier: 'column',
                        items: []}
                });



// Instantiate grids
                gridPlansets = new (declare([OnDemandGrid, Tree, Selection]))({
                    //collection: dPlanSetStore.getRootCollection(),
                    collection: dEmptyPlanSetStore.filter({'hasChildren': true}),
                    loadingMessage: 'Loading data...',
                    columns: {
                        folder: {
                            label: 'folder',
                            renderExpando: true,
                            renderCell: function(object, value, node, options) {
                                loadingID = "loadImg" + value;
                                var div = document.createElement("div");
                                div.className = "renderedCell";
                                div.innerHTML = value + "<img id=" + loadingID + " src='assets/loading_blue.gif' style='padding-left: 20px;visibility: hidden;'></img>";
                                return div;

                            }
                        }
                    },
                    showHeader: false
                }, 'plansetsGrid');


                gridPlansets.on(".dgrid-row:click", lang.hitch(this, function (evt) {
                    var img_id;
                    document.body.style.cursor = "wait";
                    var row = gridPlansets.row(evt);
                    if (row.data.type == 'image') {

                        //Get the Row's IMG_ID to retrieve the image.
                        img_path = row.data.img_path;
                        img_id = row.data.img_id

                        //Get the Image
                        this.GetMapServiceImage(img_path, img_id);

                        //Show the Loading Icon
                        loadID = "loadImg" + img_id;
                        var loadIcon = document.getElementById(loadID).style.visibility = "visible"

                        //Load the Title Page info, if not already loaded
                        //Check if this row is a Title Page
                        if (row.data.title_page != '') {
                            document.body.style.cursor = "default";
                            img_id = row.data.img_id;
                        }
                        else {
                        //Find the Title Page for this group
                        //Search the Json Array
                            for (i = 0; i < imageData.length; i++) {
                                if (imageData[i].Folder == row.data.parentFolder && imageData[i].Title_Page != '') {
                                    img_id = imageData[i].Img_Id;
                                }
                            }
                        }
                        //Use the Title Page IMG_ID
                        var jData = this.GetTitlePagefromGPService(img_id);
                        document.body.style.cursor = "wait";

                    }
                    else {
                        //Folder Name
                        for (i = 0; i < imageData.length; i++) {
                            if (imageData[i].folder == row.data.folder && imageData[i].title_page != '') {
                                img_id = imageData[i].img_id
                            }
                        }
                        var jData = this.GetTitlePagefromGPService(img_id);
                       // document.body.style.cursor = "wait";
                    }

                }));

                gridPlansets.startup();


                titlegrid = new OnDemandGrid({
                    collection: dEmptyTitleInfoStore,
                    loadingMessage: 'Loading data...',
                    columns: {
                        columnName: {
                            label: 'column',
                            formatter: formatPGM
                        },
                        value: {
                            label: 'value'
                        }
                    },
                    showHeader: false
                }, 'titlePageGrid');
                titlegrid.startup();



               /* function treerowExpand (row, level, previouslyExpanded) {
                    if (row) {

                        if (level == 0) {
                            return true;
                        }
                        if (row.data.initExpand) {
                            return true;
                        }
                        return false;
                }}*/

                function formatPGM (value) {
                    if (value.toUpperCase().indexOf("PGM") > -1) {return value.replace("Pgm","PGM") }
                    else {return value};
                }
            }
            , GetPlansets: function(evt) {

                //Check if there is a UTIL ID!!
                var feature = mapHandler.map.infoWindow.getSelectedFeature();

                if (feature.attributes.UTIL_ID) {
                    console.log ("UTIL ID:" + feature.attributes.UTIL_ID)
                } else {
                    window.alert("Please select a feature with a UTIL_ID")
                    return;
                }

                //Activate the ImageViewer Tab
                var tc = registry.byId("leftPane");
                var cp = registry.byId("imgViewerGrid");
                tc.selectChild(cp);

                gridPlansets.domNode
                domClass.add(gridPlansets.domNode, "dgrid-load-data");


                document.body.style.cursor = "wait";

                //Use this UTIL_ID (same as FEAT_ID to find the folders and fill the plansets data
                var feat_id = feature.attributes.UTIL_ID
                    //Get Folders from GP Service
                //setup the geoprocessor task to get Folders
                //gp = new esri.tasks.Geoprocessor("http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/QueryImageData/GPServer/QueryImageData");
                gpFolders = new esri.tasks.Geoprocessor(_self.gpQueryImageDataURL);
                gpFolders.setOutSpatialReference({wkid:26985});

                var params = { "InputVariable":feat_id, "QueryString": "3"};
                //gp.submitJob(params, lang.hitch(this, this.DisplayWaterValveTrace));
                gpFolders.submitJob(params, lang.hitch (this, function(results) {
                    //Return Result
                    var jobid = results.jobId;

                    gpFolders.getResultData(jobid, "OutputJSON", lang.hitch(this, function(jsonresult){
                        //Json Result
                        var folderData = jsonresult.value;

                        //Use the Folder Data to make a list of the folders for a variable for the next query
                        var folderAry = [];
                        var folderList = '';

                        for (i = 0; i < folderData.length; i++) {
                            folderAry[i] = "'" + folderData[i].Folder + "'"
                        }

                        folderList = folderAry.toString();


                        //Get the Images for the folders
                            gpImages = new esri.tasks.Geoprocessor(_self.gpQueryImageDataURL);
                            gpImages.setOutSpatialReference({wkid:26985});

                            var params = { "InputVariable":folderList, "InputVariable2": feat_id, "QueryString": "4"};
                            //gp.submitJob(params, lang.hitch(this, this.DisplayWaterValveTrace));
                            gpImages.submitJob(params, lang.hitch (this, function(results) {
                                //Return Result
                                var jobid = results.jobId;

                                gpImages.getResultData(jobid, "OutputJSON", lang.hitch(this, function(jsonresult){

                                    imageData = jsonresult.value;


                                    //Use the imageData and the Folder data to build one store of the planset data
                                    var dPlanSetStore = new (declare([Memory, Trackable, TreeStoreMixin]))({
                                        data: _self.createData(folderData,imageData)
                                    });

                                    //Update the Plansets Tree View Grid
                                    gridPlansets.set("shouldExpand", function(){return true;})
                                    gridPlansets.set("collection", dPlanSetStore.filter({'hasChildren': true}))

                                    for (i = 0; i < dPlanSetStore.data.length; i++) {
                                        if (dPlanSetStore.data[i].hasChildren == "true") {
                                            //Add Loading DIV
                                            var row = gridPlansets.row(i);
                                            domClass.add(row.element, "dgrid-row-highlight");
                                        }


                                        if (dPlanSetStore.data[i].associated == "True") {
                                            var row = gridPlansets.row(i);
                                            domClass.add(row.element, "dgrid-row-highlight");
                                        }
                                    }
                                    domClass.remove(gridPlansets.domNode, "dgrid-load-data");
                                    document.body.style.cursor = "default";
                                    //Populate the Data fo Title Page
                                    _self.GetTitlePagefromGPService(imageData[0].Img_Id)


                                }));
                            }));
                    }));
                }));






            }
            , GetTitlePagefromGPService: function (img_id) {
                //Only Input is IMG_ID
                //setup the geoprocessor task
                //gp = new esri.tasks.Geoprocessor("http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/QueryImageData/GPServer/QueryImageData");
                gp = new esri.tasks.Geoprocessor(this.gpQueryImageDataURL);
                gp.setOutSpatialReference({wkid:26985});

                var params = { "InputVariable":img_id, "QueryString": "5"};
                //gp.submitJob(params, lang.hitch(this, this.DisplayWaterValveTrace));
                gp.submitJob(params, lang.hitch (this, function(results) {
                    //Return Result
                    //Get URL from Job from result
                    var jobid = results.jobId;
                    //jsonURL = this.gpQueryImageDataURL + "/jobs/" + jobid + "/results/OutputJSON?f=pjson"

                    gp.getResultData(jobid, "OutputJSON", lang.hitch(this, function(jsonresult){
                        //Json Result
                        var jdata = jsonresult.value;

                        //Update Title Page info
                        var dTitleInfoStore = new Memory({
                            data: this.createTitleData(jdata),
                            idProperty: 'id'
                        })

                        titlegrid.set("collection", dTitleInfoStore)
                        //document.body.style.cursor = "default";

                    }));
                }));
            }
            , createData: function (folders, images) {
            var data = [];

            var column;
            var i;
            //Loop Through Folders
            for (i = 0; i < folders.length; i++) {
                //Add Folder to Data Store
                data.push({});
                data[data.length - 1].folder = folders[i].Folder;
                data[data.length - 1].id = data.length - 1;
                data[data.length - 1].type = 'folder';
                data[data.length - 1].hasChildren = true;
                data[data.length - 1].associated = false;
                var parentIdx = data.length - 1
                var parentFolder = folders[i].Folder;

                var subData = [];

                //Filter Images to Image for just this folder
                var selImages = images.filter(function (img) {
                    return img.Folder == parentFolder;
                });
                //if selImages.length > 0
                //Loop through Images and add to store
                for (aImg = 0; aImg < selImages.length; aImg++) {
                    data.push({});
                    data[data.length - 1].hasChildren = false;
                    data[data.length - 1].id = data.length - 1;
                    data[data.length - 1].parent = parentIdx;
                    data[data.length - 1].img_id = selImages[aImg].Img_Id;
                    data[data.length - 1].title_page = selImages[aImg].Title_Page;
                    data[data.length - 1].type = 'image';
                    data[data.length - 1].parentFolder = selImages[aImg].Folder;
                    data[data.length - 1].associated = selImages[aImg].Associated;
                    data[data.length - 1].img_path = selImages[aImg].Img_Path;

                    if(data[data.length - 1].title_page == 'Title Page') {
                        data[data.length - 1].folder = selImages[aImg].Img_Id + " - Title Page";
                    }
                    else {
                        data[data.length - 1].folder = selImages[aImg].Img_Id;
                    }
                }

                // data[data.length - 1].children = subData;
            }
            return {
                identifier: 'id',
                items: data
            } ;
        }
            , createTitleData: function(titleDataJson) {

            //Format the JSON returned from the Title page into a format that will work with the dGrid
            //Column becomes the first value, value becomes 2nd value
            var column;
            var value;
            var titleData = [];

            //Loop Through TitlePageInfo
            for (t = 0; t < titleDataJson.length; t++) {
                i = 0;
                for (column in titleDataJson[t]) {
                    titleData.push({}); //New Item
                    titleData[i].id = i;
                    titleData[i].columnName = column;
                    titleData[i].value = titleDataJson[t][column];
                    i++;
                }
            }

            return titleData;
        }
            , GetMapServiceImage: function(img_path, img_id){
                document.body.style.cursor = "wait";
                //setup the geoprocessor task to get Folders
                //gp = new esri.tasks.Geoprocessor("http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/QueryImageData/GPServer/QueryImageData");
                gpFolders = new esri.tasks.Geoprocessor(_self.gpGetImageLayerURL);
                gpFolders.setOutSpatialReference({wkid:4326});

                var params = { "Image_Path":img_path };
                //gp.submitJob(params, lang.hitch(this, this.DisplayWaterValveTrace));
                gpFolders.submitJob(params, lang.hitch (this, function(results) {
                    //Return Result
                    var jobid = results.jobId;

                    //Format the URL for the Map Service
                    var imgSvcURL = _self.gpGetImageLayerMapSvcURL + "/jobs/" + jobid


//                    if (!this.fpImageViewer) {
                        //if (!this.floaterDivId){
                    if (dom.byId(this.floaterDivId).style.visibility === 'hidden') {
                        //var imgText = "Img ID / Path:" + img_id + "/" + img_path
                        var imgText = "Path: " + img_path
                        var imgTitle = "Image ID: " + img_id

                        //Create the button to link to a new window
                        var testImgURL = imgSvcURL + "?f=jsapi"
                       // window.open(testImgURL,'_blank');

                        var mapDivName = "imgViewerMap_" + img_id;
                        var btnExportDivName = "btnExport" + img_id;
                        var homeButtonDivName = "HomeButton" + img_id;
                        var pathTextDivName = "ImgPath" + img_id;

                            var htmlFragment = '<div id="tabImages"></div><div id="ExportAll"></div>'

                            /*var paneHTML = '<div>'+imgText+'</div>';
                             paneHTML += '<div id="imgViewerMap" style="width:700px; height:550px; border: 1px solid #A8A8A8;">' +
                             '<div id="HomeButton"></div></div>';
                             paneHTML += '<table><tr><td style="padding-right: 20px;"><div><a href="' + testImgURL+ '" target="_blank">Open in New Window</a></div></td>'+'<td style="padding-right: 20px;"><div id="btnExport"></div></td></tr></table>';
                             */
                            var paneHTML = '<div id="'+ pathTextDivName +'">'+imgText+'</div>';
                            paneHTML += '<div id="' + mapDivName+ '" style="width:700px; height:550px; border: 1px solid #A8A8A8;">' +
                                '<div id="'+ homeButtonDivName +'"></div></div>';
                            paneHTML += '<table><tr>'+'<td style="padding-right: 20px;"><div id="' + btnExportDivName + '"></div></td></tr></table>';


                            /*var htmlFragment = '<div id="tabImages"><div>'+imgText+'</div>';
                             htmlFragment += '<div id="imgViewerMap" style="width:700px; height:600px; border: 1px solid #A8A8A8;">' +
                             '<div id="HomeButton"></div></div>';
                             htmlFragment += '<table><tr><td style="padding-right: 20px;"><div><a href="' + testImgURL+ '" target="_blank">Open in New Window</a></div></td>'+'<td style="padding-right: 20px;"><div id="btnExport"></div></td></tr></table></div>';*/


                        //Set Content of Floating Pane
                        dom.byId(this.innerDivId).innerHTML = htmlFragment;

                       /* // CREATE DIALOG
                        this.dialogBox = new dijit.Dialog({
                            title: "View Plan Documents",
                            content: htmlFragment
                        });*/



                        //TODO: Update for On Hide for Floating Pane
                        /*on (this.dialogBox, "hide", function(){
                            console.log ("Dialog Closed")
                            tabs = tabContImages.getChildren();

                            for(var i = 0; i < tabs.length; i++)
                            {
                                tabContImages.removeChild(tabs[i]);
                            };

                            //Destroy the Tab Container
                            tabContImages.destroyRecursive();

                            console.debug(registry._hash);

                            //CREATE TAB CONTAINER
                            tabContImages = new TabContainer({
                                style: "height: 650px; width: 750px;",
                                id: "tabImages"
                            }, "tabImages");


                            console.debug(registry._hash);

                        });*/

                        document.body.style.cursor = "default";

                           var exportAllButton = new BusyButton(
                            {label: "Export All Images to PDF",
                            busyLabel: "Exporting...",
                            id: "ExportAllBusy"})
                            .placeAt("ExportAll");

                        on(exportAllButton, "click", lang.hitch(this, function(){
                            //TODO Run GP Process to Output Image to PDF

                            //For Each Tab open, get the imgID to pass to the function
                            tabs = tabContImages.getChildren();

                            var imgPaths = [];

                            for(var i = 0; i < tabs.length; i++)
                            {
                                console.log (tabs[i].id)

                                //Get the Path from the Object with
                                imgPathDIVId = "ImgPath" + tabs[i].id;
                                imgPathDIV = document.getElementById(imgPathDIVId)

                                imgPaths [i] = imgPathDIV.innerHTML.replace("Path: ", "")


                                console.log (imgPathDIV.innerHTML);

                            };

                            imgPathStr = imgPaths.join(',');

                            this.exportMultipleImages(imgPathStr)
                        }));




                        //CREATE TAB CONTAINER
                        var tabContImages = new TabContainer({
                            style: "height: 650px; width: 750px"
                        }, "tabImages");

                            fpImageViewer.startup();

                            //TODO - Look atr Attribute Table.css to update css

                            //on(tabContImages, 'resize', console.log("test resize tab comtainer"))

                            tabContImages.startup();

                        //ADD TAB
                        var pane = new ContentPane({
                            title: img_id,
                            id: img_id,
                            closable: true,
                            content: paneHTML,
                            style: "background-color: #FFFFFF"
                        });
                        tabContImages.addChild(pane);
                            tabContImages.layout();


                        //CREATE EXPORT BUTTON
                        var exportButton = new BusyButton(
                            {label: "Export This Image to PDF",
                                busyLabel: "Exporting...",
                                id: btnExportDivName + "Busy"})
                            .placeAt(btnExportDivName);



                        on(exportButton, "click", lang.hitch(this, function(){
                            //Run GP Process to Output Image to PDF
                            this.exportSingleImage(img_path, img_id)
                        }));

                            fpImageViewer.startup();
                        // DISPLAY DIALOG
                        //this.dialogBox.show();
                        //registry.byId(this.floaterDivId).show();

                        // CREATE MAP
                        this.createImageViewerMap(mapDivName,imgSvcURL,homeButtonDivName ); //SJH

                    /*        on(fpImageViewer._resizeHandle, "resize", function(e) {
                                // Event handler
                                //tabContImages.resize();
                                //tabContImages.layout();




                                console.log("test");
                            });*/

                           // on(registry.getElementById(""))



                        registry.byId(this.floaterDivId).show();

                        // Hide Loading Icon
                        loadID = "loadImg" + img_id;
                        var loadIcon = document.getElementById(loadID).style.visibility = "hidden";
                    }
                    else {
                        document.body.style.cursor = "default";

                        //Add Tab to Tab container
                        //var imgText = "Img ID / Path:" + img_id + "/" + img_path
                        var imgText = "Path: " + img_path
                        var imgTitle = "Image ID: " + img_id
                        var mapDivName = "imgViewerMap_" + img_id;
                        var btnExportDivName = "btnExport" + img_id;
                        var homeButtonDivName = "HomeButton" + img_id;
                        var pathTextDivName = "ImgPath" + img_id;

                        //Create the button to link to a new window
                        var testImgURL = imgSvcURL + "?f=jsapi"


                        var paneHTML = '<div id="'+ pathTextDivName +'">'+imgText+'</div>';
                        paneHTML += '<div id="' + mapDivName+ '" style="width:700px; height:550px; border: 1px solid #A8A8A8;">' +
                            '<div id="'+ homeButtonDivName +'"></div></div>';
                        paneHTML += '<table><tr>'+'<td style="padding-right: 20px;"><div id="' + btnExportDivName + '"></div></td></tr></table>';

                        // DISPLAY DIALOG
                       // this.dialogBox.show();
                        fpImageViewer.startup();

                        //Find TAB CONTAINER
                        var tabContImages = dijit.byId("tabImages")


                        //ADD TAB
                        var pane = new ContentPane({
                            title: img_id,
                            id: img_id,
                            closable: true,
                            content: paneHTML,
                            style: "background-color: #FFFFFF"
                        });
                        tabContImages.addChild(pane);
                        tabContImages.layout()
                        tabContImages.selectChild(pane);

                        //CREATE EXPORT BUTTON
                        var exportButton = new BusyButton(
                            {label: "Export This Image to PDF",
                                busyLabel: "Exporting...",
                                id: btnExportDivName + "Busy"})
                            .placeAt(btnExportDivName);

                        on(exportButton, "click", lang.hitch(this, function(){
                            //Run GP Process to Output Image to PDF
                            this.exportSingleImage(img_path, img_id)
                        }));

                        //this.dialogBox.show();
                        fpImageViewer.startup();


                        // CREATE MAP
                        var newMap = this.createImageViewerMap(mapDivName,imgSvcURL,homeButtonDivName );
                        newMap.resize();

                        // Hide Loading Icon
                        loadID = "loadImg" + img_id;
                        var loadIcon = document.getElementById(loadID).style.visibility = "hidden";
                    }


                    //For now, Open in Standard ArcGIS JSAPI Viewer
                    //http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/GetImageLayer/MapServer/jobs/j51775298e7b144e7a2d8236ee92a5d56?f=jsapi
                    //var testImgURL = imgSvcURL + "?f=jsapi"
                    //window.open(testImgURL,'_blank');

                }
        )
        );
            }

            , exportMultipleImages: function (img_paths) {
                //Input an IMGPath, and pass to the GP Service that will generate and export an PDF file to download
                gpExportImage = new esri.tasks.Geoprocessor(_self.gpExportMultiImageLayerURL);
                gpExportImage.setOutSpatialReference({wkid:4326});
                var params = { "Image_Path":img_paths, "OutputFileName": "output.pdf" };
                //gp.submitJob(params, lang.hitch(this, this.DisplayWaterValveTrace));
                gpExportImage.submitJob(params, lang.hitch (this, function(jobInfo) {
                    //Wait for the Results
                    if(jobInfo.jobStatus !== "esriJobFailed"){
                        gpExportImage.getResultData(jobInfo.jobId,"OutputPDF", lang.hitch(this, function(outputFile) {

                                    dijit.byId('ExportAllBusy').cancel();

                                    var theurl = outputFile.value.url;
                                    console.log(theurl);
                                    window.open(theurl, '_blank');
                                }
                            )
                        );
                    }

                }))
            }
            , exportSingleImage: function (img_path, img_id) {
                //Input an IMGPath, and pass to the GP Service that will generate and export an PDF file to download
                gpExportImage = new esri.tasks.Geoprocessor(_self.gpExportImageLayerURL);
                gpExportImage.setOutSpatialReference({wkid:4326});

                var params = { "Image_Path":img_path };
                //gp.submitJob(params, lang.hitch(this, this.DisplayWaterValveTrace));
                gpExportImage.submitJob(params, lang.hitch (this, function(jobInfo) {
                    //Wait for the Results
                    if(jobInfo.jobStatus !== "esriJobFailed"){
                        gpExportImage.getResultData(jobInfo.jobId,"OutputPDF", lang.hitch(this, function(outputFile) {

                                    dijit.byId('btnExport' + img_id + 'Busy').cancel();

                                    var theurl = outputFile.value.url;
                                    console.log(theurl);
                                    window.open(theurl, '_blank');
                                }
                            )
                        );
                    }

                }))
            }
            , createImageViewerMap: function (srcNodeRef, imgLayerURL, homeDIVName){
                var map = new esri.Map(srcNodeRef,{
                    slider: true,
                    autoResize:true
                });

                //Add Image Layer
                var imgLayer = new ArcGISDynamicMapServiceLayer(imgLayerURL)
                map.addLayer(imgLayer)


                /*var home = new HomeButton({
                    map: map,
                    extent: imgLayer.fullExtent
                }, homeDIVName);
                home.startup();*/

                on(map, "load",  lang.hitch (this, function(){

                }));

                on(imgLayer, "load",  lang.hitch (this, function(){
                    var home = new HomeButton({
                        map: map,
                        extent: imgLayer.fullExtent,
                        visible: true
                    }, homeDIVName);
                    home.startup();
                    home.show();

                }));

                return map;
            }
            , NewFunctionHere: function(){

            }

        });
    });