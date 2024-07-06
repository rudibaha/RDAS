var wms_layers = [];


        var lyr_GOOGLESATELITE_0 = new ol.layer.Tile({
            'title': 'GOOGLE SATELITE',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_pt_bkp_blok_2 = new ol.format.GeoJSON();
var features_pt_bkp_blok_2 = format_pt_bkp_blok_2.readFeatures(json_pt_bkp_blok_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pt_bkp_blok_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pt_bkp_blok_2.addFeatures(features_pt_bkp_blok_2);
var lyr_pt_bkp_blok_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pt_bkp_blok_2, 
                style: style_pt_bkp_blok_2,
                popuplayertitle: "pt_bkp_blok",
                interactive: true,
    title: 'pt_bkp_blok<br />\
    <img src="styles/legend/pt_bkp_blok_2_0.png" /> Blok 1<br />\
    <img src="styles/legend/pt_bkp_blok_2_1.png" /> Blok 2<br />\
    <img src="styles/legend/pt_bkp_blok_2_2.png" /> Blok 3<br />\
    <img src="styles/legend/pt_bkp_blok_2_3.png" /> Blok 4<br />\
    <img src="styles/legend/pt_bkp_blok_2_4.png" /> <br />'
        });

lyr_GOOGLESATELITE_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_pt_bkp_blok_2.setVisible(true);
var layersList = [lyr_GOOGLESATELITE_0,lyr_OpenStreetMap_1,lyr_pt_bkp_blok_2];
lyr_pt_bkp_blok_2.set('fieldAliases', {'Blok Tanam': 'Blok Tanam', 'Luas (ha)': 'Luas (ha)', });
lyr_pt_bkp_blok_2.set('fieldImages', {'Blok Tanam': 'TextEdit', 'Luas (ha)': 'TextEdit', });
lyr_pt_bkp_blok_2.set('fieldLabels', {'Blok Tanam': 'inline label - always visible', 'Luas (ha)': 'inline label - always visible', });
lyr_pt_bkp_blok_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});