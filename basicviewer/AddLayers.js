/* This is the place to define the layers you want available to users in the Contents > Add Layers pane.
    You can start with the script in AGStoJSON (sibling to basicviewer folder) to crawl your ArcGIS Server and output a JSON object. And/or you can edit
    the file manually. Services can be from anywhere and different servers. Only AGS map, image, and feature layer services, and WMS are supported at this time.
    KML can be added, however it has not been fully implemented in the Legend tree.
 */
{
    "name": "Fiber Telecomm Data",
    "id": "root",
    "children": [
        {
            "name": "Charles_Utilities_FiberComm",
            "id": "Charles_Utilities_FiberComm",
            "url": "https://prod1.spatialsys.com/arcgis/rest/services/CharlesUtilities/Charles_Utilities_FiberComm/MapServer",
            "type": "MapServer"
        }
                  ]
}

