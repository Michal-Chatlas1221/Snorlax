/**
 * Created by piotrowy on 16.05.2016.
 */
var request = require('supertest');
var simple = require('simple-mock');
var assert = require('chai').assert;
var auth = require('./../../../api/controllers/AuthController');

describe('AuthController', function() {

  describe('#confirm()', function() {
    it('should redirect to /show', function (done) {
      request(sails.hooks.http.app)
        .post('/register')
        .send({ username: 'test', password: 'test' })
        .expect(302)
        .expect('location','/show', done);
    });

    it('no params should redirect to /register', function (done) {
      request(sails.hooks.http.app)
        .post('/register')
        .expect(302)
        .expect('location','/register', done);
    });

    it('empty password should redirect to /register', function (done) {
      request(sails.hooks.http.app)
        .post('/register')
        .send({ name: 'test'})
        .expect(302)
        .expect('location','/register', done);
    });

    it('empty username should redirect to /register', function (done) {
      request(sails.hooks.http.app)
        .post('/register')
        .send({password: 'test' })
        .expect(302)
        .expect('location','/register', done);
    });
  });

  describe('#process()', function() {
    it('mock authenticate should redirect to /show', function(done){
      passport = {};
      simple.mock(passport, 'authenticate').callbackWith(null, {}, null);
      var req = {},
          res = {};
      simple.mock(req, 'logIn').callbackWith(null);
      simple.mock(res, 'send');

      auth.process(req,res);
      assert.equal(res.send.called, true);
      done();
    });
  });
});


