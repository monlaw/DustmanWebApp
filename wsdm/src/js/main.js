var allLayer=encodeURI("http://54.229.161.91:8080/geoserver/recycling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=recycling:repak_sites&&outputFormat=application/json");
var cansLayer = encodeURI("http://54.229.161.91:8080/geoserver/recycling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=recycling:repak_sites&CQL_FILTER=Comments ilike '%Cans%'&outputFormat=application/json");
var glassLayer = encodeURI("http://54.229.161.91:8080/geoserver/recycling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=recycling:repak_sites&CQL_FILTER=Comments ilike '%Glass%' OR Comments ilike '%Jars%' &outputFormat=application/json");
var textileLayer = encodeURI("http://54.229.161.91:8080/geoserver/recycling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=recycling:repak_sites&CQL_FILTER=Comments ilike '%Textiles%' OR Comments ilike '%Clothes%' &outputFormat=application/json");
var batteriesLayer = encodeURI("http://54.229.161.91:8080/geoserver/recycling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=recycling:repak_sites&CQL_FILTER=Comments ilike '%Batteries%' &outputFormat=application/json");
var paperLayer = encodeURI("http://54.229.161.91:8080/geoserver/recycling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=recycling:repak_sites&CQL_FILTER=Comments ilike '%paper%' OR Comments ilike '%beverage cartons%' OR Comments ilike '%card%' OR Comments ilike '%magazines%' OR Comments ilike '%paper%'&outputFormat=application/json");
var plasticLayer = encodeURI("http://54.229.161.91:8080/geoserver/recycling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=recycling:repak_sites&CQL_FILTER=Comments ilike '%plastic%' &outputFormat=application/json");
var greenWasteLayer = encodeURI("http://54.229.161.91:8080/geoserver/recycling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=recycling:repak_sites&CQL_FILTER=Comments ilike '%wood%' OR Comments ilike '%branches%' OR  Comments ilike '%grass%' OR Comments ilike '%Hedge cuttings%' OR Comments ilike '%Leaves%' OR Comments ilike '%Plants%' OR Comments ilike '%prunings%' &outputFormat=application/json");
var fluorescentTubesLayer = encodeURI("http://54.229.161.91:8080/geoserver/recycling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=recycling:repak_sites&CQL_FILTER=Comments ilike '%Fluorescent Tubes%'&outputFormat=application/json");
var wasteOilLayer = encodeURI("http://54.229.161.91:8080/geoserver/recycling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=recycling:repak_sites&CQL_FILTER=Comments ilike '%Waste Oil%'&outputFormat=application/json");
var whitePolystyreneLayer = encodeURI("http://54.229.161.91:8080/geoserver/recycling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=recycling:repak_sites&CQL_FILTER=Comments ilike '%White Polystyrene%'&outputFormat=application/json");
var christmasTreeLayer = encodeURI("http://54.229.161.91:8080/geoserver/recycling/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=recycling:repak_sites&CQL_FILTER=Comments ilike '%Christmas Trees%'&outputFormat=application/json");

var tileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});

var allCluster = L.markerClusterGroup();
var canCluster = L.markerClusterGroup();
var glassCluster = L.markerClusterGroup();
var textileCluster = L.markerClusterGroup();
var batteriesCluster = L.markerClusterGroup();
var paperCluster = L.markerClusterGroup();
var plasticCluster = L.markerClusterGroup();
var greenWasteCluster = L.markerClusterGroup();
var fluorescentTubesCluster = L.markerClusterGroup();
var wasteOilCluster = L.markerClusterGroup();
var whitePolystyreneCluster = L.markerClusterGroup();
var christmasTreeCluster = L.markerClusterGroup();

function decideIcon(feature) {
    var properties = feature.properties;

    options = {
        iconUrl: 'js/lib/images/markericon.png',
        iconSize: [64, 64]
    };

    var poiName = properties["POI_Name"];
    if (poiName === "Recycling Centre") {
        options.iconUrl = "./images/icons/recycling_centre64.png";
    }
    else if (poiName === "Bring Bank") {
        options.iconUrl = "./images/icons/bring_bank64.png";
    }
    return L.icon(options);
}



function onEachFeatureLabel(feature, layer) {
    var properties = feature.properties;
    var popUpMessage = "<p><b>Location:</b>" + properties['Location'] + "<br><b>County:</b>" + properties['County'] + "<br><b>Town:</b>" + properties['Town'] + "<br><b>Items:</b>" + properties['Comments'] + "</p>";
    var ico = decideIcon(feature);
    layer.setIcon(ico);
    layer.bindPopup(popUpMessage);

}

function onEachFeatureAll(feature, layer) {
    onEachFeatureLabel(feature,layer);
    allCluster.addLayer(layer);
}

function onEachFeatureLabelCans(feature, layer) {
    onEachFeatureLabel(feature, layer);
    canCluster.addLayer(layer);
}

function onEachFeatureLabelGlass(feature, layer) {
    onEachFeatureLabel(feature, layer);
    glassCluster.addLayer(layer);
}

function onEachFeatureLabelTextile(feature, layer) {
    onEachFeatureLabel(feature, layer);
    textileCluster.addLayer(layer);
}

function onEachFeatureLabelBattery(feature, layer) {
    onEachFeatureLabel(feature, layer);
    batteriesCluster.addLayer(layer);
}

function onEachFeatureLabelPaper(feature, layer) {
    onEachFeatureLabel(feature, layer);
    paperCluster.addLayer(layer);
}

function onEachFeatureLabelPlastic(feature, layer) {
    onEachFeatureLabel(feature, layer);
    plasticCluster.addLayer(layer);
}
function onEachFeatureLabelGreenWaste(feature, layer) {
    onEachFeatureLabel(feature, layer);
    greenWasteCluster.addLayer(layer);
}
function onEachFeatureLabelFluorescentTubes(feature, layer) {
    onEachFeatureLabel(feature, layer);
    fluorescentTubesCluster.addLayer(layer);
}
function onEachFeatureLabelWasteOil(feature, layer) {
    onEachFeatureLabel(feature, layer);
    wasteOilCluster.addLayer(layer);
}
function onEachFeatureLabelWhitePolystyrene(feature, layer) {
    onEachFeatureLabel(feature, layer);
    whitePolystyreneCluster.addLayer(layer);
}

function onEachFeatureLabelChristmasTree(feature, layer) {
    onEachFeatureLabel(feature, layer);
    christmasTreeCluster.addLayer(layer);
}


L.geoJson.ajax(allLayer,{
    onEachFeature: onEachFeatureAll
});

L.geoJson.ajax(cansLayer, {
    onEachFeature: onEachFeatureLabelCans
});

L.geoJson.ajax(glassLayer, {
    onEachFeature: onEachFeatureLabelGlass
});

L.geoJson.ajax(textileLayer, {
    onEachFeature: onEachFeatureLabelTextile
});


L.geoJson.ajax(batteriesLayer, {
    onEachFeature: onEachFeatureLabelBattery
});


L.geoJson.ajax(paperLayer, {
    onEachFeature: onEachFeatureLabelPaper
});


L.geoJson.ajax(plasticLayer, {
    onEachFeature: onEachFeatureLabelPlastic
});


L.geoJson.ajax(greenWasteLayer, {
    onEachFeature: onEachFeatureLabelGreenWaste
});


L.geoJson.ajax(fluorescentTubesLayer, {
    onEachFeature: onEachFeatureLabelFluorescentTubes
});

L.geoJson.ajax(wasteOilLayer, {
    onEachFeature: onEachFeatureLabelWasteOil
});

L.geoJson.ajax(whitePolystyreneLayer, {
    onEachFeature: onEachFeatureLabelWhitePolystyrene
});

L.geoJson.ajax(christmasTreeLayer, {
    onEachFeature: onEachFeatureLabelChristmasTree
});


var map = L.map('mapid', {
    center: [53.349, -6.26],
    zoom: 12,
    maxZoom: 20
});

var overLayers = {
    "All": allCluster,
    "<i class='icon icon-can'></i>Cans": canCluster,
    "<i class='icon icon-glass'></i>Glass": glassCluster,
    "<i class='icon icon-textiles'></i>Textile": textileCluster,
    "<i class='icon icon-battery'></i>Batteries": batteriesCluster,
    "<i class='icon icon-paper'></i>Paper": paperCluster,
    "<i class='icon icon-plastic'></i>Plastic": plasticCluster,
    "<i class='icon icon-green_waste'></i>Green Waste": greenWasteCluster,
    "<i class='icon icon-fluorescent'></i>Fluorescent Tubes": fluorescentTubesCluster,
    "<i class='icon icon-wasteoil'></i>Oil": wasteOilCluster,
    "<i class='icon icon-polystyrene'></i>Polystyrene": whitePolystyreneCluster,
    "<i class='icon icon-christmas'></i>Christmas Trees": christmasTreeCluster
};

tileLayer.addTo(map);
var panelLayers = L.control.layers(null, overLayers, {collapsed: true});
panelLayers.addTo(map);

map.layers= [allCluster, canCluster, glassCluster, textileCluster, batteriesCluster, paperCluster, plasticCluster, greenWasteCluster, fluorescentTubesCluster, wasteOilCluster, whitePolystyreneCluster, christmasTreeCluster];
L.control.locate().addTo(map);
