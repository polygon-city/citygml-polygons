var _ = require("lodash");
var DOMParser = require("xmldom").DOMParser;
var domParser = new DOMParser();

module.exports = citygmlPolygons;

var citygmlPolygons = function(xml) {
  var polygons = [];

  var xmlDOM = domParser.parseFromString(xml);
  var polygonsDOM = xmlDOM.getElementsByTagName("gml:Polygon");

  _.each(polygonsDOM, function(polygonDOM) {
    polygons.push(polygonDOM.toString());
  });

  return polygons;
};
