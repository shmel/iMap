//******Charles County, MD | Department of Public Works | Utilities Division | System Map WebMap JSON Object******

/* This is the place to define your Web Map as a JSON object, if you do not want to do it in ArcGIS Online.
 See the following links for help and examples on defining a Web Map:
 http://help.arcgis.com/en/webapi/javascript/arcgis/jshelp/#intro_webmap
 http://resources.arcgis.com/en/help/arcgis-web-map-json/

 ***
 To enable the ability for users to save or share their map, generate a GUID for the webmap and specify as an "id" property
 in the JSON objects "item" property.

 Can use this website to generate a GUID- http://www.guidgenerator.com/online-guid-generator.aspx

 Also, set an id property for each operational layer, to enable saving and sharing.  The id does not need to be a GUID, just unique.
 ***

 Two properties are required for the web map: "item" and "itemData".  See the first link above for an example

 {
 "item": {
 "id": "5caf4ec5-4d38-42fd-bc94-c7a1a1cf3ddb",
 "title":"Soil Survey Map of USA",
 "snippet": "Detailed description of data",
 "extent": [[-139.4916, 10.7191],[-52.392, 59.5199]]
 },
 "itemData": {
 "operationalLayers": [{
 "url": "http://server.arcgisonline.com/ArcGIS/rest/services/Specialty/Soil_Survey_Map/MapServer",
 "visibility": true,
 "opacity": 0.75,
 "title": "Soil Survey Map",
 "id": "204d94c9b1374de9a21574c9efa31164"
 }],
 "baseMap": {
 "baseMapLayers": [{
 "opacity": 1,
 "visibility": true,
 "url": "http://services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer"
 },{
 "isReference": true,
 "opacity": 1,
 "visibility": true,
 "url": "http://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer"
 }],
 "title": "World_Terrain_Base"
 },
 "version": "1.1"
 }
 }
 */
{
    "item": {
    "id": "9390f9f8-92dc-4725-9398-cfd7c0ad8c7d",
        "title":"Charles County Water / Wastewater System Map",
        "snippet": "Details Go Here",
        "extent": [[-77.27, 38.3],[-76.73, 38.726]]
},
    "itemData":  {
    "operationalLayers": [
        {
            "url": "https://prod1.spatialsys.com/arcgis/rest/services/Charles/Impervious/MapServer",
            "id": "Impervious_9782",
            "visibility": true,
            "visibleLayers": [
                0,
                1,
                2,
                3,
                4
            ],
            "opacity": 1,
            "title": "Impervious"
        },
        {
            "url": "https://prod1.spatialsys.com/arcgis/rest/services/Charles/BasemapSimple/MapServer",
            "id": "BasemapSimple_3243",
            "visibility": true,
            "visibleLayers": [
                0,
                2,
                3,
                4,
                5,
                6,
                7,
                8
            ],
            "opacity": 1,
            "title": "BasemapSimple"
        },
        {
            "url": "https://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/CharlesUtilities/MapServer",
            "id": "CharlesUtilities_6774",
            "visibility": true,
            "visibleLayers": [
                0,
				1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
				10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                31,
                32,
                33,
                34,
                35,
				36,
				37,
				38,
				39,
                40,
                41,
                42,
                43,
                44,
				45,
                46,
                47,
                48,
                49,
                50,
                52,
                53,
                54,
                55,
                56,
                57,
                58,
                59,
                60,
                61,
                62,
                64,
                65,
                66,
                67,
                68,
                69,
                71,
                72,
                73,
				74,
				75,
				76,
                77,
                78,
                79,
                80,
                83
            ],
            "opacity": 1,
            "title": "CharlesUtilities",
            "layers": [
                {
                    "id": 50,
                    "popupInfo": {
                        "title": "Manhole: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "AncillaryRole",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "SUBTYPE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCESSDIAMETER",
                                "label": "AccessDiameter",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ACCESSTYPE",
                                "label": "AccessType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GROUNDTYPE",
                                "label": "GROUNDTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "HIGHPIPEELEVATION",
                                "label": "HIGHPIPEELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "INTERIORDROP",
                                "label": "INTERIORDROP",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "INVERTELEVATION",
                                "label": "INVERTELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WALLMATERIAL",
                                "label": "WALLMATERIAL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUS",
                                "label": "Status",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID1",
                                "label": "IMAGEID1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID2",
                                "label": "IMAGEID2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID3",
                                "label": "IMAGEID3",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DROPTYPE",
                                "label": "DropType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DROPTYPECLASS",
                                "label": "DROPTYPECLASS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS2",
                                "label": "COMMENTS2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CHECKPOINT_ID",
                                "label": "CHECKPOINT_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                },
                                "_visible": true,
                                "_pos": 0
                            }
                        ]
                    }
                },
                {
                    "id": 3,
                    "popupInfo": {
                        "title": "rManhole: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "AncillaryRole",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "SUBTYPE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCESSDIAMETER",
                                "label": "AccessDiameter",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ACCESSTYPE",
                                "label": "AccessType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GROUNDTYPE",
                                "label": "GROUNDTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "HIGHPIPEELEVATION",
                                "label": "HIGHPIPEELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "INTERIORDROP",
                                "label": "INTERIORDROP",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "INVERTELEVATION",
                                "label": "INVERTELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WALLMATERIAL",
                                "label": "WALLMATERIAL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUS",
                                "label": "Status",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID1",
                                "label": "IMAGEID1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID2",
                                "label": "IMAGEID2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID3",
                                "label": "IMAGEID3",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DROPTYPE",
                                "label": "DropType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DROPTYPECLASS",
                                "label": "DROPTYPECLASS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS2",
                                "label": "COMMENTS2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CHECKPOINT_ID",
                                "label": "CHECKPOINT_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 4,
                    "popupInfo": {
                        "title": "rNetworkStructure: {NAME}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NAME",
                                "label": "NAME",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALDATE",
                                "label": "OPERATIONALDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "REFERENCEID",
                                "label": "REFERENCEID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCE",
                                "label": "SOURCE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NETWORKUSAGE",
                                "label": "NetworkUsage",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NETWORKOID",
                                "label": "NETWORKOID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTENANCERESP",
                                "label": "MAINTENANCERESP",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CHECKPOINT_ID",
                                "label": "CHECKPOINT_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                },
                                "_visible": true,
                                "_pos": 0
                            }
                        ]
                    }
                },
                {
                    "id": 5,
                    "popupInfo": {
                        "title": "rHydrant: {ADMINISTRATIVEAREA}{PRESSURECLASS}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BARRELDIAMETER",
                                "label": "BarrelDiameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINVALVETYPE",
                                "label": "MAINVALVETYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOZZLEDIAMETER1",
                                "label": "NozzleDiameter1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOZZLEDIAMETER2",
                                "label": "NozzleDiameter2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOZZLEDIAMETER3",
                                "label": "NozzleDiameter3",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOZZLEDIAMETER4",
                                "label": "NozzleDiameter4",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OUTLETCONFIGURATION",
                                "label": "OUTLETCONFIGURATION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SEATDIAMETER",
                                "label": "SEATDIAMETER",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BURYDEPTH",
                                "label": "BURYDEPTH",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "MANUFACTURER",
                                "label": "MANUFACTURER",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAKE",
                                "label": "MAKE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODEL",
                                "label": "MODEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BURYLINE",
                                "label": "BURYLINE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ELBOWELEVATION",
                                "label": "ELBOWELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "PRESSURECLASS",
                                "label": "PRESSURECLASS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 6,
                    "popupInfo": {
                        "title": "rFitting: {JOINTTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE",
                                "label": "JointType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER1",
                                "label": "Diameter1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER2",
                                "label": "Diameter2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER3",
                                "label": "Diameter3",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER4",
                                "label": "Diameter4",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DEGREES",
                                "label": "DEGREES",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ANGLE",
                                "label": "ANGLE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 7,
                    "popupInfo": {
                        "title": "rReclaimedLine: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWMEASUREMENTID",
                                "label": "FLOWMEASUREMENTID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EXTERIORCOATING",
                                "label": "EXTERIORCOATING",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE1",
                                "label": "JointType1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE2",
                                "label": "JointType2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LININGTYPE",
                                "label": "LININGTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPECLASS",
                                "label": "PIPECLASS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROUGHNESS",
                                "label": "ROUGHNESS",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "DEPTH",
                                "label": "DEPTH",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "GROUNDSURFACETYPE",
                                "label": "GROUNDSURFACETYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PRESSURERATING",
                                "label": "PRESSURERATING",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAXFLOWRATE",
                                "label": "MAXFLOWRATE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CHECKPOINT_ID",
                                "label": "CHECKPOINT_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 8,
                    "popupInfo": {
                        "title": "rCasing: {LIFECYCLESTATUS}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RECORDEDLENGTH",
                                "label": "RECORDEDLENGTH",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },

                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 9,
                    "popupInfo": {
                        "title": "rWaterStructure: {LIFECYCLESTATUS}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALDATE",
                                "label": "OPERATIONALDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTENANCERESP",
                                "label": "MAINTENANCERESP",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 11,
                    "popupInfo": {
                        "title": "wWaterTower: {TOWERNAME}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOWERNAME",
                                "label": "TOWERNAME",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOWERLOCATION",
                                "label": "TOWERLOCATION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOWERHEIGHT",
                                "label": "TOWERHEIGHT",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "CAPACITY",
                                "label": "CAPACITY",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALDATE",
                                "label": "OPERATIONALDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOPCAPACITYLINE",
                                "label": "TOPCAPACITYLINE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "BOTTOMCAPACITYLINE",
                                "label": "BOTTOMCAPACITYLINE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "TOWERTYPE",
                                "label": "TOWERTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "HEADRANGE",
                                "label": "HEADRANGE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MANUFACTURER",
                                "label": "MANUFACTURER",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODEL",
                                "label": "MODEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "YEAR",
                                "label": "YEAR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONTRACTNUMBER",
                                "label": "CONTRACTNUMBER",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TANKDIAMETER",
                                "label": "TANKDIAMETER",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 12,
                    "popupInfo": {
                        "title": "wMeter: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWRANGE",
                                "label": "FLOWRANGE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MEASUREMENTDATE",
                                "label": "MEASUREMENTDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATION",
                                "label": "LOCATION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 13,
                    "popupInfo": {
                        "title": "wCurbStop: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BYPASSVALVE",
                                "label": "BypassValve",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CLOCKWISETOCLOSE",
                                "label": "ClockwiseToClose",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CURRENTLYOPEN",
                                "label": "CurrentlyOpen",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MOTORIZED",
                                "label": "Motorized",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NORMALLYOPEN",
                                "label": "NormallyOpen",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PERCENTOPEN",
                                "label": "PercentOpen",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "PRESSURESETTING",
                                "label": "PRESSURESETTING",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "REGULATIONTYPE",
                                "label": "RegulationType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TURNSTOCLOSE",
                                "label": "TURNSTOCLOSE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "OPERABLE",
                                "label": "Operable",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOOPTAGID",
                                "label": "LOOPTAGID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTUATORTYPE",
                                "label": "ACTUATORTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 14,
                    "popupInfo": {
                        "title": "wSamplingStation: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATIONID",
                                "label": "STATIONID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 15,
                    "popupInfo": {
                        "title": "wNetworkStructure: {NAME}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NAME",
                                "label": "NAME",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALDATE",
                                "label": "OPERATIONALDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "REFERENCEID",
                                "label": "REFERENCEID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCE",
                                "label": "SOURCE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NETWORKUSAGE",
                                "label": "NetworkUsage",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERSTRUCTUREFACILITYID",
                                "label": "WATERSTRUCTUREFACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 16,
                    "popupInfo": {
                        "title": "wManhole: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCESSDIAMETER",
                                "label": "AccessDiameter",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ACCESSTYPE",
                                "label": "AccessType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GROUNDTYPE",
                                "label": "GROUNDTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "HIGHPIPEELEVATION",
                                "label": "HIGHPIPEELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "INTERIORDROP",
                                "label": "INTERIORDROP",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "INVERTELEVATION",
                                "label": "INVERTELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WALLMATERIAL",
                                "label": "WALLMATERIAL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 17,
                    "popupInfo": {
                        "title": "wFitting: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE",
                                "label": "JointType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER1",
                                "label": "Diameter1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER2",
                                "label": "Diameter2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER3",
                                "label": "Diameter3",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER4",
                                "label": "Diameter4",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DEGREES",
                                "label": "DEGREES",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RESTRAINTTYPE",
                                "label": "RESTRAINTTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANGLE",
                                "label": "ANGLE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 18,
                    "popupInfo": {
                        "title": "wFitting Abandoned: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE",
                                "label": "JointType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER1",
                                "label": "Diameter1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER2",
                                "label": "Diameter2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER3",
                                "label": "Diameter3",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER4",
                                "label": "Diameter4",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DEGREES",
                                "label": "DEGREES",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RESTRAINTTYPE",
                                "label": "RESTRAINTTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANGLE",
                                "label": "ANGLE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 19,
                    "popupInfo": {
                        "title": "wClearWell: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPACITY",
                                "label": "CAPACITY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DEPTH",
                                "label": "DEPTH",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "OPERATINGMAX",
                                "label": "OPERATINGMAX",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATINGMIN",
                                "label": "OPERATINGMIN",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATIONID",
                                "label": "STATIONID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER1",
                                "label": "Diameter1",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "DIAMETER2",
                                "label": "Diameter2",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 21,
                    "popupInfo": {
                        "title": "wHydrant: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BARRELDIAMETER",
                                "label": "BarrelDiameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINVALVETYPE",
                                "label": "MAINVALVETYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOZZLEDIAMETER1",
                                "label": "NozzleDiameter1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOZZLEDIAMETER2",
                                "label": "NozzleDiameter2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOZZLEDIAMETER3",
                                "label": "NozzleDiameter3",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOZZLEDIAMETER4",
                                "label": "NozzleDiameter4",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OUTLETCONFIGURATION",
                                "label": "OUTLETCONFIGURATION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SEATDIAMETER",
                                "label": "SEATDIAMETER",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BURYDEPTH",
                                "label": "BURYDEPTH",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "MANUFACTURER",
                                "label": "MANUFACTURER",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAKE",
                                "label": "MAKE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODEL",
                                "label": "MODEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BURYLINE",
                                "label": "BURYLINE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ELBOWELEVATION",
                                "label": "ELBOWELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "PRESSURECLASS",
                                "label": "PRESSURECLASS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 22,
                    "popupInfo": {
                        "title": "wHydrant: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BARRELDIAMETER",
                                "label": "BarrelDiameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINVALVETYPE",
                                "label": "MAINVALVETYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOZZLEDIAMETER1",
                                "label": "NozzleDiameter1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOZZLEDIAMETER2",
                                "label": "NozzleDiameter2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOZZLEDIAMETER3",
                                "label": "NozzleDiameter3",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOZZLEDIAMETER4",
                                "label": "NozzleDiameter4",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OUTLETCONFIGURATION",
                                "label": "OUTLETCONFIGURATION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SEATDIAMETER",
                                "label": "SEATDIAMETER",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BURYDEPTH",
                                "label": "BURYDEPTH",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "MANUFACTURER",
                                "label": "MANUFACTURER",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAKE",
                                "label": "MAKE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODEL",
                                "label": "MODEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BURYLINE",
                                "label": "BURYLINE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ELBOWELEVATION",
                                "label": "ELBOWELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "PRESSURECLASS",
                                "label": "PRESSURECLASS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 23,
                    "popupInfo": {
                        "title": "wHydrant Abandoned: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BARRELDIAMETER",
                                "label": "BarrelDiameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINVALVETYPE",
                                "label": "MAINVALVETYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOZZLEDIAMETER1",
                                "label": "NozzleDiameter1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOZZLEDIAMETER2",
                                "label": "NozzleDiameter2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOZZLEDIAMETER3",
                                "label": "NozzleDiameter3",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOZZLEDIAMETER4",
                                "label": "NozzleDiameter4",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OUTLETCONFIGURATION",
                                "label": "OUTLETCONFIGURATION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SEATDIAMETER",
                                "label": "SEATDIAMETER",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BURYDEPTH",
                                "label": "BURYDEPTH",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "MANUFACTURER",
                                "label": "MANUFACTURER",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAKE",
                                "label": "MAKE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODEL",
                                "label": "MODEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BURYLINE",
                                "label": "BURYLINE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ELBOWELEVATION",
                                "label": "ELBOWELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "PRESSURECLASS",
                                "label": "PRESSURECLASS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 24,
                    "popupInfo": {
                        "title": "wControlValve: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTUATORTYPE",
                                "label": "ACTUATORTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOOPTAGID",
                                "label": "LOOPTAGID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 25,
                    "popupInfo": {
                        "title": "wSystemValve: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BYPASSVALVE",
                                "label": "BypassValve",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CLOCKWISETOCLOSE",
                                "label": "ClockwiseToClose",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CURRENTLYOPEN",
                                "label": "CurrentlyOpen",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MOTORIZED",
                                "label": "Motorized",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NORMALLYOPEN",
                                "label": "NormallyOpen",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PERCENTOPEN",
                                "label": "PercentOpen",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "PRESSURESETTING",
                                "label": "PRESSURESETTING",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "REGULATIONTYPE",
                                "label": "RegulationType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TURNSTOCLOSE",
                                "label": "TURNSTOCLOSE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "OPERABLE",
                                "label": "Operable",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOOPTAGID",
                                "label": "LOOPTAGID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTUATORTYPE",
                                "label": "ACTUATORTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 26,
                    "popupInfo": {
                        "title": "wSystemValve Abandoned: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BYPASSVALVE",
                                "label": "BypassValve",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CLOCKWISETOCLOSE",
                                "label": "ClockwiseToClose",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CURRENTLYOPEN",
                                "label": "CurrentlyOpen",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MOTORIZED",
                                "label": "Motorized",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NORMALLYOPEN",
                                "label": "NormallyOpen",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PERCENTOPEN",
                                "label": "PercentOpen",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "PRESSURESETTING",
                                "label": "PRESSURESETTING",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "REGULATIONTYPE",
                                "label": "RegulationType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TURNSTOCLOSE",
                                "label": "TURNSTOCLOSE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "OPERABLE",
                                "label": "Operable",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOOPTAGID",
                                "label": "LOOPTAGID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTUATORTYPE",
                                "label": "ACTUATORTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 27,
                    "popupInfo": {
                        "title": "Well: {NAME}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "NAME",
                                "label": "NAME",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "DESCRIPTION",
                                "label": "DESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLATIONDATE",
                                "label": "INSTALLATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "CAPACITY",
                                "label": "CAPACITY",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "TYPE",
                                "label": "TYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALTIYLEVEL",
                                "label": "UTILITYQUALTIYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 28,
                    "popupInfo": {
                        "title": "wSpatialOperationsRecord: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RECORDDATE",
                                "label": "RECORDDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "ID",
                                "label": "ID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NETWORKFACILITYID",
                                "label": "NETWORKFACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 29,
                    "popupInfo": {
                        "title": "wScadaSensor: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CURRENTVALUE",
                                "label": "CURRENTVALUE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ID",
                                "label": "ID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MEASUREMENTTYPE",
                                "label": "MeasurementType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 31,
                    "popupInfo": {
                        "title": "wPressurizedMain: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWMEASUREMENTID",
                                "label": "FLOWMEASUREMENTID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EXTERIORCOATING",
                                "label": "EXTERIORCOATING",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE1",
                                "label": "JointType1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE2",
                                "label": "JointType2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LININGTYPE",
                                "label": "LININGTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPECLASS",
                                "label": "PIPECLASS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROUGHNESS",
                                "label": "ROUGHNESS",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "DEPTH",
                                "label": "DEPTH",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPELENGTH",
                                "label": "PIPELENGTH",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "MAXFLOWRATE",
                                "label": "MAXFLOWRATE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GROUNDSURFACETYPE",
                                "label": "GROUNDSURFACETYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PRESSURERATING",
                                "label": "PRESSURERATING",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 32,
                    "popupInfo": {
                        "title": "wPressurizedMain - Low Accuracy: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWMEASUREMENTID",
                                "label": "FLOWMEASUREMENTID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EXTERIORCOATING",
                                "label": "EXTERIORCOATING",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE1",
                                "label": "JointType1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE2",
                                "label": "JointType2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LININGTYPE",
                                "label": "LININGTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPECLASS",
                                "label": "PIPECLASS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROUGHNESS",
                                "label": "ROUGHNESS",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "DEPTH",
                                "label": "DEPTH",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPELENGTH",
                                "label": "PIPELENGTH",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "MAXFLOWRATE",
                                "label": "MAXFLOWRATE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GROUNDSURFACETYPE",
                                "label": "GROUNDSURFACETYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PRESSURERATING",
                                "label": "PRESSURERATING",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 33,
                    "popupInfo": {
                        "title": "wPressurizedMain Abandoned: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWMEASUREMENTID",
                                "label": "FLOWMEASUREMENTID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EXTERIORCOATING",
                                "label": "EXTERIORCOATING",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE1",
                                "label": "JointType1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE2",
                                "label": "JointType2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LININGTYPE",
                                "label": "LININGTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPECLASS",
                                "label": "PIPECLASS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROUGHNESS",
                                "label": "ROUGHNESS",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "DEPTH",
                                "label": "DEPTH",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPELENGTH",
                                "label": "PIPELENGTH",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "MAXFLOWRATE",
                                "label": "MAXFLOWRATE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GROUNDSURFACETYPE",
                                "label": "GROUNDSURFACETYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PRESSURERATING",
                                "label": "PRESSURERATING",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 34,
                    "popupInfo": {
                        "title": "wLateralLine: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWMEASUREMENTID",
                                "label": "FLOWMEASUREMENTID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONNECTIONTYPE",
                                "label": "CONNECTIONTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 35,
                    "popupInfo": {
                        "title": "CHARLES.wLateralLinePrivate: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWMEASUREMENTID",
                                "label": "FLOWMEASUREMENTID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 36,
                    "popupInfo": {
                        "title": "wWaterStructure: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALDATE",
                                "label": "OPERATIONALDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 37,
                    "popupInfo": {
                        "title": "wThrustProtection: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 38,
                    "popupInfo": {
                        "title": "wUndergroundEnclosure: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COVERMATERIAL",
                                "label": "CoverMaterial",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COVERTYPE",
                                "label": "CoverType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DEPTH",
                                "label": "DEPTH",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "FRAMEMATERIAL",
                                "label": "FrameMaterial",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FRAMETYPE",
                                "label": "FRAMETYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INVERTELEVATION",
                                "label": "INVERTELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "MEASUREMENT1",
                                "label": "Measurement1",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "MEASUREMENT2",
                                "label": "Measurement2",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 39,
                    "popupInfo": {
                        "title": "wCasing: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RECORDEDLENGTH",
                                "label": "RECORDEDLENGTH",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 41,
                    "popupInfo": {
                        "title": "Clean Out:",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DEPTH",
                                "label": "DEPTH",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "FRAMEMATERIAL",
                                "label": "FrameMaterial",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCESSDIAMETER",
                                "label": "AccessDiameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCESSMATERIAL",
                                "label": "AccessMaterial",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 42,
                    "popupInfo": {
                        "title": "Clean Out Abandoned: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DEPTH",
                                "label": "DEPTH",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "FRAMEMATERIAL",
                                "label": "FrameMaterial",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCESSDIAMETER",
                                "label": "AccessDiameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCESSMATERIAL",
                                "label": "AccessMaterial",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 43,
                    "popupInfo": {
                        "title": "Control Valve:",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 44,
                    "popupInfo": {
                        "title": "Discharge Point:",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "AVERAGEDISCHARGE",
                                "label": "AVERAGEDISCHARGE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DISCHARGEID",
                                "label": "DISCHARGEID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PEAKDISCHARGE",
                                "label": "PEAKDISCHARGE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PERMITNAME",
                                "label": "PERMITNAME",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PERMITID",
                                "label": "PERMITID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 45,
                    "popupInfo": {
                        "title": "Fitting: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE",
                                "label": "JointType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER1",
                                "label": "Diameter1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER2",
                                "label": "Diameter2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER3",
                                "label": "Diameter3",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER4",
                                "label": "Diameter4",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DEGREES",
                                "label": "DEGREES",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ANGLE",
                                "label": "ANGLE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 46,
                    "popupInfo": {
                        "title": "Meter:",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWRANGE",
                                "label": "FLOWRANGE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MEASUREMENTDATE",
                                "label": "MEASUREMENTDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 47,
                    "popupInfo": {
                        "title": "Pump:",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INLETDIAMETER",
                                "label": "InletDiameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DISCHARGEDIAMETER",
                                "label": "DischargeDiameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RATEDFLOW",
                                "label": "RATEDFLOW",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RATEDPRESSURE",
                                "label": "RATEDPRESSURE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOTALDYNAMICHEAD",
                                "label": "TOTALDYNAMICHEAD",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PUMPMAKE",
                                "label": "PUMPMAKE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PUMPMODEL",
                                "label": "PUMPMODEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PUMPTYPE",
                                "label": "PUMPTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PUMPNAME",
                                "label": "PUMPNAME",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MOTORMAKE",
                                "label": "MOTORMAKE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MOTORMODEL",
                                "label": "MOTORMODEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MOTORTYPE",
                                "label": "MOTORTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MOTORHP",
                                "label": "MOTORHP",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MOTORRPM",
                                "label": "MOTORRPM",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MOTOREFFICIENCY",
                                "label": "MOTOREFFICIENCY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PUMPSTARTELEVATION",
                                "label": "PUMPSTARTELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "PUMPSTOPELEVATION",
                                "label": "PUMPSTOPELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACT",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 48,
                    "popupInfo": {
                        "title": "System Valve:",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BYPASSVALVE",
                                "label": "BypassValve",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CLOCKWISETOCLOSE",
                                "label": "ClockwiseToClose",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CURRENTLYOPEN",
                                "label": "CurrentlyOpen",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MOTORIZED",
                                "label": "Motorized",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NORMALLYOPEN",
                                "label": "NormallyOpen",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PERCENTOPEN",
                                "label": "PercentOpen",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "PRESSURESETTING",
                                "label": "PRESSURESETTING",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "REGULATIONTYPE",
                                "label": "RegulationType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TURNSTOCLOSE",
                                "label": "TURNSTOCLOSE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "MAKE",
                                "label": "MAKE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODEL",
                                "label": "MODEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 52,
                    "popupInfo": {
                        "title": "Manhole Abandoned: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "AncillaryRole",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "SUBTYPE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCESSDIAMETER",
                                "label": "AccessDiameter",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ACCESSTYPE",
                                "label": "AccessType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GROUNDTYPE",
                                "label": "GROUNDTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "HIGHPIPEELEVATION",
                                "label": "HIGHPIPEELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "INTERIORDROP",
                                "label": "INTERIORDROP",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "INVERTELEVATION",
                                "label": "INVERTELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WALLMATERIAL",
                                "label": "WALLMATERIAL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUS",
                                "label": "Status",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID1",
                                "label": "IMAGEID1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID2",
                                "label": "IMAGEID2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID3",
                                "label": "IMAGEID3",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DROPTYPE",
                                "label": "DropType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DROPTYPECLASS",
                                "label": "DROPTYPECLASS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS2",
                                "label": "COMMENTS2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CHECKPOINT_ID",
                                "label": "CHECKPOINT_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 54,
                    "popupInfo": {
                        "title": "Network Structure: {NAME}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NAME",
                                "label": "NAME",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALDATE",
                                "label": "OPERATIONALDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "REFERENCEID",
                                "label": "REFERENCEID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCE",
                                "label": "SOURCE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NETWORKUSAGE",
                                "label": "NetworkUsage",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NETWORKOID",
                                "label": "NETWORKOID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTENANCERESP",
                                "label": "MAINTENANCERESP",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CHECKPOINT_ID",
                                "label": "CHECKPOINT_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 55,
                    "popupInfo": {
                        "title": "Network Structure: {NAME}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NAME",
                                "label": "NAME",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALDATE",
                                "label": "OPERATIONALDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "REFERENCEID",
                                "label": "REFERENCEID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCE",
                                "label": "SOURCE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NETWORKUSAGE",
                                "label": "NetworkUsage",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NETWORKOID",
                                "label": "NETWORKOID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTENANCERESP",
                                "label": "MAINTENANCERESP",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CHECKPOINT_ID",
                                "label": "CHECKPOINT_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 56,
                    "popupInfo": {
                        "title": "Network Structure Abandoned: {NAME}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NAME",
                                "label": "NAME",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALDATE",
                                "label": "OPERATIONALDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "REFERENCEID",
                                "label": "REFERENCEID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCE",
                                "label": "SOURCE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NETWORKUSAGE",
                                "label": "NetworkUsage",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NETWORKOID",
                                "label": "NETWORKOID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTENANCERESP",
                                "label": "MAINTENANCERESP",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CHECKPOINT_ID",
                                "label": "CHECKPOINT_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 57,
                    "popupInfo": {
                        "title": "Spatial Operations Record: {LIFECYCLESTATUS}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RECORDDATE",
                                "label": "RECORDDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "ID",
                                "label": "ID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NETWORKOID",
                                "label": "NETWORKOID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 58,
                    "popupInfo": {
                        "title": "Scada Sensor: {LIFECYCLESTATUS}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CURRENTVALUE",
                                "label": "CURRENTVALUE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ID",
                                "label": "ID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MEASUREMENTTYPE",
                                "label": "MeasurementType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 59,
                    "popupInfo": {
                        "title": "Anode: {LIFECYCLESTATUS}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANODECOUNT",
                                "label": "ANODECOUNT",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WEIGHT",
                                "label": "WEIGHT",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 61,
                    "popupInfo": {
                        "title": "Pressurized Main: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWMEASUREMENTID",
                                "label": "FLOWMEASUREMENTID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EXTERIORCOATING",
                                "label": "EXTERIORCOATING",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE1",
                                "label": "JointType1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE2",
                                "label": "JointType2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LININGTYPE",
                                "label": "LININGTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPECLASS",
                                "label": "PIPECLASS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROUGHNESS",
                                "label": "ROUGHNESS",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "DEPTH",
                                "label": "DEPTH",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "GROUNDSURFACETYPE",
                                "label": "GROUNDSURFACETYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PRESSURERATING",
                                "label": "PRESSURERATING",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAXFLOWRATE",
                                "label": "MAXFLOWRATE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CHECKPOINT_ID",
                                "label": "CHECKPOINT_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 62,
                    "popupInfo": {
                        "title": "Pressurized Main: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWMEASUREMENTID",
                                "label": "FLOWMEASUREMENTID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EXTERIORCOATING",
                                "label": "EXTERIORCOATING",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE1",
                                "label": "JointType1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE2",
                                "label": "JointType2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LININGTYPE",
                                "label": "LININGTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPECLASS",
                                "label": "PIPECLASS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROUGHNESS",
                                "label": "ROUGHNESS",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "DEPTH",
                                "label": "DEPTH",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "GROUNDSURFACETYPE",
                                "label": "GROUNDSURFACETYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PRESSURERATING",
                                "label": "PRESSURERATING",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAXFLOWRATE",
                                "label": "MAXFLOWRATE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CHECKPOINT_ID",
                                "label": "CHECKPOINT_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 64,
                    "popupInfo": {
                        "title": "Pressurized Main Abandoned: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWMEASUREMENTID",
                                "label": "FLOWMEASUREMENTID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EXTERIORCOATING",
                                "label": "EXTERIORCOATING",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE1",
                                "label": "JointType1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE2",
                                "label": "JointType2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LININGTYPE",
                                "label": "LININGTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPECLASS",
                                "label": "PIPECLASS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROUGHNESS",
                                "label": "ROUGHNESS",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "DEPTH",
                                "label": "DEPTH",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "GROUNDSURFACETYPE",
                                "label": "GROUNDSURFACETYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PRESSURERATING",
                                "label": "PRESSURERATING",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAXFLOWRATE",
                                "label": "MAXFLOWRATE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CHECKPOINT_ID",
                                "label": "CHECKPOINT_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 65,
                    "popupInfo": {
                        "title": "Lateral Line: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWMEASUREMENTID",
                                "label": "FLOWMEASUREMENTID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 66,
                    "popupInfo": {
                        "title": "Lateral Line Abandoned: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWMEASUREMENTID",
                                "label": "FLOWMEASUREMENTID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 67,
                    "popupInfo": {
                        "title": "Lateral Line Private: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWMEASUREMENTID",
                                "label": "FLOWMEASUREMENTID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 69,
                    "popupInfo": {
                        "title": "Gravity Main: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWMEASUREMENTID",
                                "label": "FLOWMEASUREMENTID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EXTERIORCOATING",
                                "label": "EXTERIORCOATING",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE1",
                                "label": "JointType1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE2",
                                "label": "JointType2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LININGTYPE",
                                "label": "LININGTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPECLASS",
                                "label": "PIPECLASS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROUGHNESS",
                                "label": "ROUGHNESS",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "BARRELCOUNT",
                                "label": "BARRELCOUNT",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "CROSSSECTIONSHAPE",
                                "label": "CrossSectionShape",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UPSTREAMINVERT",
                                "label": "UPSTREAMINVERT",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "DOWNSTREAMINVERT",
                                "label": "DOWNSTREAMINVERT",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "MEASUREMENT1",
                                "label": "Measurement1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MEASUREMENT2",
                                "label": "Measurement2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOMINALDIAMETER",
                                "label": "NominalDiameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SLOPE",
                                "label": "SLOPE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "PIPELENGTH",
                                "label": "PIPELENGTH",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUS",
                                "label": "Status",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID1",
                                "label": "IMAGEID1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID2",
                                "label": "IMAGEID2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID3",
                                "label": "IMAGEID3",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RATEDMAXCAPACITY",
                                "label": "RATEDMAXCAPACITY",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UPSTREAMMH",
                                "label": "UPSTREAMMH",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DOWNSTREAMMH",
                                "label": "DOWNSTREAMMH",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "COMMENTS2",
                                "label": "COMMENTS2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PROTECTIVEMATERIAL",
                                "label": "PROTECTIVEMATERIAL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CHECKPOINT_ID",
                                "label": "CHECKPOINT_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 71,
                    "popupInfo": {
                        "title": "Gravity Main: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWMEASUREMENTID",
                                "label": "FLOWMEASUREMENTID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EXTERIORCOATING",
                                "label": "EXTERIORCOATING",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE1",
                                "label": "JointType1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE2",
                                "label": "JointType2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LININGTYPE",
                                "label": "LININGTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPECLASS",
                                "label": "PIPECLASS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROUGHNESS",
                                "label": "ROUGHNESS",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "BARRELCOUNT",
                                "label": "BARRELCOUNT",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "CROSSSECTIONSHAPE",
                                "label": "CrossSectionShape",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UPSTREAMINVERT",
                                "label": "UPSTREAMINVERT",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "DOWNSTREAMINVERT",
                                "label": "DOWNSTREAMINVERT",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "MEASUREMENT1",
                                "label": "Measurement1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MEASUREMENT2",
                                "label": "Measurement2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOMINALDIAMETER",
                                "label": "NominalDiameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SLOPE",
                                "label": "SLOPE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "PIPELENGTH",
                                "label": "PIPELENGTH",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUS",
                                "label": "Status",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID1",
                                "label": "IMAGEID1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID2",
                                "label": "IMAGEID2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID3",
                                "label": "IMAGEID3",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RATEDMAXCAPACITY",
                                "label": "RATEDMAXCAPACITY",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UPSTREAMMH",
                                "label": "UPSTREAMMH",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DOWNSTREAMMH",
                                "label": "DOWNSTREAMMH",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "COMMENTS2",
                                "label": "COMMENTS2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PROTECTIVEMATERIAL",
                                "label": "PROTECTIVEMATERIAL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CHECKPOINT_ID",
                                "label": "CHECKPOINT_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 72,
                    "popupInfo": {
                        "title": "Gravity Main Low Accuracy: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWMEASUREMENTID",
                                "label": "FLOWMEASUREMENTID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EXTERIORCOATING",
                                "label": "EXTERIORCOATING",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE1",
                                "label": "JointType1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE2",
                                "label": "JointType2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LININGTYPE",
                                "label": "LININGTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPECLASS",
                                "label": "PIPECLASS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROUGHNESS",
                                "label": "ROUGHNESS",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "BARRELCOUNT",
                                "label": "BARRELCOUNT",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "CROSSSECTIONSHAPE",
                                "label": "CrossSectionShape",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UPSTREAMINVERT",
                                "label": "UPSTREAMINVERT",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "DOWNSTREAMINVERT",
                                "label": "DOWNSTREAMINVERT",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "MEASUREMENT1",
                                "label": "Measurement1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MEASUREMENT2",
                                "label": "Measurement2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOMINALDIAMETER",
                                "label": "NominalDiameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SLOPE",
                                "label": "SLOPE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "PIPELENGTH",
                                "label": "PIPELENGTH",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUS",
                                "label": "Status",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID1",
                                "label": "IMAGEID1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID2",
                                "label": "IMAGEID2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID3",
                                "label": "IMAGEID3",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RATEDMAXCAPACITY",
                                "label": "RATEDMAXCAPACITY",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UPSTREAMMH",
                                "label": "UPSTREAMMH",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DOWNSTREAMMH",
                                "label": "DOWNSTREAMMH",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "COMMENTS2",
                                "label": "COMMENTS2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PROTECTIVEMATERIAL",
                                "label": "PROTECTIVEMATERIAL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CHECKPOINT_ID",
                                "label": "CHECKPOINT_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 73,
                    "popupInfo": {
                        "title": "Gravity Main Abandoned: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWMEASUREMENTID",
                                "label": "FLOWMEASUREMENTID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EXTERIORCOATING",
                                "label": "EXTERIORCOATING",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE1",
                                "label": "JointType1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE2",
                                "label": "JointType2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LININGTYPE",
                                "label": "LININGTYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPECLASS",
                                "label": "PIPECLASS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROUGHNESS",
                                "label": "ROUGHNESS",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "BARRELCOUNT",
                                "label": "BARRELCOUNT",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "CROSSSECTIONSHAPE",
                                "label": "CrossSectionShape",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UPSTREAMINVERT",
                                "label": "UPSTREAMINVERT",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "DOWNSTREAMINVERT",
                                "label": "DOWNSTREAMINVERT",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "MEASUREMENT1",
                                "label": "Measurement1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MEASUREMENT2",
                                "label": "Measurement2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOMINALDIAMETER",
                                "label": "NominalDiameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SLOPE",
                                "label": "SLOPE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "PIPELENGTH",
                                "label": "PIPELENGTH",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUS",
                                "label": "Status",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID1",
                                "label": "IMAGEID1",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID2",
                                "label": "IMAGEID2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID3",
                                "label": "IMAGEID3",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RATEDMAXCAPACITY",
                                "label": "RATEDMAXCAPACITY",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UPSTREAMMH",
                                "label": "UPSTREAMMH",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DOWNSTREAMMH",
                                "label": "DOWNSTREAMMH",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "COMMENTS2",
                                "label": "COMMENTS2",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PROTECTIVEMATERIAL",
                                "label": "PROTECTIVEMATERIAL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CHECKPOINT_ID",
                                "label": "CHECKPOINT_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 74,
                    "popupInfo": {
                        "title": "Underground Enclosure: {LIFECYCLESTATUS}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COVERMATERIAL",
                                "label": "CoverMaterial",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COVERTYPE",
                                "label": "CoverType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DEPTH",
                                "label": "DEPTH",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "FRAMEMATERIAL",
                                "label": "FrameMaterial",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FRAMETYPE",
                                "label": "FRAMETYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INVERTELEVATION",
                                "label": "INVERTELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "MEASUREMENT1",
                                "label": "Measurement1",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "MEASUREMENT2",
                                "label": "Measurement2",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 75,
                    "popupInfo": {
                        "title": "Thrust Protection: {LIFECYCLESTATUS}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/open.jpg",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 76,
                    "popupInfo": {
                        "title": "Water Structure: {LIFECYCLESTATUS}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALDATE",
                                "label": "OPERATIONALDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTENANCERESP",
                                "label": "MAINTENANCERESP",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/open.jpg",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 77,
                    "popupInfo": {
                        "title": "Casing: {LIFECYCLESTATUS}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RECORDEDLENGTH",
                                "label": "RECORDEDLENGTH",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/open.jpg",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 80,
                    "popupInfo": {
                        "title": "Parcel Poly: {ADDRESS}",
                        "fieldInfos": [
                            {
                                "fieldName":"OBJECTID",
                                "label":"OBJECTID",
                                "isEditable":false,
                                "visible":false
                            },
                            {
                                "fieldName":"LOT",
                                "label":"LOT",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"ACCTID",
                                "label":"ACCTID",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"FCODE",
                                "label":"FCODE",
                                "isEditable":false,
                                "visible":true,
                                "format":{
                                    "places":0,
                                    "digitSeparator":true
                                }
                            },
                            {
                                "fieldName":"COMP_CODE",
                                "label":"COMP_CODE",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"PLAT_REF",
                                "label":"PLAT_REF",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"ADDRESS",
                                "label":"ADDRESS",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"STRTNUM",
                                "label":"STRTNUM",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"STRTDIR",
                                "label":"STRTDIR",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"STRTNAM",
                                "label":"STRTNAM",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"STRTTYP",
                                "label":"STRTTYP",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"STRTSFX",
                                "label":"STRTSFX",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"STRTUNT",
                                "label":"STRTUNT",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"ADDRTYP",
                                "label":"ADDRTYP",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"CITY",
                                "label":"CITY",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"OWNNAME1",
                                "label":"OWNNAME1",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"OWNNAME2",
                                "label":"OWNNAME2",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"PREMSNUM",
                                "label":"PREMSNUM",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"PREMSDIR",
                                "label":"PREMSDIR",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"PREMSNAM",
                                "label":"PREMSNAM",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"PREMSTYP",
                                "label":"PREMSTYP",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"PREMCITY",
                                "label":"PREMCITY",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"LEGAL1",
                                "label":"LEGAL1",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"LEGAL2",
                                "label":"LEGAL2",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"LEGAL3",
                                "label":"LEGAL3",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"DR1LIBER",
                                "label":"DR1LIBER",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"DR1FOLIO",
                                "label":"DR1FOLIO",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"SUBDIVSN",
                                "label":"SUBDIVSN",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"PLAT",
                                "label":"PLAT",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"SECTION_",
                                "label":"SECTION_",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"BLOCK",
                                "label":"BLOCK",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"MAP",
                                "label":"MAP",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"GRID",
                                "label":"GRID",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"PARCEL",
                                "label":"PARCEL",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"ACRES",
                                "label":"ACRES",
                                "isEditable":false,
                                "visible":true,
                                "format":{
                                    "places":2,
                                    "digitSeparator":true
                                }
                            },
                            {
                                "fieldName":"LANDAREA",
                                "label":"LANDAREA",
                                "isEditable":false,
                                "visible":false,
                                "format":{
                                    "places":2,
                                    "digitSeparator":true
                                }
                            },
                            {
                                "fieldName":"PLTLIBER",
                                "label":"PLTLIBER",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"PLTFOLIO",
                                "label":"PLTFOLIO",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"DESCRIP",
                                "label":"DESCRIP",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            },
                            {
                                "fieldName":"SDAT_URL",
                                "label":"SDAT_URL",
                                "isEditable":false,
                                "visible":true,
                                "stringFieldOption":"textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false

                    }
                },
                {
                    "id": 2,
                    "popupInfo": {
                        "title": "rSystemValve: {ADMINISTRATIVEAREA}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BYPASSVALVE",
                                "label": "BypassValve",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CLOCKWISETOCLOSE",
                                "label": "ClockwiseToClose",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CURRENTLYOPEN",
                                "label": "CurrentlyOpen",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MOTORIZED",
                                "label": "Motorized",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NORMALLYOPEN",
                                "label": "NormallyOpen",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PERCENTOPEN",
                                "label": "PercentOpen",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "PRESSURESETTING",
                                "label": "PRESSURESETTING",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "REGULATIONTYPE",
                                "label": "RegulationType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TURNSTOCLOSE",
                                "label": "TURNSTOCLOSE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "MAKE",
                                "label": "MAKE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODEL",
                                "label": "MODEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/open.jpg",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 0,
                    "popupInfo": {
                        "title": "Lateral Point: \n{ADDRESS}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCOUNTID",
                                "label": "ACCOUNTID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CRITICALCUSTOMER",
                                "label": "CriticalCustomer",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FF_ELEVATION",
                                "label": "FF_ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "FIXTURE_ELEVATION",
                                "label": "FIXTURE_ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "ADDRESS",
                                "label": "ADDRESS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCTID",
                                "label": "ACCTID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BF_ELEVATION",
                                "label": "BF_ELEVATION",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "TAXLINK",
                                "label": "TAXLINK",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYSTEMCODE",
                                "label": "System Code",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": [
                            {
                                "title": "Source Documents",
                                "type": "image",
                                "caption": "",
                                "value": {
                                    "sourceURL": "https://prod1.spatialsys.com/charlesww_imap/Assets/OpenL.png",
                                    "linkURL": "https://maps.spatialsys.com/charles/ImageLookupViewer/Default.aspx?feat_id={UTIL_ID}"
                                }
                            }
                        ]
                    }
                }
            ]
        }
    ],
        "baseMap": {
        "baseMapLayers": [
            {
                "id": "Gazetteer_6872",
                "opacity": 1,
                "visibility": true,
                "url": "https://prod1.spatialsys.com/arcgis/rest/services/Charles/Gazetteer/MapServer"
            }
        ],
            "title": "Gazetteer"
    },
    "version": "1.9"
}
}