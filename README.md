# turf-polyToLineString
Converts a valid GeoJSON polygon into a linestring

turf polygon to linestring module


### `turf.polyToLineString(polygon)`

Takes a GeoJSON Polygon feature and returns it as a GeoJSON linestring.

### Parameters

| parameter  | type              | description                                |
| ---------- | ----------------- | ------------------------------------------ |
| `polygon`  | Polygon			 | a GeoJSON polygon						  |


### Example

```js
var poly = {"type": "Feature","geometry": {"type": "Polygon", "coordinates": [[[-2.275543, 53.464547 ], [-2.275543, 53.489271 ], [-2.215118, 53.489271 ], [-2.215118, 53.464547 ], [-2.275543, 53.464547 ] ] ] }, "properties": {"name": "poly1", "population": 400 } }; 

var newLine = turf.polyToLineString(poly);

var result = L.geoJson(newLine).addTo(map);

//=result
```

## Tests

```sh
$ npm test
```

