# turf-bearing

[![build status](https://secure.travis-ci.org/Turfjs/turf-bearing.png)](http://travis-ci.org/Turfjs/turf-bearing)

turf bearing module


### `turf.bearing(start, end)`

Finds the bearing between two Point geometries.


* `start` (`Point`): starting Point
* `end` (`Point`): ending Point

```js
var point1 = turf.point(-75.343, 39.984);
var point2 = turf.point(-75.534, 39.123);

var bearing = turf.bearing(point1, point2);

//=bearing
```


**Returns** `number`, bearing in decimal degrees

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-bearing
```

## Tests

```sh
$ npm test
```

