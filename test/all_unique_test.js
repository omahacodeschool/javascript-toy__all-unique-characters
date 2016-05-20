var assert = require('chai').assert;

var all_unique = require('../lib/all_unique.js').all_unique;

describe('all_unique', function() {
  it('should return true for "bear"', function() {
    assert.isTrue(all_unique("bear"));
  });

  it('should return true for "scope"', function() {
    assert.isTrue(all_unique("scope"));
  });

  it('should return true for "a"', function() {
    assert.isTrue(all_unique("a"));
  });

  it('should return true for "as"', function() {
    assert.isTrue(all_unique("as"));
  });

  it('should return true for "children"', function() {
    assert.isTrue(all_unique("children"));
  });

  it('should return false for "eligible"', function() {
    assert.isFalse(all_unique("eligible"));
  });

  it('should return true for "discuss"', function() {
    assert.isFalse(all_unique("discuss"));
  });

  it('should return true for "abc"', function() {
    assert.isFalse(all_unique("abc"));
  });
});