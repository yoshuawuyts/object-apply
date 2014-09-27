/**
 * Module dependencies
 */

var assert = require('assert');

/**
 * Map a transformation over object keys.
 *
 * @param {Object} obj
 * @param {Function} transform
 */

module.exports = function(obj, transform) {
  assert('object' == typeof obj, 'object-apply: obj should be an object');
  assert('function' == typeof transform, 'object-apply: transform should be an object');

  var nwObj = {};

  Object.keys(obj).forEach(function(key) {
    nwObj[key] = transform(obj[key]);
  });

  return nwObj;
}
