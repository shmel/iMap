/**
 Creates an ESRI basemaps dijit.
 Also contains a function to recreate an overview map (apparently needed when basemap is switched).
 */
define(["dojo/_base/declare", "dijit/_WidgetBase", "dojo/_base/lang", "dojo/topic", "./utilities/maphandler", "dijit/layout/ContentPane"
    , "dijit/Menu", "esri/dijit/BasemapGallery", "dijit/registry", "dojo/aspect" /*, "./custommenu"*/
    , "dijit/form/DropDownButton", "dojo/dom", "dojo/dom-construct", "esri/dijit/BasemapLayer"],
    function(declare, WidgetBase, lang, topic, mapHandler, ContentPane, Menu, BasemapGallery, registry, aspect /*, custommenu*/
        , DropDownButton, dom, domConstruct, BasemapLayer){
        return declare([WidgetBase, DropDownButton], {
            // The ESRI map object to bind to the TOC. Set in constructor
            map: null,
            //The application configuration properties (originated as configOptions from app.js then overridden by AGO if applicable)
            AppConfig: null,

            //*** Create the basemap gallery
            constructor: function(args) {
                // safeMixin automatically sets the properties above that are passed in from the toolmanager.js
                declare.safeMixin(this,args);
                // mapHandler is a singleton object that you can require above and use to get a reference to the map.
                this.map = mapHandler.map;
            }

            , postCreate: function () {
                this.inherited(arguments);
                /*if (this.AppConfig.embed)
                    this._addBasemapGalleryMenu();
                else*/
                    this._addBasemapGallery();
            }

            //Add the basemap gallery widget to the application.
            , _addBasemapGallery: function () {
                //if a basemap group was specified listen for the callback and modify the query
                var basemapGroup = null;
                if (this.AppConfig.basemapgroup.title && this.AppConfig.basemapgroup.owner) {
                    basemapGroup = {
                        "owner": this.AppConfig.basemapgroup.owner,
                        "title": this.AppConfig.basemapgroup.title
                    }
                }
                var cp = new ContentPane({
                    id: 'basemapGallery',
                    style: "max-height:448px;max-width:380px;"
                });

                //if a bing maps key is provided - display bing maps too.
                var basemapGallery = new BasemapGallery({
                    showArcGISBasemaps: false,
                    basemapsGroup: basemapGroup,
                    bingMapsKey: this.AppConfig.bingmapskey,
                    map: this.map
                }, domConstruct.create('div'));

                var ssaCharleslayer = new BasemapLayer({
                    url:"https://prod1.spatialsys.com/arcgis/rest/services/Charles/Gazetteer/MapServer"
                    //url:"https://demo3.spatialsys.com/ArcGIS/rest/services/CharlesCounty/CharlesBasemap/MapServer"
                });
                var ssaCharlesbasemap = new esri.dijit.Basemap({
                    layers:[ssaCharleslayer],
                    title:"Charles Basemap",
                    thumbnailUrl:"assets/charles_basemap.png"
                });


                var mdImaplayer = new BasemapLayer({
                    //url:"https://prod1.spatialsys.com/arcgis/rest/services/CharlesStormWater/Basemap/MapServer"
                    //url:"http://www.mdimap.us/ArcGIS/rest/services/ImageryBaseMapsEarthCover/MD.State.6InchImagery/MapServer"
                    url:"http://geodata.md.gov/imap/rest/services/Imagery/MD_SixInchImagery/MapServer"
                });

                var ssaCharlesOrtholayer = new BasemapLayer({
                    //url:"https://prod1.spatialsys.com/arcgis/rest/services/CharlesStormWater/Basemap/MapServer"
                    url:"https://maps.charlescountymd.gov/arcgis/rest/services/Basemaps/OrthosZoom2/MapServer"
                });

                var mdImapbasemap = new esri.dijit.Basemap({
                    layers:[mdImaplayer, ssaCharlesOrtholayer],
                    title:"iMap Orthophoto",
                    thumbnailUrl: "assets/imap_basemap.png"
                });

                basemapGallery.add(ssaCharlesbasemap);
                basemapGallery.add(mdImapbasemap);



                cp.set('content', basemapGallery.domNode);
                //Set this dropdownbutton's drop down content
                this.dropDown = cp;

                aspect.after(basemapGallery, "onSelectionChange", lang.hitch(this, function () {
                    //close the basemap window when an item is selected
                    //destroy and recreate the overview map  - so the basemap layer is modified.
                    topic.publish('basemapchanged');
                    registry.byId('basemapBtn').closeDropDown();
                }));
            }
        });
    });