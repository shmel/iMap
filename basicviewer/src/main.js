//  The starting point for the application to load
(function() {
    //Needed to make jQuery compatible with Dojo AMD loader
    define.amd.jQuery = true;
    require({
        async: true, //The async loader does not accomodate the old-style Dojo modules
        /* parseOnLoad- True to automatically parse the HTML for Dojo components after loaded.
            Ran into issues with accessing dijits programmatically, so changed it to false and called parser.parse() later.
            http://dojotoolkit.org/documentation/tutorials/1.8/declarative/
        */
        parseOnLoad: false,
        packages: [  //The "namespaces" for modules in the application
            {
                name: 'jquery',
                location: location.pathname.replace(/\/[^/]+$/, '') + '/src/libs/jquery/js',
                main: 'jquery-1.8.3'
            }, {
                name: 'jqueryui',
                location: location.pathname.replace(/\/[^/]+$/, '') + '/src/libs/jquery/js',
                main: 'jquery-ui-1.9.2.custom'
            }, {
                name: 'xstyle',
                location: location.pathname.replace(/\/[^/]+$/, '') + '/src/libs/xstyle',
                main: 'xstyle'
            }, {
                name: "esriTemplate",
                location: location.pathname.replace(/\/[^/]+$/, '')
            }, {
                name: "localize",
                location: location.pathname.replace(/\/[^/]+$/, '') + '/nls'
            },{
                name: "myModules",
                location: location.pathname.replace(/\/[^/]+$/, '') + '/javascript'
            }, {
                name: "apl",
                location: location.pathname.replace(/\/[^/]+$/, '') + '/apl'
            }, {
                name: "modules",
                location: location.pathname.replace(/\/[^/]+$/, '') + '/src/modules'
            }, {
                name: "dstore",
                location: location.pathname.replace(/\/[^/]+$/, '') + '/src/libs/dstore'
            }, {
                name: "dgrid",
                location: location.pathname.replace(/\/[^/]+$/, '') + '/src/libs/dgrid'
            }
        ]
    }
    // The modules which need to be loaded immediately during app load - most of the widgets are lazy-loaded (e.g. on button click)
    , ["dojo/parser", /*"jquery",*/ "dojo/dom", "dojo/ready", "dojo/_base/lang", "require"
        , "modules/core/utilities/environment", "modules/core/configuration/app", "modules/core/configuration/map", "modules/core/configuration/layout"
        , "esri/IdentityManager", "dojo/on", "dojo/dom-construct", "dijit/layout/BorderContainer", "dijit/layout/TabContainer", "dijit/Toolbar", "dojo/parser", "dojox/layout/FloatingPane", "dijit/MenuItem"
        , "esri/arcgis/utils"
        /*"dojo/i18n!localize/template"*, "esri/dijit/TimeSlider", "esri/dijit/editing/Editor-all", "esri/dijit/Bookmarks"*/ ]
    //The callback to run once Dojo and the required modules are ready.  References to the instantiated objects in the array can be exposed
    // as parameters in the callback function, but a parameter does not have to be inserted for each array item
    , function(parser, /*$,*/ dom, ready, lang, require, environment, app, mapConfig, layout, Identity, on, domConstruct) {
       ready(function() {
            parser.parse();
            var appConfigurator = new app();
            var mapConfigurator = new mapConfig();
            var layoutHandler = new layout();
			//Custom Charles County User Sign-In Dialog:
			on(Identity,  "dialog-create", function(){
                //get Dom node for Sign In dialog.  Filter through unnamed divs
                var dialogspace = dom.byId("dijit_Dialog_0");
                var children = dialogspace.getElementsByTagName('div');
                var grandchildren = children[1].getElementsByTagName('div');
                var greatGC = grandchildren[0].getElementsByTagName('div');
                //clear the "Please sign in" text
                greatGC[0].innerHTML = "Please Enter User Credentials:"
                //create new img element
                var newContent = domConstruct.create("img", {src: "./assets/CharlesCO_Logo.png", style: "display: block; margin-left: auto;margin-right: auto; padding-top: 15px; height: 100px"});
                //append to the correct unnamed nested div to show up above the textboxes, but inside the dialog box.
                grandchildren[1].appendChild(newContent);
            });
            //$(document).ready(
                //function(){ //jQuery is now loaded and ready
                    //The application configuration has been loaded
                    appConfigurator.on('appconfigured', function (appConfig) {
                        //Configure the web map
                        mapConfigurator.on('mapconfigured', function (webmap) {
                            // Perform initial layout of the page
                            layoutHandler.InitialLayout(appConfig);
                            // Map has been created and loaded
                            mapConfigurator.on('maploaded', function (map) {
                                // Finish creating application elements, including the tab manager and tool manager
                                layoutHandler.FinalizeLayout(webmap, map);




                            });
                            mapConfigurator.CreateMap();
                        });
                        mapConfigurator.configure(appConfig);
                    });
                    appConfigurator.configure();
                //}
            //);
       });
    });
})();