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
    "dijit/form/Select",
    "dijit/form/Textarea",
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
             SimpleRenderer, Color, BusyButton, Button, ToggleButton, Select, TextArea, Memory, Trackable, TreeStoreMixin, OnDemandGrid, Tree, Selection, on, query, Map, HomeButton, dom, dojoNum, move, Dialog, FloatingPane, TabContainer, AttributeTable
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
            , gpPrintImageLayerURL: "http://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/PrintSingleMapToPDF/GPServer/PrintSingleMapToPDF"
            , dialogBox: null
            , titlegrid: null
            , gridPlansets: null
            , imageData: null
            , _self: null
            , floaterDivId: null
            , innerDivId: null
            , fpImageViewer: null
            , imageViewerContainerDiv: null
            , printDialog: null
            , imageViewerMaps: null //List of Maps Created in the ImageViewer


            //*** Creates
            , constructor: function(args) {
                // safeMixin automatically sets the properties above that are passed in from the toolmanager.js
                declare.safeMixin(this,args);
                // mapHandler is a singleton object that you can require above and use to get a reference to the map.
                this.map = mapHandler.map;

                this.floaterDivId = "imageViewerFloaterDiv"
                this.innerDivId = "imageViewerInnerDiv"
                this.imageViewerContainerDiv = "imageViewerContainerDiv"

                domConstruct.create('div', { id: this.floaterDivId, style: { padding: "0px" , position:"absolute"} }, 'imageViewerContainerDiv'); //Add to overall bordercontainer
             /*   domConstruct.create('border')
                domConstruct.create('div', { id: this.innerDivId }, this.floaterDivId);
*/
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
                        this.close = lang.hitch (this, function () {

                            //console.log ("Imageviewer Closed")

                            //Clear out Existing Tab Container
                           var tabContImages = dijit.byId("tabImages")
                            //console.log ("Imageviewer Closed")
                            tabs = tabContImages.getChildren();

                            for(var i = 0; i < tabs.length; i++)
                            {
                                tabContImages.removeChild(tabs[i]);
                            };

                            //Destroy the Tab Container
                           // tabContImages.destroyRecursive();

                          /*  console.debug(registry._hash);

                            //CREATE TAB CONTAINER
                            tabContImages = new TabContainer({
                                style: "height: 650px; width: 750px;",
                                id: "tabImages"
                            }, "tabImages");*/

                            //Set HTML in CP1
                           // cp1 = registry.byId("cp1")
                           // cp1.setContent = '<div id="tabImages"></div>'


                            this.domNode.style.display = "none";
                            this.domNode.style.visibility = "hidden";

                            //Close the Dialog //TODO - Not recognizing

                            if (this.printDialog) {this.printDialog.hide();}

                        })
                    }

                });

                //Create Floating Pane to house the layout UI of the widget. The parentModule property is created to obtain a reference to this module in close button click.
                fpImageViewer = new ConstrainedFloatingPane({
                    title: 'Image Viewer',
                    parentModule: this,
                    resizable: true,
                    dockable: false,
                    closable: true,
                    style: "position:absolute;top:20px;left:0px;width:750px;height:650px;z-index:100;visibility:hidden;",
                    id: this.innerDivId
                }, dom.byId(this.floaterDivId));
//                fpImageViewer.startup();

                var htmlFragment = '<div id= "fpBorderContainer" dojoType="dijit.layout.BorderContainer"></div>'

                fpImageViewer.setContent(htmlFragment);

                var bottomHtmlFragment = '<div id="ExportAll"></div>'
                var topHtmlFragment = '<div id="tabImages"></div>'

                fpBorderContainer =  registry.byId("fpBorderContainer")


                var cp1 = new ContentPane({
                    region: "center",
                    style: "width: 100%;",
                    content: topHtmlFragment,
                    id: "cp1"
                });

                var cp2 = new ContentPane({
                    region: "bottom",
                    style: "width: 100%",
                    content: bottomHtmlFragment,
                    id: "cp2"
                });

                fpBorderContainer.addChild(cp1)
                fpBorderContainer.addChild(cp2)
                domClass.add(cp1.domNode, "InnerContentPane");

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
                            '<li>Resizable Viewer Window - Added 1/16/2016</li>' +
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
                    //if (dom.byId(this.innerDivId).style.visibility === 'hidden') {

                    if ((!registry.byId("tabImages"))){
                        //var imgText = "Img ID / Path:" + img_id + "/" + img_path
                        var imgText = "Path: " + img_path
                        var imgTitle = "Image ID: " + img_id

                        //Create the button to link to a new window
                        var testImgURL = imgSvcURL + "?f=jsapi"
                       // window.open(testImgURL,'_blank');

                        var mapDivName = "imgViewerMap_" + img_id;
                        var btnExportDivName = "btnExport" + img_id;
                        var btnPrintDivName = "btnPrint" + img_id;
                        var homeButtonDivName = "HomeButton" + img_id;
                        var pathTextDivName = "ImgPath" + img_id;
                        var mapBCName = "mapBorderContainer" + img_id;

                        var paneHTML =  '<div id= "' +mapBCName + '" dojoType="dijit.layout.BorderContainer"></div>'

                        document.body.style.cursor = "default";

                        //Make the Export All Button if not there
                       if (!registry.byId("ExportAllBusy")) {

                           var exportAllButton = new BusyButton(
                               {label: "Export All Images to PDF",
                                   busyLabel: "Exporting...",
                                   id: "ExportAllBusy"})
                               .placeAt("ExportAll");

                           on(exportAllButton, "click", lang.hitch(this, function () {

                               //For Each Tab open, get the imgID to pass to the function
                               tabs = tabContImages.getChildren();

                               var imgPaths = [];

                               for (var i = 0; i < tabs.length; i++) {
                                   //console.log(tabs[i].id)

                                   //Get the Path from the Object with
                                   imgPathDIVId = "ImgPath" + tabs[i].id;
                                   imgPathDIV = document.getElementById(imgPathDIVId)

                                   imgPaths [i] = imgPathDIV.innerHTML.replace("Path: ", "")
                                  // console.log(imgPathDIV.innerHTML);

                               }
                               ;

                               imgPathStr = imgPaths.join(',');

                               this.exportMultipleImages(imgPathStr)
                           }));
                       }

                        //Create the Maps List
                        imageViewerMaps = new Array();

                        //CREATE TAB CONTAINER
                        var tabContImages = new TabContainer({
                            style: "height: 100%; width: 100%"
                            //style: "height: 500px; width: 750px"
                        }, "tabImages");

                            fpImageViewer.startup();
                            tabContImages.startup();

                        //ADD TAB
                        var pane = new ContentPane({
                            title: img_id,
                            id: img_id,
                            closable: true,
                            content: paneHTML, //Just the Border Container
                            style: "background-color: #FFFFFF;"
                        });

                        domClass.add(pane.domNode, "TabPane");


                        tabContImages.addChild(pane);
                            tabContImages.layout();


                        //Add ContentPane (Top) for Path
                        pathHTML = '<div id="'+ pathTextDivName +'">'+imgText+'</div>';

                        //Add ContentPane (Center) for Map
                        //mapHTML = '<div id="' + mapDivName+ '" style="width:99%; height:99%; border: 1px solid #A8A8A8;">' +
                            mapHTML = '<div id="' + mapDivName+ '" style="width:99%; height:99%;">' +
                            '<div id="'+ homeButtonDivName +'"></div></div></div>';

                        //Add ContentPane (Botton) for Export Button
                        exportHTML = '<table><tr>'+'<td style="padding-right: 20px;"><div id="' + btnExportDivName + '"></div></td><td style="padding-right: 20px;"><div id="' + btnPrintDivName + '"></div></td></tr></table>';

                        var pathCP = new ContentPane({
                            region: "top",
                            style: "width: 100%",
                            content: pathHTML
                        }) ;


                        var mapCP = new ContentPane({
                            region: "center",
                            style: "width: 100%",
                            content: mapHTML
                        }) ;


                        var exportCP = new ContentPane({
                            region: "bottom",
                            style: "width: 100%",
                            content: exportHTML
                        }) ;

                        var mapBC = registry.byId(mapBCName);


                        mapBC.addChild(pathCP);
                        mapBC.addChild(mapCP);
                        mapBC.addChild(exportCP);

                        var mapBC = registry.byId(mapBCName);
                        domClass.add(mapCP.domNode, "TabPane");

                        /*domClass.add(pathCP.domNode, "InnerContentPane");
                        domClass.add(mapCP.domNode, "InnerContentPane");
                        domClass.add(exportCP.domNode, "InnerContentPane");*/

                        //CREATE EXPORT BUTTON
                        var exportButton = new BusyButton(
                            {label: "Export This Image to PDF",
                                busyLabel: "Exporting...",
                                id: btnExportDivName + "Busy"})
                            .placeAt(btnExportDivName);

                        var printButton = new BusyButton(
                            {label: "Print This Image to Layout PDF",
                                busyLabel: "Printing...",
                                id: btnPrintDivName + "Busy"})
                            .placeAt(btnPrintDivName);


                        on(exportButton, "click", lang.hitch(this, function(){
                            //Run GP Process to Output Image to PDF
                            this.exportSingleImage(img_path, img_id)
                        }));

                        on(printButton, "click", lang.hitch(this, function(){
                            //Run GP Process to Output Image to PDF
                            this.OpenPrintDialog(img_id) //TODO - Add Parameters
                        }));

                            fpImageViewer.startup();

                        dom.byId("imageViewerInnerDiv").style.visibility = "visible"
                        dom.byId("imageViewerInnerDiv").style.hidden = "false"

                        // DISPLAY DIALOG
                        //this.dialogBox.show();
                        //registry.byId(this.floaterDivId).show();

                        // CREATE MAP
                        this.createImageViewerMap(mapDivName,imgSvcURL,homeButtonDivName, img_id ); //SJH

                            on(fpImageViewer._resizeHandle, "resize", function(e) {
                                // Event handler
                                tabContImages.resize();
                                tabContImages.layout();
                                //tabContImages.layout();
                            });

                           // on(registry.getElementById(""))



                        registry.byId(this.innerDivId).show();

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
                        var btnPrintDivName = "btnPrint" + img_id;
                        var homeButtonDivName = "HomeButton" + img_id;
                        var pathTextDivName = "ImgPath" + img_id;
                        var mapBCName = "mapBorderContainer" + img_id;

                        //Create the button to link to a new window
                        /*var testImgURL = imgSvcURL + "?f=jsapi"


                        var paneHTML = '<div id="'+ pathTextDivName +'">'+imgText+'</div>';
                        paneHTML += '<div id="' + mapDivName+ '" style="width:100%; height:100%; border: 1px solid #A8A8A8;">' +
                            '<div id="'+ homeButtonDivName +'"></div></div>';
                        paneHTML += '<table><tr>'+'<td style="padding-right: 20px;"><div id="' + btnExportDivName + '"></div></td></tr></table>';
*/

                        var paneHTML =  '<div id= "' +mapBCName + '" dojoType="dijit.layout.BorderContainer"></div>'

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

                        domClass.add(pane.domNode, "TabPane");

                        tabContImages.addChild(pane);
                        tabContImages.layout()
                        tabContImages.selectChild(pane);


                        //NEW!!

                        //Add ContentPane (Top) for Path
                        pathHTML = '<div id="'+ pathTextDivName +'">'+imgText+'</div>';

                        //Add ContentPane (Center) for Map
                        //mapHTML = '<div id="' + mapDivName+ '" style="width:99%; height:99%; border: 1px solid #A8A8A8;">' +
                        mapHTML = '<div id="' + mapDivName+ '" style="width:99%; height:99%;">' +
                            '<div id="'+ homeButtonDivName +'"></div></div></div>';

                        //Add ContentPane (Botton) for Export Button
                        exportHTML = '<table><tr>'+'<td style="padding-right: 20px;"><div id="' + btnExportDivName + '"></div></td><td style="padding-right: 20px;"><div id="' + btnPrintDivName + '"></div></td></tr></table>';

                        var pathCP = new ContentPane({
                            region: "top",
                            style: "width: 100%",
                            content: pathHTML
                        }) ;


                        var mapCP = new ContentPane({
                            region: "center",
                            style: "width: 100%",
                            content: mapHTML
                        }) ;


                        var exportCP = new ContentPane({
                            region: "bottom",
                            style: "width: 100%",
                            content: exportHTML
                        }) ;

                        var mapBC = registry.byId(mapBCName);


                        mapBC.addChild(pathCP);
                        mapBC.addChild(mapCP);
                        mapBC.addChild(exportCP);

                        var mapBC = registry.byId(mapBCName);
                        domClass.add(mapCP.domNode, "TabPane");

                        mapBC.startup()

                        /*domClass.add(pathCP.domNode, "InnerContentPane");
                         domClass.add(mapCP.domNode, "InnerContentPane");
                         domClass.add(exportCP.domNode, "InnerContentPane");*/
                        // New!!


                        //CREATE EXPORT BUTTON
                        var exportButton = new BusyButton(
                            {label: "Export This Image to PDF",
                                busyLabel: "Exporting...",
                                id: btnExportDivName + "Busy"})
                            .placeAt(btnExportDivName);

                        var printButton = new BusyButton(
                            {label: "Print This Image to Layout PDF",
                                busyLabel: "Printing...",
                                id: btnPrintDivName + "Busy"})
                            .placeAt(btnPrintDivName);

                        on(exportButton, "click", lang.hitch(this, function(){
                            //Run GP Process to Output Image to PDF
                            this.exportSingleImage(img_path, img_id)
                        }));

                        on(printButton, "click", lang.hitch(this, function(){
                            //Run GP Process to Output Image to PDF
                            this.OpenPrintDialog(img_id) //TODO - Add Parameters
                        }));

                        //this.dialogBox.show();
                        fpImageViewer.startup();


                        dijit.byId("imageViewerInnerDiv").style.visibility = "visible"
                        dijit.byId("imageViewerInnerDiv").style.hidden = "false"

                        registry.byId(this.innerDivId).show();

                        // CREATE MAP
                        var newMap = this.createImageViewerMap(mapDivName,imgSvcURL,homeButtonDivName, img_id);
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
                                    //console.log(theurl);
                                    window.open(theurl, '_blank');
                                }
                            )
                        );
                    }

                }))
            }
            , exportSingleImage: function (img_path, img_id) {
                //var myObject = {};


                //Map Name
                var mapName= "imgViewerMap_" + img_id;
                var imgLayerName = "imgLayer" + img_id;

                //Find Map in imageViewerMaps ex: imgViewerMap_002345
                for (var i = 0; i < imageViewerMaps.length; i++) {
                    if (imageViewerMaps[i].id == mapName) {
                        exportMap = imageViewerMaps[i]
                    }
                }

                //Get Extent of Map
                var ivMapExtent = exportMap.extent.toJson();

                var imgLayer = exportMap.getLayer(imgLayerName); //TODO : Compare the imgLayer.FullExtent with the Map Extent. Pass the imgLayer extent if the map extent is not zoomed in.

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
            , createImageViewerMap: function (srcNodeRef, imgLayerURL, homeDIVName, img_id){
                var map = new esri.Map(srcNodeRef,{
                    slider: true,
                    autoResize:true,
                    logo: false
                });

                //Add Image Layer
                var imgLayerName = "imgLayer" + img_id;
                var imgLayer = new ArcGISDynamicMapServiceLayer(imgLayerURL, {
                    id: imgLayerName
                });
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

                //Add to List
                imageViewerMaps.push (map);

                return map;
            }
            , OpenPrintDialog: function(img_id){
                //Opens a Modal Dialog window for the user to select the properties for the print layout

                var selLayoutDIVid = "selLayout"
                var selOrientDIVid = "selOrient"
                var txtNotesDIVid = "txtNotes"
                var buttonPrintDIVid = "btnPrint"
                var buttonCancelDIVid = "btnCancel"


                var printDialogHTML = '<div class="printAreas"> <table> <tr> <td>Layout Size:</td><td><div id="' + selLayoutDIVid + '"></div></td> </tr> ' +
                    '<tr> <td>Orientation:</td><td><div id="' + selOrientDIVid + '"></div></td> </tr> ' +
                    '<tr> <td>Notes:</td><td><div id="' + txtNotesDIVid + '"></div></td> </tr> </table></div>' +
                    '<div class="printAreas"><table style="width: 100%;"> <tr> <td align="center"><div id="' + buttonPrintDIVid + '"></div></td><td align="center"><div id="' + buttonCancelDIVid + '"></div></td> </tr> </table> </div>';

                //Content for Controls
                var aLayouts = [
                    { label: '8.5" x 11"', value: '8.5" x 11"'},
                    { label: '11" x 17"', value: '11" x 17"'},
                    { label: '24" x 36"', value: '24" x 36"'}
                ];
                var aOrients = [
                    { label: 'Landscape',value: 'Landscape'},
                    { label: 'Portrait', value: 'Portrait'}

                ];

                if (!this.printDialog) {
                    // CREATE DIALOG
                    this.printDialog = new dijit.Dialog({
                        title: "Print Plans",
                        content: printDialogHTML,
                        class: "printDlg"
                    });

                    this.printDialog.startup();


                    on (this.printDialog, "hide", lang.hitch(this, function(){
                        console.log ("Dialog Closed");

                        this.printDialog.destroyRecursive();
                        this.printDialog = null;
                        dijit.byId('btnPrint' + img_id + 'Busy').cancel();
                    }));


                    //Create Objects to go in Dialog

                    //Print Selections
                    var layoutSelector = new Select({
                        options: aLayouts
                    }, selLayoutDIVid).startup();

                    var orientSelector = new Select({
                        options: aOrients
                    }, selOrientDIVid).startup();

                    var notesTextBox = new TextArea({
                        name: "Notes",
                        maxlength: 200,
                        value: "" /* no or empty value! */,
                        placeholder: "(Max 200 Chars.)"
                    }, txtNotesDIVid);


                    var btnCancel = new Button({
                        label: "Cancel",
                        class: "printBtn",
                        onClick:  lang.hitch(this, function (){

                            dijit.byId('btnPrint' + img_id + 'Busy').cancel();

                            //Close the Dialog
                            this.printDialog.hide();
                        })
                    }, buttonCancelDIVid).startup();

                    var btnPrint = new BusyButton({
                        label: "Print",
                        class: "printBtn",
                        style: "width: 60px",
                        onClick: lang.hitch(this, function() {

                            //Get the Printing Parmeters, Orientation, Notes, Layout

                            var layout = dijit.byId(selLayoutDIVid).value
                            var orientation = dijit.byId(selOrientDIVid).value
                            var notes = dijit.byId(txtNotesDIVid).value

                            this.PrintSingleImage(img_path, img_id, orientation, layout, notes);

                            //Close the Dialog
                            //printDialog.hide();
                            //PrintSingleImage
                            //TODO



                        })
                    }, buttonPrintDIVid).startup();



                    // DISPLAY DIALOG

                    this.printDialog.show();
                }
                else {
                    this.printDialog.show();
                }

            }

            , PrintSingleImage: function (img_path, img_id, orientation, layout, notes) {
                //Map Name
                var mapName= "imgViewerMap_" + img_id;


                //Find Map in imageViewerMaps ex: imgViewerMap_002345
                //Map Name
                var mapName= "imgViewerMap_" + img_id;
                var imgLayerName = "imgLayer" + img_id;

                //Find Map in imageViewerMaps ex: imgViewerMap_002345
                for (var i = 0; i < imageViewerMaps.length; i++) {
                    if (imageViewerMaps[i].id == mapName) {
                        exportMap = imageViewerMaps[i]
                    }
                }

                //Get Extent of Map
                var ivMapExtent = exportMap.extent.toJson();
                var ivMapExtentString = JSON.stringify(ivMapExtent);

                var imgLayer = exportMap.getLayer(imgLayerName); //TODO : Compare the imgLayer.FullExtent with the Map Extent. Pass the imgLayer extent if the map extent is not zoomed in.

                //Input an IMGPath, and pass to the GP Service that will generate and export an PDF file to download

                //Parameters for the GP Print Image Service, which formats the Image into a Map Layout with Title Page Info:
                //Image_Path, Orientation, Layout, Notes, IMG ID, Extent JSON

                gpPrintImage = new esri.tasks.Geoprocessor(_self.gpPrintImageLayerURL);
                //gpPrintImage.setOutSpatialReference({wkid:4326});

                var params = {
                    "Image_Path":img_path,
                    "IMG_Id": img_id,
                    "Orientation": orientation,
                    "Layout": layout,
                    "Extent_JSON": ivMapExtentString,
                    "Notes": notes
                };
                //gp.submitJob(params, lang.hitch(this, this.DisplayWaterValveTrace));
                gpPrintImage.submitJob(params, lang.hitch (this, function(jobInfo) {
                    //Wait for the Results
                    if(jobInfo.jobStatus !== "esriJobFailed"){
                        gpPrintImage.getResultData(jobInfo.jobId,"OutputPDF", lang.hitch(this, function(outputFile) {

                                    dijit.byId('btnPrint').cancel();

                                    //Close the Dialog
                                    this.printDialog.hide();

                                    var theurl = outputFile.value.url;
                                    console.log(theurl);
                                    window.open(theurl, '_blank');
                                }
                            )
                        );
                    }

                }))
            }

            , NewFunctionHere: function(){

            }

        });
    });