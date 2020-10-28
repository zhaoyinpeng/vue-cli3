proj4.defs("EPSG:4490", "+proj=longlat +ellps=GRS80 +no_defs");
var projection4490 = ol.proj.get('EPSG:4490');//设置坐标系
var projectionExtent4490 = [-180, -90, 180, 90]
projection4490.setExtent(projectionExtent4490)

proj4.defs("EPSG:4524", "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=36500000 +y_0=0 +ellps=GRS80 +units=m +no_defs");
var projection4524 = ol.proj.get('EPSG:4524');//设置坐标系
var projectionExtent4524 = [36140120.04743978, 2324070.2608569125, 36911721.28242337, 2923331.914514997]
projection4524.setExtent(projectionExtent4524)

var resolutions4490 = [
  1.40625,
  0.703125,
  0.3515625,
  0.17578125,
  0.087890625,
  0.0439453125,
  0.02197265625,
  0.010986328125,
  0.0054931640625,
  0.00274658203125,
  0.001373291015625,
  0.0006866455078125,
  0.00034332275390625,
  0.000171661376953125,
  0.0000858306884765625,
  0.00004291534423828125,
  0.000021457672119140625,
  0.000010728836059570312,
  0.000005364418029785156,
  0.000002682209014892578,
  0.000001341104507446289
];
var matrixIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var resolutions4524 = [
  1314.9035538081646,
  657.4517769040823,
  328.72588845204115,
  164.36294422602057,
  82.18147211301029,
  41.09073605650514,
  20.54536802825257,
  10.272684014126286,
  5.136342007063143,
  2.5681710035315715,
  1.2840855017657857,
  0.6420427508828929,
  0.3210213754414464,
  0.1605106877207232,
  0.0802553438603616,
  0.0401276719301808
]
//瓦片矩阵
// 
//设置地图投影
var projection4524 = new ol.proj.Projection({
  code: 'EPSG:4524',
  units: 'm',
  axisOrientation: 'neu',
  extent: projectionExtent4524,
  global: false
})
var center4490 = [108.54449462890625, 22.875946044921875];//地图中心点，默认南宁
var center4524 = [36525920.66493157, 2623701.0876859548]
var map = new ol.Map({
  controls: ol.control.defaults({
    attribution: false
  }).extend([
    new ol.control.MousePosition()//是否显示鼠标所在地图点的经纬度
  ]),
  layers: [],
  target: "map",
  view: new ol.View({
    center: center4524,
    projection: projection4524,
    resolutions: resolutions4524,
    zoom: 0,//默认缩放级别
    maxZoom: 20,//最大缩放级别
    minZoom: 0//最小缩放级别
  })
});
//4524底图图层
var layer = new ol.layer.Vector({
  source: new ol.source.Vector({
    projection: projection4524,
    format: new ol.format.GeoJSON(),
    url: 'http://dev.chinadci.com:8115/geoserver/CityThroRiver/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=CityThroRiver%3ACityThroRiver&maxFeatures=50&outputFormat=application%2Fjson'
  })
});
map.addLayer(layer)