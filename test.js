var test = require('tape');
var polyToLineString = require('./');

test('polyToLineString', function(t){
	var poly = {"type": "Feature","geometry": {"type": "Polygon", "coordinates": [[[-2.275543, 53.464547 ], [-2.275543, 53.489271 ], [-2.215118, 53.489271 ], [-2.215118, 53.464547 ], [-2.275543, 53.464547 ] ] ] }, "properties": {"name": "poly1", "population": 400 } }; 
	var converted = polyToLineString(poly);

	t.ok(converted, 'should take a polygon and return it as a linestring');
	t.equal(converted.geometry.type, "LineString", 'has returned a linestring');
	t.equal(converted.geometry.coordinates[0][0], -2.275543, 'has retained correct first coords');
	t.equal(converted.geometry.coordinates[4][1], 53.464547, 'has retained correct last coords');

	t.end();
});
