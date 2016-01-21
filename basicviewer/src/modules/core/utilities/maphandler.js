// A singleton utility to handle map interaction. Can require in a module and get direct reference to the "map" instance.
define(["dojo/_base/declare", "dojo/_base/lang", "dojox/gfx/fx", "dojo/fx", "esri/symbols/SimpleFillSymbol"
        , "esri/symbols/SimpleMarkerSymbol", "esri/symbols/SimpleLineSymbol", "esri/Color", "esri/graphic", "dojo/on"],
    function(declare, lang, gfx, coreFx, SimpleFillSymbol
        , SimpleMarkerSymbol, SimpleLineSymbol, Color, Graphic, on){
        //Specify an empty array, even if not inheriting anything, otherwise operates differently.
        var MapHandler = declare("MapHandler", [], {
            //The map object created in map.js
            map: null
            //The default clickhandler of the map (for popups)
            , _clickHandler: null
            //The default _clickListener of the map (for popups)
            , _clickListener: null
            //The original web map object before any customizations have been applied. Needed after startup if user saves customizations.
            , OriginalWebMap: null
            //The web map object after local or shared customizations have been applied. This is the startup configuration in map.js.
            , CustomizedWebMap: null
            //Get the "final" web map. If customizations had been applied, then return that web map. Otherwise return the original.
            , getWebMap: function () {
                return this.CustomizedWebMap || this.OriginalWebMap;
            }
            ,//SYMBOLS
            //---https://developers.arcgis.com/javascript/jsapi/simplefillsymbol-amd.html
            //---http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Symbol_Objects/02r3000000n5000000/
            _selectedPolySymbolJSON: {
                "type": "esriSFS",
                "style": "esriSFSSolid",
                "color": [95, 255, 255, 255],
                "outline":
                {
                    "color": [95, 255, 255, 255],
                    "width": 4
                }
            },
            _selectedPointSymbolJSON: {
                "type": "esriSMS",
                "style": "esriSMSCircle",
                "color": [95, 255, 255, 150],
                "size": 5,
                "outline":
                {
                    "color": [95, 255, 255, 150],
                    "width": 1
                }
            },
            _selectedLineSymbolJSON: {
                "type": "esriSLS",
                "style": "esriSLSSolid",
                "color": [95, 255, 255, 255],
                "width": 3
            },

            _highlightedPolySymbolJSON: {
                "type": "esriSFS",
                "style": "esriSFSSolid",
                "color": [255, 237, 33, 255],
                "outline":
                {
                    "color": [255, 237, 33, 255],
                    "width": 4
                }
            },
            _highlightedPointSymbolJSON: {
                "type": "esriSMS",
                "style": "esriSMSCircle",
                "color": [255, 237, 33, 255],
                "size": 6,
                "outline":
                {
                    "color": [255, 237, 33, 255],
                    "width": 4
                }
            },
            _highlightedLineSymbolJSON: {
                "type": "esriSLS",
                "style": "esriSLSSolid",
                "color": [255, 237, 33, 255],
                "width": 3
            }


            //Some tools, such as measurement and draw need to toggle on/off popups, so a popup doesn't appear when drawing on the map.
            , EnableMapPopups: function () {
                //                if (this._clickListener)
                //                    this._clickHandler = on(this.map, "onClick", this._clickListener);
                if (this._clickListener) {
                    this._clickHandler = this.map.on("click", this._clickListener);
                   // console.log("Popups should be enabled");
                };
            }

            , DisableMapPopups: function () {
                /*if (this._clickHandler)
                    this._clickHandler.remove();*/

                if (this._clickHandler) {
                    dojo.disconnect(this._clickHandler);
                    //console.log("Popups should be disabled");
                }
            }

            // Takes the Web Map configuration object (including any overrides) from map.js and creates the MapLayerStore object.
            , CreateMapStore: function (webMap) {
                //not implemented
            }

            , CreateWebMapOverrideObject: function () {
                //not implemented
            }

            , ShowLoadingIcon: function() {
                var loading = dojo.byId("loadingImg");  //loading image. id
                esri.show(loading);
                this.map.disableMapNavigation();
                this.map.hideZoomSlider();
            }
            , HideLoadingIcon: function() {
                var loading = dojo.byId("loadingImg");  //loading image. id
                esri.hide(loading);
                this.map.enableMapNavigation();
                this.map.showZoomSlider();
            }

            , HideLoadingIcononStartup: function() {
                var loading = dojo.byId("loadingImg");  //loading image. id
                esri.hide(loading);
            }

           /* , findGraphicByAttributes: function(attr){
                var graphics = [];
                for (i = 0; i < this.map.graphics.graphics.length; i++){
                    var graphicAttr = this.map.graphics.graphics[i].attributes;
                    if(graphicAttr){
                        if (graphicAttr.AssetInfoID == attr.assetInfoId){
                            graphics.push(this.map.graphics.graphics[i]);
                        }
                    }
                }
                var result = this.compressGraphics(graphics);
                return result;
                //if graphics.length > 1 then compress graphics by geometry type. The array returned will have a maximum of three items, one for each type,
                //or in the event the query search returned only one matching graphic, an array with one item which is the graphic.
                *//*                if (graphics.length > 1){
                 result = this.compressGraphics(graphics);
                 }else{
                 result = graphics;
                 }*//*

            }*/

            , flashGraphic: function(inGeometry){

                var graphicFlash;
                var flashSymbol;

                //loop through graphic array.

                    var geom = inGeometry.type;
                    switch (geom){
                        case "point": case "multipoint":
                        flashSymbol = new SimpleMarkerSymbol(this._highlightedPointSymbolJSON);
                        break;
                        case "polyline":
                            flashSymbol = new SimpleLineSymbol(this._highlightedLineSymbolJSON);
                            break;
                        case "polygon": case "extent":
                        flashSymbol = new SimpleFillSymbol(this._highlightedPolySymbolJSON);
                        break;
                    }
                    graphicFlash = new Graphic(inGeometry, flashSymbol);
                    this.map.graphics.add(graphicFlash);

                    var shape = graphicFlash.getShape();
                    var animStroke = gfx.animateStroke({
                        shape: shape,
                        duration: 900,
                        color: {end: new Color([0, 0, 0, 0])}
                    });

                var animFill = gfx.animateFill({
                    shape: shape,
                    duration: 900,
                    color: {end: new Color([0, 0, 0, 0])}
                });

                switch (geom) {

                    case "point": case "multipoint":
                        var anim = coreFx.combine([animStroke, animFill]);
                    break;
                    case "polyline":
                        var anim = animStroke
                        break;
                    case "polygon": case "extent":
                        var anim = coreFx.combine([animStroke, animFill]);
                    break;
                    /*on.once(anim, "End", function(){
                     this.map.graphics.remove(graphicFlash);
                     });*/

                }
                    dojo.connect(anim, "onEnd", lang.hitch(this, function(){
                        this.map.graphics.remove(graphicFlash);
                    }));
                    anim.play();
                ;
                //end loop and play.

            }
        });
        if (!_instance) {
            var _instance = new MapHandler();
        }
        return _instance;
    }
);