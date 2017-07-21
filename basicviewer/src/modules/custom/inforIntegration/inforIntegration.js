/**
 * Created by shmel on 5/6/14.
 */
define(["dojo/_base/declare",
    "dojo/dom-construct",
    "dojo/dom-attr",
    "dijit/_WidgetBase",
    "dojo/on",
    "dojo/promise/all",
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
   // "dijit/_TemplatedMixin",
    //"dijit/_WidgetsInTemplateMixin",
    //"dojo/text!./imageviewergrid.html",
    "dojo/json",
    "esri/IdentityManager",
    "esri/layers/ArcGISDynamicMapServiceLayer",
    "esri/layers/FeatureLayer",
    "esri/tasks/Geoprocessor",
    "esri/tasks/QueryTask",
    "esri/tasks/FeatureSet",
    "esri/tasks/query",
    "esri/toolbars/draw",
    "esri/graphic",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleFillSymbol",
    "esri/renderers/SimpleRenderer",
    "dojo/_base/Color",
    "dojox/form/BusyButton",
    "dijit/form/Button",
    "dijit/form/ToggleButton",
    "dijit/form/Select",
    "dijit/form/Textarea",
    "dijit/form/TextBox",
    "dijit/form/ValidationTextBox",
    "dstore/Memory",
    "dstore/legacy/DstoreAdapter",
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
    "dojo/text!./InforConfig.js",
    "dojo/parser",
    "xstyle/css!./css/inforIntegration.css",
    "xstyle/css!dgrid/css/dgrid.css"],

    function(declare,
             domConstruct,
             domAttr,
             WidgetBase,
             dojoOn,
             all,
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
             mapHandler, topic, //TemplatedMixin, WidgetsInTemplateMixin,
             //template,
             json , IdentityManager, ArcGISDynamicMapServiceLayer, FeatureLayer ,
             Geoprocessor, QueryTask,FeatureSet, Query, Draw, Graphic, SimpleMarkerSymbol, SimpleLineSymbol, SimpleFillSymbol,
             SimpleRenderer, Color, BusyButton, Button, ToggleButton, Select, TextArea, TextBox, ValidationTextBox, Memory, DstoreAdapter, Trackable, TreeStoreMixin, OnDemandGrid, Tree, Selection, on, query, Map, HomeButton, dom, dojoNum, move, Dialog, FloatingPane, TabContainer,
             AttributeTable, InforConfig
        ){
        return declare([WidgetBase],{
            //*** Properties needed for this style of module
            // The template HTML fragment (as a string, created in dojo/text definition above)

            //templateString: template
            // The CSS class to be applied to the root node in our template

            //, baseClass: "InforIntegration"
            // The ESRI map object to bind to the TOC. Set in constructor
            map: null
            , gisobjid: null
            , systemCode: null
            , subType: null
            , self: null
            , submitDialog: null
            , waitDialog: null
            , aLink: null
            , inforConfig: null
            , inforFeatureClassNames: null
            , inforClassTypes: null
            , inforStreetNames: null
            , inforAssetTypes: null

            //*** Creates
            , constructor: function(args) {
                // safeMixin automatically sets the properties above that are passed in from the toolmanager.js
                declare.safeMixin(this,args);
                // mapHandler is a singleton object that you can require above and use to get a reference to the map.
                this.map = mapHandler.map;
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

                self = this;


                var css = 'mylink { background-color: #cfe5fa; color: #333333; padding: 3px 7px 3px 6px; border-top: 1px solid #CCCCCC; border-right: 1px solid #333333; border-bottom: 1px solid #333333; border-left: 1px solid #CCCCCC; margin-top: 5px; border-radius: 5px; width: 10px; }',
                head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');

                style.type = 'text/css';
                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                } else {
                    style.appendChild(document.createTextNode(css));
                }

                head.appendChild(style);


                //Add the Link to the Infowindow Popups
                aEmptyLink = domConstruct.create("a", {
                    "class": "action emptylink",
                    "id": "inforEmptyLink",
                    "innerHTML": "<br><br>", //text that appears in the popup for the link
                    "href": ""                  
                }, query(".actionList", this.map.infoWindow.domNode)[0]);

                aLink = domConstruct.create("a", {
                    "class": "action mylink",
                    "id": "inforLink",
                    "innerHTML": "Create Work Order", //text that appears in the popup for the link
                    "href": "javascript: void(0);",
                    "feat_id": "{GISOBJID}",
                    "style": "text-decoration: none; background-color: #cfe5fa; color: #333333; padding: 3px 7px 3px 6px; border-top: 1px solid #CCCCCC; border-right: 1px solid #333333; border-bottom: 1px solid #333333; border-left: 1px solid #CCCCCC; margin-top: 5px; border-radius: 5px; width: 10px;margin-bottom: 5px;"
                }, query(".actionList", this.map.infoWindow.domNode)[0]);

                aEmptyLink2 = domConstruct.create("a", {
                    "class": "action emptylink2",
                    "id": "inforEmptyLink",
                    "innerHTML": "<br><br>", //text that appears in the popup for the link
                    "href": ""
                }, query(".actionList", this.map.infoWindow.domNode)[0]);

                //when the link is clicked register a function that will run
                on(aLink, "click", this.SubmitWorkOrder);

                //get List of Feature Classes / Types from Config
                self.inforConfig = json.parse(InforConfig)
                self.inforFeatureClassNames = self.inforConfig.inforFeatureClassNames;
                self.inforClassTypes =self.inforConfig.inforClassTypes;
                self.inforStreetNames = self.inforConfig.inforStreetNames;
                self.inforAssetTypes = self.inforConfig.inforAssetTypes;



                //Connect to the Selection Change Event of the popup - this will allow us to get the feature and modify the infowindow layout
                //dojo.connect(this._Map.infoWindow, "selection-change", function (e) {
                dojo.connect(this.map.infoWindow, "onSelectionChange", function (e) {
                    //this_.Map
                    //console.log("test info")

                    //aLink = document.getElementById("inforLink");                   

                    var feat = this.map.infoWindow.getSelectedFeature();

                    //var oGISOBJID = ''
                    //oGISOBJID = feat.attributes.GISOBJID

                    //console.log("GISOBJID:" + feat.attributes.GISOBJID)
                 
                    //if (feat && feat._layer && feat._layer.name === "Gravity Main") { //Old Method, now, search in Array from Config
                    if (feat && feat._layer && self.inforFeatureClassNames.indexOf(feat._layer.name) > -1 && feat.attributes.GISOBJID) {
                        domStyle.set(query(".actionList > .action.mylink", this.map.infoWindow.domNode)[0], "display", "");
                        domStyle.set(query(".actionList > .action.emptylink", this.map.infoWindow.domNode)[0], "display", "");
                        domStyle.set(query(".actionList > .action.emptylink2", this.map.infoWindow.domNode)[0], "display", "");
                    } else {
                        domStyle.set(query(".actionList > .action.mylink", this.map.infoWindow.domNode)[0], "display", "none");
                        domStyle.set(query(".actionList > .action.emptylink", this.map.infoWindow.domNode)[0], "display", "none");
                        domStyle.set(query(".actionList > .action.emptylink2", this.map.infoWindow.domNode)[0], "display", "none");
                    }


                    ////If Feature Type is a certin Type.....
                    ////Get Name of Layer
                    //lyrName = feature._layer.name                    

                    //if (aLink == null) { //Check if Link already exists
                    //    if (lyrName == 'Pressurized Main') { //TODO Add a List of Possible Feature Classes

                    //        //TODO  - Replace with the Event Driven Creation of the Link

                    //    }
                    //}
                    //else {
                    //    var element = document.getElementById("inforLink");
                    //    element.parentNode.removeChild(element);

                    //} //Destroy it
                    



                })


            }
            , SubmitWorkOrder: function(evt) {

                //Check if there is a GISOBJID!!
                var feature = mapHandler.map.infoWindow.getSelectedFeature();

                if (feature.attributes.GISOBJID) {
                    console.log("UTIL ID:" + feature.attributes.GISOBJID)
                } else {
                    window.alert("Please select a feature with a GISOBJID")
                    return;
                }

                gisobjid = feature.attributes.GISOBJID
                systemCode = feature.attributes.SYSTEMCODE
                var fcName = feature._layer.name


                //-----Added 6/5/2017 - Get Asset Type from Feature
                //var typeList = [{ "fcName": "Clean Out", "code": "CLNOUT" }, { "fcName": "Control Valve", "code": "CV" }, { "fcName": "Gravity Main", "code": "GMAINS" }, { "fcName": "Lateral Line", "code": "LTRL" }, { "fcName": "Manhole", "code": "MH" }, { "fcName": "Network Structure", "code": "STR" }, { "fcName": "Pressurized Main", "code": "PMAINS" }, { "fcName": "System Valve", "code": "SV" }, { "fcName": "Thrust Protection", "code": "THRST" }, { "fcName": "Underground Enclosure", "code": "ENCLR" }, { "fcName": "Water Structure", "code": "WSTR" }, { "fcName": "wHydrant", "code": "HYD" }, { "fcName": "wLateralLine", "code": "LTRL" }, { "fcName": "wMeter", "code": "MTR" }, { "fcName": "wCurbStop", "code": "CSTOP" }, { "fcName": "rReclaimedLine", "code": "PMAINS" }]

                function getInforAssetType(inFCName,ainforAssetTypes) {
                    return ainforAssetTypes.filter(function (ainforAssetTypes) {
                        return ainforAssetTypes.type == inFCName
                    })
                }

                

                fcType = getInforAssetType(fcName, self.inforAssetTypes);
                if (fcType.length > 0) {
                    assetType = fcType[0].value
                } else {
                    assetType = ""
                }

                //-----Added 6/5/2017 - Get Asset Type from Feature



                //Added 6/14/2017 - Get Potential Addresses

                //Get Point Clicked 
                mapPoint = mapHandler.map.infoWindow.location //Point

                //Make a FeatureSet
                var graphic = new Graphic(mapPoint);
                var features= [];
                features.push(graphic);
                var featureSet = new FeatureSet();
                featureSet.features = features;

                
                addressLookupTaskURL = self.inforConfig.addressLookupTaskURL

                gp = new esri.tasks.Geoprocessor(addressLookupTaskURL);
               // document.body.style.cursor = "wait";

                self.OpenWaitDialog();
                var params = { "InputPoint": featureSet };
                gp.submitJob(params, lang.hitch(this, function (jobInfo) {
                    
                    //Do Something with the results
                    if (jobInfo.jobStatus == "esriJobSucceeded") {
                        var jobid = jobInfo.jobId;

                        gp.getResultData(jobid, "OutputAddresses", lang.hitch(this, function (jsonresult) {
                            console.log(jsonresult.value)
                            addresses = jsonresult.value;

                            addresses.unshift({ "address": "No Address", "houseNumber": "", "street": "" })

                            addresses.unshift({ "address": "--Select Address--", "houseNumber": "", "street": "" })
                            //Use the Result JSON to bind to send to the Submit Dialog
                            //Open Dialog to Get Parameters to Pass to
                            document.body.style.cursor = "default";
                            self.waitDialog.hide();
                            self.OpenSubmitDialog(gisobjid, assetType, addresses);


                        }
                        ));
                        //OutputAddresses
  
                     };

                }));
                



                //<Changed 2/23/2017>
                //Subtype is not needed, rather,  a code based on the feature type. 

                //var typeList = [{ "fcName": "Clean Out", "code": "CLNOUT" }, { "fcName": "Control Valve", "code": "CV" }, { "fcName": "Gravity Main", "code": "GMAINS" }, { "fcName": "Lateral Line", "code": "LTRL" }, { "fcName": "Manhole", "code": "MH" }, { "fcName": "Network Structure", "code": "STR" }, { "fcName": "Pressurized Main", "code": "PMAINS" }, { "fcName": "System Valve", "code": "SV" }, { "fcName": "Thrust Protection", "code": "THRST" }, { "fcName": "Underground Enclosure", "code": "ENCLR" }, { "fcName": "Water Structure", "code": "WSTR" }, { "fcName": "wHydrant", "code": "HYD" }, { "fcName": "wLateralLine", "code": "LTRL" }, { "fcName": "wMeter", "code": "MTR" }, { "fcName": "wCurbStop", "code": "CSTOP" }, { "fcName": "rReclaimedLine", "code": "PMAINS" }]

                //function getInforCode(inFCName) {
                //    return typeList.filter(function (typeList) {
                //        return typeList.fcName == inFCName
                //    })
                //}

                //fcType = getInforCode(fcName);
                //if (fcType.length > 0) {
                //    subType = fcType[0].code
                //} else {
                //    subType = ""
                //}

                //  Get the Array of subTypes for the layer
                //  subTypes = JSON.parse(feature._layer._json).types;
                //subType = "";
                //for (var i in subTypes) {
                //   if (subTypes[i].id == subTypeID) { subType = subTypes[i].name };
                // }

                //  { "GISOBJID":"226496", "SystemCode":"C-MW", "SubTypeCode":"Cleanout", "Description":"New Test WorkOrder" }




               

                ///window.alert("GISOBJID" + gisobjid)


                //------------OLD SSA CODE
              //  function Get(yourUrl) {
              //      var Httpreq = new XMLHttpRequest(); // a new request
              //      Httpreq.open("GET", yourUrl, false);
              //      Httpreq.send(null);
              //      return Httpreq.responseText;
              //  }

              //  //Check if there is a GISOBJID!!
              //  var feature = mapHandler.map.infoWindow.getSelectedFeature();

              //  if (feature.attributes.GISOBJID) {
              //      console.log ("UTIL ID:" + feature.attributes.GISOBJID)
              //  } else {
              //      window.alert("Please select a feature with a GISOBJID")
              //      return;
              //  }

              //  gisobjid = feature.attributes.GISOBJID
              //  systemCode = feature.attributes.SYSTEMCODE
              //  var fcName = feature._layer.name

              //  //<Changed 2/23/2017>
              //  //Subtype is not needed, rather,  a code based on the feature type. 

              //  var typeList = [{ "fcName": "Clean Out", "code": "CLNOUT" }, { "fcName": "Control Valve", "code": "CV" }, { "fcName": "Gravity Main", "code": "GMAINS" }, { "fcName": "Lateral Line", "code": "LTRL" }, { "fcName": "Manhole", "code": "MH" }, { "fcName": "Network Structure", "code": "STR" }, { "fcName": "Pressurized Main", "code": "PMAINS" }, { "fcName": "System Valve", "code": "SV" }, { "fcName": "Thrust Protection", "code": "THRST" }, { "fcName": "Underground Enclosure", "code": "ENCLR" }, { "fcName": "Water Structure", "code": "WSTR" }, { "fcName": "wHydrant", "code": "HYD" }, { "fcName": "wLateralLine", "code": "LTRL" }, { "fcName": "wMeter", "code": "MTR" }, { "fcName": "wCurbStop", "code": "CSTOP" }, { "fcName": "rReclaimedLine", "code": "PMAINS" }]

              //  function getInforCode(inFCName) {
              //      return typeList.filter(function (typeList) {
              //          return typeList.fcName == inFCName
              //      })
              //  }

              //  fcType = getInforCode(fcName);
              //  subType = fcType[0].code;




              ////  subTypeID = feature.attributes.SUBTYPE

              //////  Get the Array of subTypes for the layer
              ////  subTypes = JSON.parse(feature._layer._json).types;
              ////  subType = "";
              ////  for (var i in subTypes) {
              ////      if (subTypes[i].id == subTypeID) { subType = subTypes[i].name };
              ////  }
                

              //  //  { "GISOBJID":"226496", "SystemCode":"C-MW", "SubTypeCode":"Cleanout", "Description":"New Test WorkOrder" }

              //  //Open Dialog to Get Parameters to Pass to
              //  self.OpenSubmitDialog(gisobjid);

              //  ///window.alert("GISOBJID" + gisobjid)
            }


            , OpenWaitDialog: function () {

                var waitDialogHTML = '<div class="submitAreas"> <table> ' +
                    '<tr><td><img src="assets/loading.gif" style="display: block;margin: auto;"></td></tr>' +
                    '<tr> <td>Please Wait. Verifying Addresses...</td></tr></table> </div>';


                if (!this.waitDialog) {
                    // CREATE DIALOG
                    this.waitDialog = new dijit.Dialog({
                        title: "Verify Addresses",
                        content: waitDialogHTML,
                        class: "workOrderDlg"
                    });

                    this.waitDialog.startup();


                    on (this.waitDialog, "hide", lang.hitch(this, function(){
                        console.log ("Dialog closed");
                        this.waitDialog.destroyRecursive();
                        this.waitDialog = null;
                    }));

                    // DISPLAY DIALOG

                    self.waitDialog.show();
                }
            }

            , OpenSubmitDialog: function(gisobjid, assetType, inAddresses){
                //Opens a Modal Dialog window for the user to select the properties for the Infor Integratio


                var txtInforDescDIVid = "txtDesc"
                var buttonSubmitDIVid = "btnSubmit"
                var buttonCancelDIVid = "btnCancel"
                var chkInforNoAddress = "chkInforNoAddress"
                var selInforAddress = "selInforAddress"
                var selInforClass = "selInforClass"
                var txtInforEmpIdtxtInforUserName = "txtInforEmpIdtxtInforUserName"
                var txtInforEmpId = "txtInforEmpId"
                var txtInforUserName = "txtInforUserName"
                


                var submitDialogHTML = '<div class="waitAreaHidden" id="waitAreaDiv"><img src="assets/loading.gif" style="display: block;margin: auto;"></div><div class="submitAreas"> <table> ' +
				'<tr> <td>User Name:</td><td><div id="' + txtInforUserName + '"></div></td><td><div id="' + txtInforEmpId + '" style="visibility: hidden;width: 0px;"></div></td></tr> ' +
				'<tr> <td>GISOBJID :</td><td><div>' + gisobjid + '</div></td> </tr>' +
				'<tr> <td>Asset Type :</td><td><div>' + assetType + '</div></td> </tr>' +
				'<tr> <td>Workorder Class :</td><td><div id="' + selInforClass + '"></div></td> </tr>' +
				'<tr> <td>Select an Address :</td><td><div id="' + selInforAddress + '"></div></td> </tr>' +
				'<tr> <td><div id="' + chkInforNoAddress + '"></div></td> </tr>' +
                '</table></div>' +
                '<div id="submitStatusDiv" class="submitAreasHidden"> ' +
                '<div id="resultStatusString" style="text-align:center;font-weight:bold"></div></div>' +
                '<div class="submitAreas"><table style="width: 100%;"> ' +
                '<tr> <td align="center"><div id="' + buttonSubmitDIVid + '"></div></td>' +
                '<td align="center"><div id="' + buttonCancelDIVid + '"></div></td> </tr> </table> </div>';



                //var submitDialogHTML = '<div class="submitAreas"> <table> <tr> <td>GISOBJID :</td><td><div>' + gisobjid + '</div></td> </tr>' +
                //'<tr> <td>Description:</td><td><div id="' + txtInforDescDIVid + '"></div></td> </tr> </table></div>' +
                //'<div id="submitStatusDiv" class="submitAreasHidden"><div id="resultStatusString" style="text-align:center;font-weight:bold"></div></div><div class="submitAreas"><table style="width: 100%;"> <tr> <td align="center"><div id="' + buttonSubmitDIVid + '"></div></td><td align="center"><div id="' + buttonCancelDIVid + '"></div></td> </tr> </table> </div>';

                //var submitDialogHTML = '<div class="submitAreas"> <table> <tr> <td><div class="submitAreas"><table style="width: 100%;"> <tr> <td align="center"><div id="' + buttonPrintDIVid + '"></div></td><td align="center"><div id="' + buttonCancelDIVid + '"></div></td> </tr> </table> </div>'

                

                //              //Content for Controls

               





//                var aItems = [
//                    { label: 'MyValue1', value: 'MyValue1'},
//                    { label: 'MyValue2', value: 'MyValue2'},
//                    { label: 'MyValue3', value: 'MyValue3'}
//                ];
//                var aItems2 = [
//                    { label: 'MyValue4',value: 'MyValue4'},
//                    { label: 'MyValue5', value: 'MyValue5'}
//
//                ];

                if (!this.submitDialog) {
                    // CREATE DIALOG
                    this.submitDialog = new dijit.Dialog({
                        title: "Submit Work Order Plans",
                        content: submitDialogHTML,
                        class: "workOrderDlg"
                    });

                    this.submitDialog.startup();


                    on (this.submitDialog, "hide", lang.hitch(this, function(){
                        console.log ("Dialog closed");
                        this.submitDialog.destroyRecursive();
                        this.submitDialog = null;
                    }));


                    //Print Selections
//                    var valueSelector1 = new Select({
//                        options: aItems
//                    }, selItemDIVid).startup();
//
//                    var valueSelector2 = new Select({
//                        options: aItems2
                    //                    }, selItem2DIVid).startup();


                    // create store instance referencing data from states.json
                    var woClassStore = new DstoreAdapter(new Memory({
                        idProperty: "code",
                        data: self.inforClassTypes
                    })
);

                    //User Name Text Box
                    //User Enters Username for Infor. Text is validated against Infor
                    //------------------------------------------------------
                    var userNameTextBox = new ValidationTextBox({
                        name: "UserName",
                        maxlength: 20,
                        value: "" /* no or empty value! */,
                        placeholder: "Enter Infor Username",
                        invalidMessage:'Invalid Infor User Name.',
                        validator: function (value, constraints) {
                            //Only check if value is nto empty
                            if (value == '') {
                                return false;
                            } else {
                                return true;
                            }
                            //inforGetResult = self.GetInforEmployeeID();

                            ////Temp = Read Args
                            //inforGetResult.then(function (reponse) {



                            //    if (reponse == "ERROR") {
                            //        //todo: Clear Text for Storing User Name
                            //        return false;
                            //    }
                            //    else {
                            //        inforEmployeeID = reponse;

                            //        //TODO Update Text for storing UserName
                            //        document.getElementById('txtInforEmpId').innerHTML = inforEmployeeID
                            //        return true;
                            //    }
                            //})
                                                   
                        
                        },
                        onBlur: function () {
                            //Get Employee ID
                            inputValue = dijit.byId('txtInforUserName').value;
                            inforGetResult = self.GetInforEmployeeID(inputValue);

                            //Temp = Read Args
                            inforGetResult.then(function (response) {

                            returnVal = JSON.parse(response)

                            if (returnVal == "There is no row at position 0." || returnVal == "Value cannot be null.\r\nParameter name: value") {
                                //Update Text for storing UserName
                                document.getElementById('txtInforEmpId').innerHTML = '';
                                var textBox = dijit.byId("txtInforUserName");
                                dijit.showTooltip(
                                    textBox.get("invalidMessage"),
                                    textBox.domNode,
                                    textBox.get("tooltipPosition"),
                                    !textBox.isLeftToRight()
                                );


                                return false;
                            }
                            else {
                                inforEmployeeID = returnVal;

                                //Update Text for storing UserName
                                document.getElementById('txtInforEmpId').innerHTML = inforEmployeeID;
                               // userNameTextBox.validator = 'true';
                                return true;
                            }
                        })
                                                   
                        
                    }
                        
                    }, txtInforUserName);


                    //TODO: Put a wait cursor over dialog?

                    //Addresses
                    ///TODO : Find Addresses : Use a GP Service from the input point to determine addresses before opening the dialog
                    //Create a Store for the Json
                    var addressStore = new DstoreAdapter(new Memory({
                        idProperty: "address",
                        data: inAddresses
                    }));


                    var selAddress = new Select({
                        name: "inforAddressSelect",
                        id: "inforAddressSelect",
                        store: addressStore,
                        placeHolder: "Select Address",
                        style: "width: 200px;",
                        labelAttr: "address",
                        maxHeight: -1, // tells _HasDropDown to fit menu within viewport
                        onSetStore: function () {
                            this.options[0].disabled = true
                        },
                        onClick: function () {
                            dijit.byId('btnSubmit').cancel();
                        }
                    }, selInforAddress).startup();


                    //Workorder Class Selection Control

                    var selWorkOrderClass = new Select({
                        name: "inforClassSelect",
                        id: "inforClassSelect",
                        store: woClassStore,
                        placeHolder: "Select Workorder Class",
                        style: "width: 200px;",
                        labelAttr: "class",
                        maxHeight: -1, // tells _HasDropDown to fit menu within viewport
                        onSetStore: function() {
                            this.options[0].disabled = true
                        },
                        onClick: function () {
                            dijit.byId('btnSubmit').cancel();
                        }
                    }, selInforClass).startup();
       



                    //SJH  - 5/24/2017 - Not Used - No Description Captured
                    //------------------------------------------------------
                    //var notesTextBox = new TextArea({
                    //    name: "Description",
                    //    maxlength: 200,
                    //    value: "" /* no or empty value! */,
                    //    placeholder: "(Max 200 Chars.)"
                    //}, txtInforDescDIVid);
                    //------------------------------------------------------

                    var btnCancel = new Button({
                        label: "Cancel",
                        class: "printBtn",
                        onClick:  lang.hitch(this, function (){

                            //dijit.byId('btnPrint' + img_id + 'Busy').cancel();

                            //Close the Dialog
                            self.submitDialog.hide();
                        })
                    }, buttonCancelDIVid).startup();

                    var btnSubmit = new BusyButton({
                        label: "Submit Request",
                        busyLabel: "Submitted",
                        class: "submitBtn",
                        style: "width: 60px",
                        onClick: lang.hitch(this, function () {

                            //Get the Printing Parameters, Orientation, Notes, Layout

                            /*                      var myval1 = dijit.byId(selItemDIVid).value
                                                  var myval2 = dijit.byId(selItem2DIVid).value*/


                            //Get Identity
                            //console.log(IdentityManager.credentials[0].userId)
                            //var login = IdentityManager.credentials[0].userId
                            //Edit 2/15/2017 - Leaving out the Login, 
                            //On Prod for Charles County, uses IIS Authentication, may need a proxy or ASP page to acquire authenticated user
                            login = document.getElementById('txtInforEmpId').innerHTML //Get from dijit
							if (login == '') {
								window.alert("Please provide an Infor User Name.")
                                dijit.byId('btnSubmit').cancel();
                                return;
								
							}
							
                            //Get the Selected Workorder Class - Added 5/24/2017
                            var woClass = dijit.byId("inforClassSelect").attr('displayedValue')
                            if (woClass == "--Select Workorder Class--") {
                                window.alert("Please select a Workorder Class")
                                dijit.byId('btnSubmit').cancel();
                                return;
                            }
                            var woCode = dijit.byId("inforClassSelect").attr('value')

                            //Get the Address:
                            var inforAddress = dijit.byId("inforAddressSelect").attr('displayedValue')
                            if (inforAddress == "--Select Address--") {
                                

                                window.alert("Please select an Address")
                                dijit.byId('btnSubmit').cancel();
                                return;
                            }
                            else if (inforAddress == 'No Address') {
                                //Infor Allows Empty Addresses
                            }

                            addressData = dijit.byId("inforAddressSelect").store.store.data
                            
                            houseNumber = ""
                            streetName = ""

                            //Find Address in Array
                            for (var i = 0; i < addressData.length; i++) {
                                if (addressData[i].address == inforAddress) {
                                    houseNumber = addressData[i].houseNumber
                                    streetName = addressData[i].street
                                }
                            }

                            //var woCode = dijit.byId("inforAddressSelect").attr('value')




                            //Always pass Description, but don't require user to input one
                            //SJH  - 5/24/2017 - Not Used - No Description Captured
                            //------------------------------------------------------
                            //var desc = dijit.byId(txtInforDescDIVid).value
                            var desc = ''
                            if (desc == '' || desc == ' ') {
                                desc = "Not Specified"
                            };
                            //SJH  - 5/24/2017 - Not Used - No Description Captured
                            //------------------------------------------------------

                            //Don't Require Description-- Changed 3/1/2017
                            // var desc = dijit.byId(txtInforDescDIVid).value




                            //Create JSON To Pass to the Infor Work Order System
                            //{ "GISOBJID":"226496", "SystemCode":"C-MW", "SubTypeCode":"Cleanout", "Description":"New Test WorkOrder" }
							//6/16/2017 - Switched woClass and woCode 
                            textParams = '{"GISOBJID": "' + gisobjid + '",' +
                                '"EmployeeID": "' + login + '",' +
                                '"Class": "' + woClass + '",' +
                                '"ClassCode": "' + woCode + '",' +
								'"Description": "' + desc + '",' + 
                                '"HouseNumber": "' + houseNumber + '",' +
                                '"StreetName": "' + streetName + '"}'

                            //textParams = '{"GISOBJID": "' + gisobjid + '",' +
                            //    '"SystemCode": "' + systemCode + '",' +
                            //    '"SubTypeCode": "' + subType + '",' +
                            //    '"Description": "' + desc + '",' +
                            //    '"Login": "' + login + '"}'


                            params = json.parse(textParams)

                            //window.alert("Submitting the Work Order Request will send the selected parameters to the service that connects to Infor:\n" +
                            //    "GISOBJID:" + gisobjid + "\n" +
                            //    "SystemCode:" + systemCode + "\n" +
                            //    "SubTypeCode: " + subType + "\n" +
                            //    "Description:" + desc + "\n" +
                            //    "Login:" + login
                            //)

                            console.log(params)

                            ///Temporary Post Request, until Workorder Creation Component Installed
                            httpRequest = new XMLHttpRequest();

                            httpRequest.open('POST', 'http://a3-gistest.ccgdom.gov/GISInforConnector/api/workorder', true);
                            ///test another return code:
                            // httpRequest.open('POST', 'https://httpbin.org/status/418', true);
							
							//Show Waiting DIV
							//document.getElementById("waitAreaDiv").className = "waitArea"

                            httpRequest.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
                            httpRequest.setRequestHeader('SecurityHeaderKey', 'UvdaRZvtqzXGBqfgVoXCjpi6qUABLhDFfNANQTdPDxmKaUnZtK');
                            httpRequest.setRequestHeader('SecurityHeaderSecret', 'KHuMjshgpoDdjNghDfCoTieoDyKBroEgYBjmZtQ7nowzRNqmoT');


                            httpRequest.onreadystatechange = function () {
                                if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
                                    console.log(httpRequest.responseText);

                                    //Do Not Enable Button
                                    // dijit.byId('btnSubmit').cancel();
									
									//Hide Waiting DIV
									//document.getElementById("waitAreaDiv").className = "waitAreaHidden"

                                    //Change "Cancel" to Close
                                    dijit.byId('btnCancel').set('label', "Close")

                                    //Show DIV for Status - submitStatusDiv
                                    document.getElementById("submitStatusDiv").className = "submitAreas"
                                    //Update Text
									workOrderId = httpRequest.responseText
                                    document.getElementById('resultStatusString').innerHTML = "Work Order Sucessfully Submitted <p> Work Order ID: " + workOrderId
									



                                }
                                else if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status != 200) {
                                    console.log(httpRequest.responseText);

                                    //Keep The Dialog Open, But Change It
                                    dijit.byId('btnSubmit').cancel();

                                    //Change "Cancel" to Close
                                    dijit.byId('btnCancel').set('label', "Close")

                                    //Show DIV for Status - submitStatusDiv
                                    document.getElementById("submitStatusDiv").className = "submitAreas"
                                    //Update Text
                                    document.getElementById('resultStatusString').innerHTML = "Error submitting workorder: " + httpRequest.responseText

                                }

                            };


                            httpRequest.send(JSON.stringify(params));

                            //Close the Dialog
                            //self.submitDialog.hide();

                        })
                    }, buttonSubmitDIVid).startup();



                    // DISPLAY DIALOG

                        self.submitDialog.show();
                    }
                    else {
                        self.submitDialog.show();
                    }

            }

            , GetInforEmployeeID: function (inUserName) {
                //Use the User name to make a call to the Infor Connector to get back the Employtee ID
                //var def = new Deferred();
                return new Promise(function(resolve, reject) {
                    httpRequest = new XMLHttpRequest();
                    //httpRequestURL = "https://httpbin.org/get?user=" + inUserName //FOR TESTING
                    httpRequestURL = 'http://a3-gistest.ccgdom.gov/GISInforConnector/api/employeelookup?user=' + inUserName //At COUNTY

                    httpRequest.open('GET', httpRequestURL, true);

                    //httpRequest.setRequestHeader("user", "strobest");

                    httpRequest.onreadystatechange = function () {
                        if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
                            console.log(httpRequest.responseText);

                            //Do Not Enable Button
                            // dijit.byId('btnSubmit').cancel();

                            ////Change "Cancel" to Close
                            //dijit.byId('btnCancel').set('label', "Close")

                            ////Show DIV for Status - submitStatusDiv
                            //document.getElementById("submitStatusDiv").className = "submitAreas"
                            ////Update Text
                            //document.getElementById('resultStatusString').innerHTML = "Work Order Sucessfully Submitted"
                            resolve(httpRequest.responseText);


                        }
                        else if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status != 200) {
                            console.log(httpRequest.responseText);


                            reject(Error("Network Error"));
                            ////Keep The Dialog Open, But Change It
                            //dijit.byId('btnSubmit').cancel();

                            ////Change "Cancel" to Close
                            //dijit.byId('btnCancel').set('label', "Close")

                            ////Show DIV for Status - submitStatusDiv
                            //document.getElementById("submitStatusDiv").className = "submitAreas"
                            ////Update Text
                            //document.getElementById('resultStatusString').innerHTML = "Error submitting workorder: " + httpRequest.responseText

                        }

                    };


                    httpRequest.send();

                });

            }

            , ReSubmit: function () {
                //If user already submitted a Workorder, update the dialog upon a change...?


            }

            /*            , HandleResponse: function(){
                    if (httpRequest.readyState === XMLHttpRequest.DONE) {
                        if (httpRequest.status === 200) {
                            // what to do if successful
                        } else if (httpRequest.status === 401) {
                            // what to do if bad security secret or key
                        } else if (httpRequest.status === 404) {
                            // what to do if server replies not found
                        } else if (httpRequest.status === 500) {
                            // what to do if server replies internal server error
                        } else {
                            // what to do if there is a different kind of problem
                        }
                    }



            }*/
        });
    });