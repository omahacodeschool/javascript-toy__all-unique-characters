var assert = require('chai').assert;

var all_unique = require('../lib/all_unique.js').all_unique;

describe('all_unique', function() {
  it('should return true for "bear"', function() {
    assert.isTrue(all_unique("fear"));
  });
});