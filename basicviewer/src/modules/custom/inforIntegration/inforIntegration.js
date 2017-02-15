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
             SimpleRenderer, Color, BusyButton, Button, ToggleButton, Select, TextArea,TextBox, Memory, Trackable, TreeStoreMixin, OnDemandGrid, Tree, Selection, on, query, Map, HomeButton, dom, dojoNum, move, Dialog, FloatingPane, TabContainer, AttributeTable
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
            , _self: null
            , submitDialog: null


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

                _self = this;

                //TODO  - Replace with the Event Driven Creation of the Link
                //Add the Link to the Infowindow Popups
                var link = domConstruct.create("a",{
                    "class": "action",
                    "id": "inforLink",
                    "innerHTML": "<br>Create Work Order", //text that appears in the popup for the link
                    "href": "javascript: void(0);",
                    "feat_id" : "{GISOBJID}"
                }, query(".actionList", this.map.infoWindow.domNode)[0]);

                //when the link is clicked register a function that will run
                on(link, "click", this.SubmitWorkOrder);

            }
            , SubmitWorkOrder: function(evt) {

                //Check if there is a GISOBJID!!
                var feature = mapHandler.map.infoWindow.getSelectedFeature();

                if (feature.attributes.UTIL_ID) {
                    console.log ("UTIL ID:" + feature.attributes.GISOBJID)
                } else {
                    window.alert("Please select a feature with a GISOBJID")
                    return;
                }

                gisobjid = feature.attributes.GISOBJID
                systemCode = feature.attributes.SYSTEMCODE
                subType = feature.attributes.SUBTYPE

                //  { "GISOBJID":"226496", "SystemCode":"C-MW", "SubTypeCode":"Cleanout", "Description":"New Test WorkOrder" }

                //Open Dialog to Get Parameters to Pass to
                _self.OpenSubmitDialog(gisobjid);

                ///window.alert("GISOBJID" + gisobjid)
            }

            , OpenSubmitDialog: function(gisobjid){
                //Opens a Modal Dialog window for the user to select the properties for the Infor Integratio


                var txtInforDescDIVid = "txtDesc"
                var buttonSubmitDIVid = "btnSubmit"
                var buttonCancelDIVid = "btnCancel"

                var submitDialogHTML = '<div class="submitAreas"> <table> <tr> <td>GISOBJID :</td><td><div>'+ gisobjid +'</div></td> </tr>' +
                '<tr> <td>Description:</td><td><div id="' + txtInforDescDIVid + '"></div></td> </tr> </table></div>' +
                '<div id="submitStatusDiv" class="submitAreasHidden"><div id="resultStatusString" style="text-align:center;font-weight:bold"></div></div><div class="submitAreas"><table style="width: 100%;"> <tr> <td align="center"><div id="' + buttonSubmitDIVid + '"></div></td><td align="center"><div id="' + buttonCancelDIVid + '"></div></td> </tr> </table> </div>';


                //var submitDialogHTML = '<div class="submitAreas"> <table> <tr> <td><div class="submitAreas"><table style="width: 100%;"> <tr> <td align="center"><div id="' + buttonPrintDIVid + '"></div></td><td align="center"><div id="' + buttonCancelDIVid + '"></div></td> </tr> </table> </div>'

//                //Content for Controls
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

                    var notesTextBox = new TextArea({
                        name: "Description",
                        maxlength: 200,
                        value: "" /* no or empty value! */,
                        placeholder: "(Max 200 Chars.)"
                    }, txtInforDescDIVid);


                    var btnCancel = new Button({
                        label: "Cancel",
                        class: "printBtn",
                        onClick:  lang.hitch(this, function (){

                            //dijit.byId('btnPrint' + img_id + 'Busy').cancel();

                            //Close the Dialog
                            _self.submitDialog.hide();
                        })
                    }, buttonCancelDIVid).startup();

                    var btnSubmit = new BusyButton({
                        label: "Submit Request",
                        busyLabel: "Submitted",
                        class: "submitBtn",
                        style: "width: 60px",
                        onClick: lang.hitch(this, function() {

                            //Get the Printing Parameters, Orientation, Notes, Layout

      /*                      var myval1 = dijit.byId(selItemDIVid).value
                            var myval2 = dijit.byId(selItem2DIVid).value*/
                            var desc = dijit.byId(txtInforDescDIVid).value

                            //Get Identity
                            //console.log(IdentityManager.credentials[0].userId)
                            //var login = IdentityManager.credentials[0].userId
                            //Edit 2/15/2017 - Leaving out the Login, 
                            //On Prod for Charles County, uses IIS Authentication, may need a proxy or ASP page to acquire authenticated user
                            login = ""

                            //Create JSON To Pass to the Infor Work Order System
                            //{ "GISOBJID":"226496", "SystemCode":"C-MW", "SubTypeCode":"Cleanout", "Description":"New Test WorkOrder" }
                            textParams = '{"GISOBJID": "' + gisobjid  + '",' +
                                '"SystemCode": "' + systemCode  + '",' +
                                '"SubTypeCode": "' + subType  + '",' +
                                '"Description": "' + desc  + '",' +
                                '"Login": "' + login + '"}'

                            params = json.parse(textParams)

                            //window.alert("Submitting the Work Order Request will send the selected parameters to the service that connects to Infor:\n" +
                            //    "GISOBJID:" + gisobjid + "\n" +
                            //    "SystemCode:" + systemCode + "\n" +
                            //    "SubTypeCode: " + subType + "\n" +
                            //    "Description:" + desc + "\n" +
                            //    "Login:" + login
                            //)

                            console.log (params)

                            ///Temporary Post Request, until Workorder Creation Component Installed
                            httpRequest = new XMLHttpRequest();

                            httpRequest.open('POST', 'https://httpbin.org/post', true);
                            ///test another return code:
                            // httpRequest.open('POST', 'https://httpbin.org/status/418', true);

                            httpRequest.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
                            httpRequest.setRequestHeader('APISECRET', 'secret we agree on');
                            httpRequest.setRequestHeader('APIKEY', 'key we agree on');

                            httpRequest.onreadystatechange = function () {
                                if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
                                    console.log(httpRequest.responseText);

                                    //Do Not Enable Button
                                   // dijit.byId('btnSubmit').cancel();

                                    //Change "Cancel" to Close
                                    dijit.byId('btnCancel').set('label', "Close")

                                    //Show DIV for Status - submitStatusDiv
                                    document.getElementById("submitStatusDiv").className = "submitAreas"
                                    //Update Text
                                    document.getElementById('resultStatusString').innerHTML = "Work Order Sucessfully Submitted"
                                    


                                }
                                else if(httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status != 200)
                                {
                                    console.log(httpRequest.responseText);

                                    //Keep The Dialog Open, But Change It
                                    dijit.byId('btnSubmit').cancel();

                                    //Change "Cancel" to Close
                                    dijit.byId('btnCancel').set('label', "Close")

                                    //Show DIV for Status - submitStatusDiv
                                    document.getElementById("submitStatusDiv").className = "submitAreas"
                                    //Update Text
                                    document.getElementById('resultStatusString').innerHTML = "Error submitting workorder: " + httpRequest.status

                                }

                            };


                            httpRequest.send(JSON.stringify(params));

                            //Close the Dialog
                            //_self.submitDialog.hide();

                        })
                    }, buttonSubmitDIVid).startup();



                    // DISPLAY DIALOG

                    _self.submitDialog.show();
                }
                else {
                    _self.submitDialog.show();
                }

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