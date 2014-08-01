turf-bearing
=============

Calculates the bearing between two point features in degrees.

###Install

```sh
npm install turf-bearing
```

###Parameters

|name|description|
|---|---|
|point1|point feature|
|point2|point feature|

###Usage

```js
bearing(point1, point2)
```

###Example

```javascript
var bearing = require('turf-bearing')
var point = require('turf-point')

var point1 = point(-75.343, 39.984)
var point2 = point(-75.534, 39.123)

var bearing = bearing(point1, point2)

console.log(bearing)
```
