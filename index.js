//http://en.wikipedia.org/wiki/Haversine_formula
//http://www.movable-type.co.uk/scripts/latlong.html

/**
 * Takes two {@link Point|points} and finds the geographic bearing between them.
 *
 * @module turf/bearing
 * @category measurement
 * @param {Feature<Point>} start starting Point
 * @param {Feature<Point>} end ending Point
 * @param {String} [units=degrees] can be degrees or compass
 * @category measurement
 * @returns {Number} bearing in decimal degrees
 * @example
 * var point1 = {
 *   "type": "Feature",
 *   "properties": {
 *     "marker-color": '#f00'
 *   },
 *   "geometry": {
 *     "type": "Point",
 *     "coordinates": [-75.343, 39.984]
 *   }
 * };
 * var point2 = {
 *   "type": "Feature",
 *   "properties": {
 *     "marker-color": '#0f0'
 *   },
 *   "geometry": {
 *     "type": "Point",
 *     "coordinates": [-75.534, 39.123]
 *   }
 * };
 *
 * var points = {
 *   "type": "FeatureCollection",
 *   "features": [point1, point2]
 * };
 *
 * //=points
 *
 * var bearing = turf.bearing(point1, point2);
 *
 * //=bearing
 */
module.exports = function (point1, point2, units) {
    var coordinates1 = point1.geometry.coordinates;
    var coordinates2 = point2.geometry.coordinates;

    var lon1 = toRad(coordinates1[0]);
    var lon2 = toRad(coordinates2[0]);
    var lat1 = toRad(coordinates1[1]);
    var lat2 = toRad(coordinates2[1]);
    var a = Math.sin(lon2 - lon1) * Math.cos(lat2);
    var b = Math.cos(lat1) * Math.sin(lat2) -
        Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);

    var bearing = toDeg(Math.atan2(a, b));

    switch(units) {
      case 'degrees':
        return bearing;
      case 'compass':
        return toCompass(bearing);
      case undefined:
        return bearing;
      default:
        throw new Error('unknown option given to "units"');
    }
};

function toCompass(bearingNum) {
  var b = ''
  if (bearingNum >= -22.49 && bearingNum <= 22.49) b = 'N';
  else if (bearingNum >= 22.5 && bearingNum <= 67.49) b = 'NE';
  else if (bearingNum >= 67.5 && bearingNum <= 112.49) b = 'E';
  else if (bearingNum >= 112.5 && bearingNum <= 157.49) b = 'SE';
  else if (bearingNum >= 157.5 || bearingNum <= -157.5) b = 'S';
  else if (bearingNum >= -157.49 && bearingNum <= -112.5) b = 'SW';
  else if (bearingNum >= -112.49 && bearingNum <= -67.5) b = 'W';
  else if (bearingNum >= -67.49 && bearingNum <= -22.5) b = 'NW';
  return b
}

function toRad(degree) {
    return degree * Math.PI / 180;
}

function toDeg(radian) {
    return radian * 180 / Math.PI;
}
