var assert = require('chai').assert;
var simple = require('simple-mock');

var sessionAuth = require('../../../api/policies/sessionAuth');

describe('sessionAuth', function() {

  describe('for logged in user', function() {
    it('calls next()', function(done) {
      var req = {};
      simple.mock(req, 'isAuthenticated').returnWith(true);

      var res = {};
      simple.mock(res, 'redirect');

      var callback = simple.spy(function () {})


      sessionAuth(req, res, callback);
      assert.equal(callback.called, true);
      done();
    })
  });

  it('does not redirect', function(done) {
    var req = {};
    simple.mock(req, 'isAuthenticated').returnWith(true);

    var res = {};
    simple.mock(res, 'redirect');

    var callback = simple.spy(function () {})


    sessionAuth(req, res, callback);
    assert.equal(res.redirect.called, false);
    done();
  });

  describe('for not logged in user', function() {
    it('does not call next()', function(done) {
      var req = {};
      simple.mock(req, 'isAuthenticated').returnWith(false);

      var res = {};
      simple.mock(res, 'redirect');

      var callback = simple.spy(function () {})


      sessionAuth(req, res, callback);
      assert.equal(callback.called, false);
      done();
    })
  });

  it('redirects', function(done) {
    var req = {};
    simple.mock(req, 'isAuthenticated').returnWith(false);

    var res = {};
    simple.mock(res, 'redirect');

    var callback = simple.spy(function () {})


    sessionAuth(req, res, callback);
    assert.equal(res.redirect.called, true);
    done();
  });

  it('redirects to the correct page', function(done) {
    var req = {};
    simple.mock(req, 'isAuthenticated').returnWith(false);

    var res = {};
    simple.mock(res, 'redirect');

    var callback = simple.spy(function () {})


    sessionAuth(req, res, callback);
    assert.equal(res.redirect.lastCall.args, "/login");
    done();
  });

});
