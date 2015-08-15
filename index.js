/**
 * Takes a GeoJSON {@link Polygon}Polygon feature and returns it as a GeoJSON  {@link LineString}linestring.
 *
 * @module turf/polyToLineString
 * @category helper
 * @param {Polygon} a GeoJSON polygon
 * @return {LineString} a LineString feature
 * @example
* var poly = {"type": "Feature","geometry": {"type": "Polygon", "coordinates": [[[-2.275543, 53.464547 ], [-2.275543, 53.489271 ], [-2.215118, 53.489271 ], [-2.215118, 53.464547 ], [-2.275543, 53.464547 ] ] ] }, "properties": {"name": "poly1", "population": 400 } }; 
* 
* var newLine = turf.polyToLineString(poly);
* 
* var result = L.geoJson(newLine).addTo(map);
 *
 * //=result
 */
module.exports = function(polygon){

  if (polygon === null) throw new Error('No polygon was passed');
  polygon.geometry.type = "LineString";
  var flat_arr = [].concat.apply([],polygon.geometry.coordinates);
  polygon.geometry.coordinates = flat_arr;

  var linestring = polygon;

  return linestring;
};
