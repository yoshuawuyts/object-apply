/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var apply = require('./index');

/**
 * Test
 */

describe('object-apply', function() {
  it('should assert argument types', function() {
    apply.bind(null, 123)
      .should.throw('object-apply: obj should be an object');

    apply.bind(null, {}, 123)
      .should.throw('object-apply: transform should be an object');

    apply.bind(null, {}, function() {})
      .should.not.throw();
  });

  it('should apply a transformation to all values in the object', function() {

    var target = {
      foo: 1,
      bar: 2
    };

    // apply transformation to object

    var nw = apply(target, function(arg) {
      return arg * arg;
    });

    nw.foo.should.eql(1);
    nw.bar.should.eql(4);
  });

  it('should return a new object', function() {
    var target = {
      foo: 1,
      bar: 2
    };

    // apply transformation to object

    var nw = apply(target, function(arg) {
      return arg * arg;
    });

    nw.should.not.eql(target);
  });
});
