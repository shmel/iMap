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
}, "itemData": {
    "operationalLayers": [
        {
            "url": "http://demo3.spatialsys.com/ArcGIS/rest/services/CharlesCounty/CharlesBasemap/MapServer",
            "id": "CharlesBasemap_3847",
            "visibility": true,
            "visibleLayers": [
                0,
                6,
                7
            ],
            "opacity": 1,
            "title": "CharlesBasemap"
        },
        {
            "url": "http://demo3.spatialsys.com/arcgis/rest/services/CharlesCounty/CharlesWastewater/MapServer",
            "id": "CharlesWastewater_5182",
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
                25,
                26,
                27,
                28,
                29,
                30,
                32,
                33,
                34,
                38
            ],
            "opacity": 1,
            "title": "CharlesWastewater",
            "layers": [
                {
                    "id": 1,
                    "popupInfo": {
                        "title": "Lateral Point: {ADDRESS}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCOUNTID",
                                "label": "ACCOUNTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CRITICALCUSTOMER",
                                "label": "CriticalCustomer",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FF_ELEVATION",
                                "label": "FF_ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FIXTURE_ELEVATION",
                                "label": "FIXTURE_ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADDRESS",
                                "label": "ADDRESS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCTID",
                                "label": "ACCTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BF_ELEVATION",
                                "label": "BF_ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TAXLINK",
                                "label": "TAXLINK",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 2,
                    "popupInfo": {
                        "title": "Clean Out: {SUBTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DEPTH",
                                "label": "DEPTH",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FRAMEMATERIAL",
                                "label": "FrameMaterial",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCESSDIAMETER",
                                "label": "AccessDiameter",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCESSMATERIAL",
                                "label": "AccessMaterial",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 6,
                    "popupInfo": {
                        "title": "Fitting: {SUBTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE",
                                "label": "JointType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER1",
                                "label": "Diameter1",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER2",
                                "label": "Diameter2",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER3",
                                "label": "Diameter3",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER4",
                                "label": "Diameter4",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DEGREES",
                                "label": "DEGREES",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANGLE",
                                "label": "ANGLE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 11,
                    "popupInfo": {
                        "title": "Manhole: {SUBTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "AncillaryRole",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "SUBTYPE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCESSDIAMETER",
                                "label": "AccessDiameter",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCESSTYPE",
                                "label": "AccessType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GROUNDTYPE",
                                "label": "GROUNDTYPE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "HIGHPIPEELEVATION",
                                "label": "HIGHPIPEELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INTERIORDROP",
                                "label": "INTERIORDROP",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INVERTELEVATION",
                                "label": "INVERTELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WALLMATERIAL",
                                "label": "WALLMATERIAL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUS",
                                "label": "Status",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID1",
                                "label": "IMAGEID1",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID2",
                                "label": "IMAGEID2",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID3",
                                "label": "IMAGEID3",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DROPTYPE",
                                "label": "DropType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DROPTYPECLASS",
                                "label": "DROPTYPECLASS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS2",
                                "label": "COMMENTS2",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CHECKPOINT_ID",
                                "label": "CHECKPOINT_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 16,
                    "popupInfo": {
                        "title": "Network Structure: {SUBTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NAME",
                                "label": "NAME",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALDATE",
                                "label": "OPERATIONALDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "REFERENCEID",
                                "label": "REFERENCEID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCE",
                                "label": "SOURCE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NETWORKUSAGE",
                                "label": "NetworkUsage",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NETWORKOID",
                                "label": "NETWORKOID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTENANCERESP",
                                "label": "MAINTENANCERESP",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CHECKPOINT_ID",
                                "label": "CHECKPOINT_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 23,
                    "popupInfo": {
                        "title": "Pressurized Main: {SUBTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWMEASUREMENTID",
                                "label": "FLOWMEASUREMENTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EXTERIORCOATING",
                                "label": "EXTERIORCOATING",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE1",
                                "label": "JointType1",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE2",
                                "label": "JointType2",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LININGTYPE",
                                "label": "LININGTYPE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPECLASS",
                                "label": "PIPECLASS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROUGHNESS",
                                "label": "ROUGHNESS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DEPTH",
                                "label": "DEPTH",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GROUNDSURFACETYPE",
                                "label": "GROUNDSURFACETYPE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PRESSURERATING",
                                "label": "PRESSURERATING",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAXFLOWRATE",
                                "label": "MAXFLOWRATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CHECKPOINT_ID",
                                "label": "CHECKPOINT_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "SHAPE.LEN",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 26,
                    "popupInfo": {
                        "title": "Lateral Line: {SUBTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWMEASUREMENTID",
                                "label": "FLOWMEASUREMENTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "SHAPE.LEN",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 32,
                    "popupInfo": {
                        "title": "Gravity Main: {SUBTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWMEASUREMENTID",
                                "label": "FLOWMEASUREMENTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EXTERIORCOATING",
                                "label": "EXTERIORCOATING",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE1",
                                "label": "JointType1",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE2",
                                "label": "JointType2",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LININGTYPE",
                                "label": "LININGTYPE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPECLASS",
                                "label": "PIPECLASS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROUGHNESS",
                                "label": "ROUGHNESS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BARRELCOUNT",
                                "label": "BARRELCOUNT",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CROSSSECTIONSHAPE",
                                "label": "CrossSectionShape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UPSTREAMINVERT",
                                "label": "UPSTREAMINVERT",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DOWNSTREAMINVERT",
                                "label": "DOWNSTREAMINVERT",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MEASUREMENT1",
                                "label": "Measurement1",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MEASUREMENT2",
                                "label": "Measurement2",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOMINALDIAMETER",
                                "label": "NominalDiameter",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SLOPE",
                                "label": "SLOPE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPELENGTH",
                                "label": "PIPELENGTH",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUS",
                                "label": "Status",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID1",
                                "label": "IMAGEID1",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID2",
                                "label": "IMAGEID2",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMAGEID3",
                                "label": "IMAGEID3",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RATEDMAXCAPACITY",
                                "label": "RATEDMAXCAPACITY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UPSTREAMMH",
                                "label": "UPSTREAMMH",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DOWNSTREAMMH",
                                "label": "DOWNSTREAMMH",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS2",
                                "label": "COMMENTS2",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PROTECTIVEMATERIAL",
                                "label": "PROTECTIVEMATERIAL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CHECKPOINT_ID",
                                "label": "CHECKPOINT_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "SHAPE.LEN",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 35,
                    "popupInfo": {
                        "title": "Underground Enclosure: {SUBTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COVERMATERIAL",
                                "label": "CoverMaterial",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COVERTYPE",
                                "label": "CoverType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DEPTH",
                                "label": "DEPTH",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FRAMEMATERIAL",
                                "label": "FrameMaterial",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FRAMETYPE",
                                "label": "FRAMETYPE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INVERTELEVATION",
                                "label": "INVERTELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MEASUREMENT1",
                                "label": "Measurement1",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MEASUREMENT2",
                                "label": "Measurement2",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.AREA",
                                "label": "SHAPE.AREA",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "SHAPE.LEN",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 37,
                    "popupInfo": {
                        "title": "Water Structure: {SUBTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALDATE",
                                "label": "OPERATIONALDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTENANCERESP",
                                "label": "MAINTENANCERESP",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.AREA",
                                "label": "SHAPE.AREA",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "SHAPE.LEN",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 38,
                    "popupInfo": {
                        "title": "Casing: {SUBTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RECORDEDLENGTH",
                                "label": "RECORDEDLENGTH",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATION_DATE",
                                "label": "CREATION_DATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QC_STATUS",
                                "label": "QC_STATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.AREA",
                                "label": "SHAPE.AREA",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "SHAPE.LEN",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                }
            ]
        },
        {
            "url": "http://demo3.spatialsys.com/ArcGIS/rest/services/CharlesCounty/CharlesWater/MapServer",
            "id": "CharlesWater_4750",
            "visibility": true,
            "visibleLayers": [
                0,
                1,
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
                2,
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
                3,
                30,
                4,
                5,
                6,
                7,
                8,
                9
            ],
            "opacity": 1,
            "title": "CharlesWater",
            "layers": [
                {
                    "id": 2,
                    "popupInfo": {
                        "title": "wWaterTower: {TOWERNAME}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOWERNAME",
                                "label": "TOWERNAME",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOWERLOCATION",
                                "label": "TOWERLOCATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOWERHEIGHT",
                                "label": "TOWERHEIGHT",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPACITY",
                                "label": "CAPACITY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALDATE",
                                "label": "OPERATIONALDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOPCAPACITYLINE",
                                "label": "TOPCAPACITYLINE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BOTTOMCAPACITYLINE",
                                "label": "BOTTOMCAPACITYLINE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOWERTYPE",
                                "label": "TOWERTYPE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "HEADRANGE",
                                "label": "HEADRANGE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MANUFACTURER",
                                "label": "MANUFACTURER",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODEL",
                                "label": "MODEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "YEAR",
                                "label": "YEAR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONTRACTNUMBER",
                                "label": "CONTRACTNUMBER",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TANKDIAMETER",
                                "label": "TANKDIAMETER",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 3,
                    "popupInfo": {
                        "title": "wMeter: {SUBTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWRANGE",
                                "label": "FLOWRANGE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MEASUREMENTDATE",
                                "label": "MEASUREMENTDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATION",
                                "label": "LOCATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 4,
                    "popupInfo": {
                        "title": "wCurbStop: {SUBTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BYPASSVALVE",
                                "label": "BypassValve",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CLOCKWISETOCLOSE",
                                "label": "ClockwiseToClose",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CURRENTLYOPEN",
                                "label": "CurrentlyOpen",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MOTORIZED",
                                "label": "Motorized",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NORMALLYOPEN",
                                "label": "NormallyOpen",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PERCENTOPEN",
                                "label": "PercentOpen",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PRESSURESETTING",
                                "label": "PRESSURESETTING",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "REGULATIONTYPE",
                                "label": "RegulationType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TURNSTOCLOSE",
                                "label": "TURNSTOCLOSE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERABLE",
                                "label": "Operable",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOOPTAGID",
                                "label": "LOOPTAGID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTUATORTYPE",
                                "label": "ACTUATORTYPE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 6,
                    "popupInfo": {
                        "title": "wNetworkStructure: {SUBTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NAME",
                                "label": "NAME",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALDATE",
                                "label": "OPERATIONALDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "REFERENCEID",
                                "label": "REFERENCEID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCE",
                                "label": "SOURCE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NETWORKUSAGE",
                                "label": "NetworkUsage",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERSTRUCTUREFACILITYID",
                                "label": "WATERSTRUCTUREFACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 8,
                    "popupInfo": {
                        "title": "wFitting: {SUBTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE",
                                "label": "JointType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER1",
                                "label": "Diameter1",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER2",
                                "label": "Diameter2",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER3",
                                "label": "Diameter3",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER4",
                                "label": "Diameter4",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DEGREES",
                                "label": "DEGREES",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RESTRAINTTYPE",
                                "label": "RESTRAINTTYPE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANGLE",
                                "label": "ANGLE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 10,
                    "popupInfo": {
                        "title": "wClearWell: {SUBTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPACITY",
                                "label": "CAPACITY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DEPTH",
                                "label": "DEPTH",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATINGMAX",
                                "label": "OPERATINGMAX",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATINGMIN",
                                "label": "OPERATINGMIN",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATIONID",
                                "label": "STATIONID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER1",
                                "label": "Diameter1",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER2",
                                "label": "Diameter2",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 13,
                    "popupInfo": {
                        "title": "wHydrant: {FACILITYID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BARRELDIAMETER",
                                "label": "BarrelDiameter",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINVALVETYPE",
                                "label": "MAINVALVETYPE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOZZLEDIAMETER1",
                                "label": "NozzleDiameter1",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOZZLEDIAMETER2",
                                "label": "NozzleDiameter2",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOZZLEDIAMETER3",
                                "label": "NozzleDiameter3",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NOZZLEDIAMETER4",
                                "label": "NozzleDiameter4",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OUTLETCONFIGURATION",
                                "label": "OUTLETCONFIGURATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SEATDIAMETER",
                                "label": "SEATDIAMETER",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BURYDEPTH",
                                "label": "BURYDEPTH",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MANUFACTURER",
                                "label": "MANUFACTURER",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAKE",
                                "label": "MAKE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODEL",
                                "label": "MODEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BURYLINE",
                                "label": "BURYLINE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELBOWELEVATION",
                                "label": "ELBOWELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PRESSURECLASS",
                                "label": "PRESSURECLASS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 15,
                    "popupInfo": {
                        "title": "wControlValve: {SUBTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTUATORTYPE",
                                "label": "ACTUATORTYPE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOOPTAGID",
                                "label": "LOOPTAGID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 16,
                    "popupInfo": {
                        "title": "wSystemValve: {SUBTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "ANCILLARYROLE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BYPASSVALVE",
                                "label": "BypassValve",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CLOCKWISETOCLOSE",
                                "label": "ClockwiseToClose",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CURRENTLYOPEN",
                                "label": "CurrentlyOpen",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MOTORIZED",
                                "label": "Motorized",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NORMALLYOPEN",
                                "label": "NormallyOpen",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PERCENTOPEN",
                                "label": "PercentOpen",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PRESSURESETTING",
                                "label": "PRESSURESETTING",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "REGULATIONTYPE",
                                "label": "RegulationType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TURNSTOCLOSE",
                                "label": "TURNSTOCLOSE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERABLE",
                                "label": "Operable",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOOPTAGID",
                                "label": "LOOPTAGID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTUATORTYPE",
                                "label": "ACTUATORTYPE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 18,
                    "popupInfo": {
                        "title": "Well: {NAME}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NAME",
                                "label": "NAME",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DESCRIPTION",
                                "label": "DESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLATIONDATE",
                                "label": "INSTALLATIONDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPACITY",
                                "label": "CAPACITY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TYPE",
                                "label": "TYPE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALTIYLEVEL",
                                "label": "UTILITYQUALTIYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 22,
                    "popupInfo": {
                        "title": "wPressurizedMain: {SUBTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWMEASUREMENTID",
                                "label": "FLOWMEASUREMENTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EXTERIORCOATING",
                                "label": "EXTERIORCOATING",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE1",
                                "label": "JointType1",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "JOINTTYPE2",
                                "label": "JointType2",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LININGTYPE",
                                "label": "LININGTYPE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPECLASS",
                                "label": "PIPECLASS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROUGHNESS",
                                "label": "ROUGHNESS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DEPTH",
                                "label": "DEPTH",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPELENGTH",
                                "label": "PIPELENGTH",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAXFLOWRATE",
                                "label": "MAXFLOWRATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GROUNDSURFACETYPE",
                                "label": "GROUNDSURFACETYPE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PRESSURERATING",
                                "label": "PRESSURERATING",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "SHAPE.LEN",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 25,
                    "popupInfo": {
                        "title": "wLateralLine: {SUBTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWMEASUREMENTID",
                                "label": "FLOWMEASUREMENTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONNECTIONTYPE",
                                "label": "CONNECTIONTYPE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "SHAPE.LEN",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 27,
                    "popupInfo": {
                        "title": "wWaterStructure: {SUBTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALDATE",
                                "label": "OPERATIONALDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.AREA",
                                "label": "SHAPE.AREA",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "SHAPE.LEN",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 28,
                    "popupInfo": {
                        "title": "wThrustProtection: {SUBTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.AREA",
                                "label": "SHAPE.AREA",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "SHAPE.LEN",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 29,
                    "popupInfo": {
                        "title": "wUndergroundEnclosure: {SUBTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COVERMATERIAL",
                                "label": "CoverMaterial",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COVERTYPE",
                                "label": "CoverType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DEPTH",
                                "label": "DEPTH",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FRAMEMATERIAL",
                                "label": "FrameMaterial",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FRAMETYPE",
                                "label": "FRAMETYPE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INVERTELEVATION",
                                "label": "INVERTELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MEASUREMENT1",
                                "label": "Measurement1",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MEASUREMENT2",
                                "label": "Measurement2",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.AREA",
                                "label": "SHAPE.AREA",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "SHAPE.LEN",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 30,
                    "popupInfo": {
                        "title": "wCasing: {SUBTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ADMINISTRATIVEAREA",
                                "label": "AdministrativeArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "FACILITYID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "INSTALLDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERATIONALAREA",
                                "label": "OperationalArea",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LIFECYCLESTATUS",
                                "label": "LifecycleStatus",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBTYPE",
                                "label": "Subtype",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WORKORDERID",
                                "label": "WORKORDERID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "ELEVATION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONDESCRIPTION",
                                "label": "LOCATIONDESCRIPTION",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "WaterType",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RECORDEDLENGTH",
                                "label": "RECORDEDLENGTH",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTIL_ID",
                                "label": "UTIL_ID",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UTILITYQUALITYLEVEL",
                                "label": "UTILITYQUALITYLEVEL",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SOURCEDOCACCURACY",
                                "label": "SOURCEDOCACCURACY",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATOR",
                                "label": "CREATOR",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONDATE",
                                "label": "CREATIONDATE",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": {"dateFormat": "shortDateShortTime"},
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "QCSTATUS",
                                "label": "QCSTATUS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "COMMENTS",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": true,
                                "format": null,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.AREA",
                                "label": "SHAPE.AREA",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "SHAPE.LEN",
                                "isEditable": false,
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                }
            ]
        }
    ],
        "baseMap": {
        "baseMapLayers": [{
            "opacity": 1,
            "visibility": true,
            "url": "https://prod1.spatialsys.com/arcgis/rest/services/Charles/Gazetteer/MapServer"
        }],
            "title": "Charles Basemap"
    },
    "version": "1.5",
        "bookmarks": [
        {
            "name": "Brawner's Estate",
            "extent": {
                "xmin": -8580922.592973623,
                "ymin": 4667056.239498104,
                "xmax": -8579956.381163038,
                "ymax": 4667763.282009683,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Brentwood",
            "extent": {
                "xmin": -8572219.389480753,
                "ymin": 4665887.572614601,
                "xmax": -8570286.965859367,
                "ymax": 4667301.657637915,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Bryan's Road",
            "extent": {
                "xmin": -8582499.330793602,
                "ymin": 4668667.788501311,
                "xmax": -8580566.907172216,
                "ymax": 4670081.873524625,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Demarr Road Business Park",
            "extent": {
                "xmin": -8565393.142024467,
                "ymin": 4662750.444837578,
                "xmax": -8564426.930213882,
                "ymax": 4663457.487349156,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Dorchester Circle",
            "extent": {
                "xmin": -8566036.88512205,
                "ymin": 4666015.141975292,
                "xmax": -8565070.673311464,
                "ymax": 4666722.184486871,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Eutaw Forest",
            "extent": {
                "xmin": -8574726.005973034,
                "ymin": 4667270.519637359,
                "xmax": -8572793.582351647,
                "ymax": 4668684.604660673,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Greenhaven Run",
            "extent": {
                "xmin": -8567361.614298752,
                "ymin": 4666044.692238728,
                "xmax": -8566395.402488166,
                "ymax": 4666752.929078873,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Indian Head Manor",
            "extent": {
                "xmin": -8578693.403742319,
                "ymin": 4668719.901577111,
                "xmax": -8577727.191931734,
                "ymax": 4669428.138417257,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Laurel Acres",
            "extent": {
                "xmin": -8581570.54126019,
                "ymin": 4666207.034272138,
                "xmax": -8580604.329449605,
                "ymax": 4666915.271112284,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Laurel Branch #3",
            "extent": {
                "xmin": -8572261.347244842,
                "ymin": 4668900.245190691,
                "xmax": -8571295.135434257,
                "ymax": 4669608.482030837,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "MWWTP",
            "extent": {
                "xmin": -8584769.550326932,
                "ymin": 4661374.7808900755,
                "xmax": -8582837.126705546,
                "ymax": 4662791.254570523,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Montgomery Lane",
            "extent": {
                "xmin": -8560567.676246127,
                "ymin": 4666735.5246627815,
                "xmax": -8559601.464435542,
                "ymax": 4667443.761502927,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Mr. Tire",
            "extent": {
                "xmin": -8558947.270962864,
                "ymin": 4671579.124166122,
                "xmax": -8558705.718010273,
                "ymax": 4671756.183376119,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Northe Point",
            "extent": {
                "xmin": -8570832.87024984,
                "ymin": 4669411.417817076,
                "xmax": -8569866.658439254,
                "ymax": 4670119.654657221,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Pinefield",
            "extent": {
                "xmin": -8556775.623016823,
                "ymin": 4670808.18507613,
                "xmax": -8555809.411206238,
                "ymax": 4671516.421916275,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Pomonkey",
            "extent": {
                "xmin": -8580397.650578866,
                "ymin": 4666210.617257633,
                "xmax": -8579431.43876828,
                "ymax": 4666918.854097779,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Potomac Heights",
            "extent": {
                "xmin": -8587311.618652927,
                "ymin": 4664833.556419918,
                "xmax": -8586345.406842342,
                "ymax": 4665541.793260064,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Route 925B",
            "extent": {
                "xmin": -8563780.061480185,
                "ymin": 4665378.767410505,
                "xmax": -8562813.8496696,
                "ymax": 4666087.00425065,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Route 5",
            "extent": {
                "xmin": -8558864.872485146,
                "ymin": 4666122.622359471,
                "xmax": -8557898.66067456,
                "ymax": 4666830.859199617,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Ryon Woods",
            "extent": {
                "xmin": -8560138.026737558,
                "ymin": 4667159.299555595,
                "xmax": -8559171.814926973,
                "ymax": 4667867.536395741,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Southwinds",
            "extent": {
                "xmin": -8566377.796335658,
                "ymin": 4663770.989411096,
                "xmax": -8565411.584525073,
                "ymax": 4664479.226251242,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "St. Charles 2A",
            "extent": {
                "xmin": -8561999.984973503,
                "ymin": 4663866.23711435,
                "xmax": -8561033.773162918,
                "ymax": 4664574.473954496,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "St. Charles 3A",
            "extent": {
                "xmin": -8562958.5717954,
                "ymin": 4662344.961102159,
                "xmax": -8561992.359984815,
                "ymax": 4663053.197942304,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "St. Charles 5A",
            "extent": {
                "xmin": -8561078.698630963,
                "ymin": 4662669.818472388,
                "xmax": -8560112.486820377,
                "ymax": 4663378.055312534,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "St. Marks",
            "extent": {
                "xmin": -8560151.899663074,
                "ymin": 4664596.270450844,
                "xmax": -8558219.476041688,
                "ymax": 4666012.744131292,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Strawberry Hills",
            "extent": {
                "xmin": -8580172.993092693,
                "ymin": 4670880.35881727,
                "xmax": -8578240.569471307,
                "ymax": 4672294.443840584,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Swan Point Phase 1",
            "extent": {
                "xmin": -8563323.40567012,
                "ymin": 4621334.832545655,
                "xmax": -8561390.982048733,
                "ymax": 4622748.917568969,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Thomas Stone",
            "extent": {
                "xmin": -8559281.15191217,
                "ymin": 4666431.48490526,
                "xmax": -8558314.940101584,
                "ymax": 4667138.527416838,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Wakefield",
            "extent": {
                "xmin": -8559285.929226384,
                "ymin": 4663780.075486555,
                "xmax": -8558319.717415798,
                "ymax": 4664487.117998133,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "White Plains C.C.",
            "extent": {
                "xmin": -8566122.17646124,
                "ymin": 4662675.500526916,
                "xmax": -8565155.964650655,
                "ymax": 4663382.543038495,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "White Plains Park",
            "extent": {
                "xmin": -8563142.326686667,
                "ymin": 4661004.634861744,
                "xmax": -8562176.114876082,
                "ymax": 4661711.677373323,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Zekiah",
            "extent": {
                "xmin": -8560296.241711693,
                "ymin": 4668001.011606894,
                "xmax": -8558363.818090307,
                "ymax": 4669415.096630208,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Bensville Water Tower",
            "extent": {
                "xmin": -8577137.254941186,
                "ymin": 4665137.39167721,
                "xmax": -8572197.511988128,
                "ymax": 4669288.877776058,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Berry Hill Manor Water Tower",
            "extent": {
                "xmin": -8572759.22318152,
                "ymin": 4669086.981775733,
                "xmax": -8570289.351704989,
                "ymax": 4671162.724825157,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Bryans Road Firehouse Water Tower",
            "extent": {
                "xmin": -8581150.462993104,
                "ymin": 4667186.940554377,
                "xmax": -8578680.591516573,
                "ymax": 4669262.683603801,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Hunter's Brook Water Tower",
            "extent": {
                "xmin": -8585381.874395614,
                "ymin": 4659450.630167179,
                "xmax": -8582912.002919083,
                "ymax": 4661526.373216603,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Pinefield Elevated Water Storage Tank",
            "extent": {
                "xmin": -8557542.98885688,
                "ymin": 4670782.086845574,
                "xmax": -8555073.117380349,
                "ymax": 4672857.829894998,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "St. Charles Water Tower",
            "extent": {
                "xmin": -8562614.038969984,
                "ymin": 4663992.943352264,
                "xmax": -8560144.167493453,
                "ymax": 4666068.6864016885,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Swan Point Water Tower",
            "extent": {
                "xmin": -8563330.636110207,
                "ymin": 4621313.612012152,
                "xmax": -8560860.764633676,
                "ymax": 4623389.355061576,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Waldorf Water Tower",
            "extent": {
                "xmin": -8566956.275265956,
                "ymin": 4669823.16008417,
                "xmax": -8564486.403789425,
                "ymax": 4671898.903133594,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Westlake Elevated Storage Tank",
            "extent": {
                "xmin": -8566442.713982077,
                "ymin": 4666478.865151122,
                "xmax": -8565207.77824395,
                "ymax": 4667516.736675719,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Demarr Water Tank",
            "extent": {
                "xmin": -8565405.976777691,
                "ymin": 4662706.011212108,
                "xmax": -8564171.041039564,
                "ymax": 4663743.882736704,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Old Washington Water Tank",
            "extent": {
                "xmin": -8562959.745981902,
                "ymin": 4666810.994407927,
                "xmax": -8560489.87450537,
                "ymax": 4668886.737457351,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Strawberry Hills Water Tower",
            "extent": {
                "xmin": -8580486.200287102,
                "ymin": 4670541.7206968805,
                "xmax": -8578016.32881057,
                "ymax": 4672617.463746305,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Marshall's Corner Well House",
            "extent": {
                "xmin": -8573308.28559963,
                "ymin": 4662059.002050159,
                "xmax": -8572073.349861503,
                "ymax": 4663096.873574755,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Malcom Elementary Well House",
            "extent": {
                "xmin": -8549366.775146421,
                "ymin": 4666757.450259441,
                "xmax": -8548749.307277221,
                "ymax": 4667276.386021853,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Brick Well House",
            "extent": {
                "xmin": -8549366.775146421,
                "ymin": 4666757.450259441,
                "xmax": -8548749.307277221,
                "ymax": 4667276.386021853,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Forest Glen Well House",
            "extent": {
                "xmin": -8575535.349762296,
                "ymin": 4664786.808123958,
                "xmax": -8574300.414024169,
                "ymax": 4665824.679648555,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Pinefield No.1 Well House",
            "extent": {
                "xmin": -8555998.52306415,
                "ymin": 4670877.883815362,
                "xmax": -8553528.651587619,
                "ymax": 4672953.626864786,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Oakwood Subdivision 1 Well House",
            "extent": {
                "xmin": -8576051.299703918,
                "ymin": 4658603.171968407,
                "xmax": -8574816.36396579,
                "ymax": 4659641.043493004,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "South Hampton Well House",
            "extent": {
                "xmin": -8582456.483808545,
                "ymin": 4668209.224856071,
                "xmax": -8579986.612332014,
                "ymax": 4670284.967905495,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Bryans Road #6 Well House",
            "extent": {
                "xmin": -8580485.841672946,
                "ymin": 4667624.003858287,
                "xmax": -8579250.905934818,
                "ymax": 4668661.8753828835,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Hunter's Brooke 1 Well House",
            "extent": {
                "xmin": -8585593.909605635,
                "ymin": 4659618.486825691,
                "xmax": -8583124.038129104,
                "ymax": 4661694.229875115,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Hunter's Brooke 2 Well House",
            "extent": {
                "xmin": -8585593.909605635,
                "ymin": 4659618.486825691,
                "xmax": -8583124.038129104,
                "ymax": 4661694.229875115,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Bensville #2 Well House",
            "extent": {
                "xmin": -8575648.73562845,
                "ymin": 4667228.748454498,
                "xmax": -8574413.799890323,
                "ymax": 4668266.619979095,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Eutaw Forest No. 1 Well House",
            "extent": {
                "xmin": -8574578.617232421,
                "ymin": 4667976.995301677,
                "xmax": -8573343.681494294,
                "ymax": 4669014.8668262735,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Laurel Branch #3 Well House",
            "extent": {
                "xmin": -8573348.458808485,
                "ymin": 4669128.925204566,
                "xmax": -8572113.523070358,
                "ymax": 4670166.796729162,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Laurel Branch #1 Well House",
            "extent": {
                "xmin": -8573348.458808485,
                "ymin": 4669128.925204566,
                "xmax": -8572113.523070358,
                "ymax": 4670166.796729162,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Brookwood Estates 2 Well House",
            "extent": {
                "xmin": -8571541.43968676,
                "ymin": 4665407.397389882,
                "xmax": -8569071.56821023,
                "ymax": 4667483.140439306,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Genevieve Drive No. 1 Well House",
            "extent": {
                "xmin": -8571469.779972741,
                "ymin": 4665158.977047949,
                "xmax": -8568999.90849621,
                "ymax": 4667234.720097373,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Westwood Drive Well House",
            "extent": {
                "xmin": -8565568.602523174,
                "ymin": 4671070.306290303,
                "xmax": -8564333.666785046,
                "ymax": 4672108.1778149,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Mt. Carmel 1 Well House",
            "extent": {
                "xmin": -8572421.659840738,
                "ymin": 4658616.445157945,
                "xmax": -8569951.788364207,
                "ymax": 4660692.188207369,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Overlook Circle Well House",
            "extent": {
                "xmin": -8570138.138976403,
                "ymin": 4631759.848679601,
                "xmax": -8568903.203238275,
                "ymax": 4632797.720204198,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Cobb Island 1 Well House",
            "extent": {
                "xmin": -8560145.542886758,
                "ymin": 4620111.180198587,
                "xmax": -8558910.60714863,
                "ymax": 4621149.051723183,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Bel Alton Estates 1 Well House",
            "extent": {
                "xmin": -8570188.651806416,
                "ymin": 4645064.286948039,
                "xmax": -8567718.780329885,
                "ymax": 4647140.029997463,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Turkey Hill 1 Well House",
            "extent": {
                "xmin": -8570963.671579596,
                "ymin": 4660263.900769481,
                "xmax": -8569728.735841468,
                "ymax": 4661301.772294078,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Turkey Hill 2 Well House",
            "extent": {
                "xmin": -8570963.671579596,
                "ymin": 4660263.900769481,
                "xmax": -8569728.735841468,
                "ymax": 4661301.772294078,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Chapel Point Woods 1 Well House",
            "extent": {
                "xmin": -8572095.895060845,
                "ymin": 4644422.326657684,
                "xmax": -8569626.023584314,
                "ymax": 4646498.069707108,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Chapel Point Woods 2 Well House",
            "extent": {
                "xmin": -8572095.895060845,
                "ymin": 4644422.326657684,
                "xmax": -8569626.023584314,
                "ymax": 4646498.069707108,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Cleveland Park Well House",
            "extent": {
                "xmin": -8564925.146344896,
                "ymin": 4661508.391136585,
                "xmax": -8562455.274868365,
                "ymax": 4663584.134186009,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Mt. Carmel 2 Well House",
            "extent": {
                "xmin": -8572302.97695809,
                "ymin": 4658704.718244958,
                "xmax": -8569833.10548156,
                "ymax": 4660780.461294382,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Bel Alton Estates 2 Well House",
            "extent": {
                "xmin": -8570189.015394522,
                "ymin": 4645065.486009961,
                "xmax": -8567719.14391799,
                "ymax": 4647141.229059385,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Mt. Carmel 3 Well House",
            "extent": {
                "xmin": -8572365.813317256,
                "ymin": 4658447.327019017,
                "xmax": -8569895.941840725,
                "ymax": 4660523.070068441,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Ellenwood 1 Well House",
            "extent": {
                "xmin": -8566296.235539984,
                "ymin": 4652411.190441637,
                "xmax": -8563826.364063453,
                "ymax": 4654486.933491061,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Ellenwood 2 Well House",
            "extent": {
                "xmin": -8566296.235539984,
                "ymin": 4652411.190441637,
                "xmax": -8563826.364063453,
                "ymax": 4654486.933491061,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "St. Paul's No. 1 Well House",
            "extent": {
                "xmin": -8562283.29155502,
                "ymin": 4661812.9449207075,
                "xmax": -8559813.420078488,
                "ymax": 4663888.687970132,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "St. John's Well House",
            "extent": {
                "xmin": -8568250.754239716,
                "ymin": 4666534.722910209,
                "xmax": -8567015.818501588,
                "ymax": 4667572.594434805,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Billingsley Well 12 Well House",
            "extent": {
                "xmin": -8565515.836495021,
                "ymin": 4663860.621248744,
                "xmax": -8564280.900756894,
                "ymax": 4664898.492773341,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "John Hanson Well House",
            "extent": {
                "xmin": -8560359.351286689,
                "ymin": 4667073.052321839,
                "xmax": -8557889.479810158,
                "ymax": 4669148.795371263,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "St. Peter's/White Oak Well House",
            "extent": {
                "xmin": -8558623.991878785,
                "ymin": 4670967.757778853,
                "xmax": -8557389.056140658,
                "ymax": 4672005.62930345,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Huntington Well House",
            "extent": {
                "xmin": -8559370.905199707,
                "ymin": 4663591.703513371,
                "xmax": -8556901.033723176,
                "ymax": 4665667.446562795,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "St. Francis Well House",
            "extent": {
                "xmin": -8536699.444037424,
                "ymin": 4650695.528199247,
                "xmax": -8534229.572560893,
                "ymax": 4652771.271248671,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Benedict Well House",
            "extent": {
                "xmin": -8537110.29306447,
                "ymin": 4650745.689999061,
                "xmax": -8534640.421587938,
                "ymax": 4652821.433048485,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "White Plains Regional Park 1 Well House",
            "extent": {
                "xmin": -8563900.056924814,
                "ymin": 4660571.696554537,
                "xmax": -8561430.185448283,
                "ymax": 4662647.439603961,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Strawberry Hills Well House",
            "extent": {
                "xmin": -8580403.289063454,
                "ymin": 4670396.243346575,
                "xmax": -8577933.417586923,
                "ymax": 4672471.986395999,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "St. Charles Town Center 2 Well House",
            "extent": {
                "xmin": -8565035.411052475,
                "ymin": 4665302.432008885,
                "xmax": -8562565.539575944,
                "ymax": 4667378.175058309,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Oakwood Subdivision 2 Well House",
            "extent": {
                "xmin": -8576051.299703918,
                "ymin": 4658603.171968407,
                "xmax": -8574816.36396579,
                "ymax": 4659641.043493004,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "White Plains Regional Park 2 Well House",
            "extent": {
                "xmin": -8563900.056924814,
                "ymin": 4660571.696554537,
                "xmax": -8561430.185448283,
                "ymax": 4662647.439603961,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "St. Charles Town Center 1 Well House",
            "extent": {
                "xmin": -8565034.411264362,
                "ymin": 4665304.37067843,
                "xmax": -8562564.53978783,
                "ymax": 4667380.113727855,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "White Plains Regional Park 3 Well House",
            "extent": {
                "xmin": -8563900.056924814,
                "ymin": 4660574.08521167,
                "xmax": -8561430.185448283,
                "ymax": 4662649.828261094,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Smallwood Waldorf 6 Well House",
            "extent": {
                "xmin": -8561988.11681895,
                "ymin": 4664495.6630613655,
                "xmax": -8560753.181080822,
                "ymax": 4665533.534585962,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Jude House Well House",
            "extent": {
                "xmin": -8571102.038113639,
                "ymin": 4642858.144391884,
                "xmax": -8569867.102375511,
                "ymax": 4643896.015916481,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Eutaw Forest No.2 Well House",
            "extent": {
                "xmin": -8574766.238156887,
                "ymin": 4666993.733235048,
                "xmax": -8572296.366680356,
                "ymax": 4669069.476284472,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Cliffton Well House",
            "extent": {
                "xmin": -8570576.261545518,
                "ymin": 4631414.448205854,
                "xmax": -8568106.390068987,
                "ymax": 4633490.191255278,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Waldorf Sanitary District North Well House",
            "extent": {
                "xmin": -8558792.659106568,
                "ymin": 4671097.209171457,
                "xmax": -8556322.787630036,
                "ymax": 4673172.952220881,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Cobb Island 2 Well House",
            "extent": {
                "xmin": -8557032.320028825,
                "ymin": 4615209.160473826,
                "xmax": -8552092.577075766,
                "ymax": 4619360.646572675,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "McDonough High School Well House",
            "extent": {
                "xmin": -8576117.735551085,
                "ymin": 4657624.545200757,
                "xmax": -8574882.799812958,
                "ymax": 4658662.416725353,
                "spatialReference": {"wkid": 102100}
            }
        },
        {
            "name": "Gilbert Run Well House",
            "extent": {
                "xmin": -8556831.26924914,
                "ymin": 4647686.048461873,
                "xmax": -8554361.397772608,
                "ymax": 4649761.791511297,
                "spatialReference": {"wkid": 102100}
            }
        }
    ]
}
}