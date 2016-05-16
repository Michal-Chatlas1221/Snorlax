/**
 * Created by piotrowy on 16.05.2016.
 */
var request = require('supertest');
var simple = require('simple-mock');
var assert = require('chai').assert;

var AuthController = require('../../../api/controllers/AuthController.js');

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

  describe('#logout', function() {
    var req = {};
    simple.mock(req, 'logout');

    var res = {};
    simple.mock(res, 'send');

    AuthController.logout(req, res);

    assert.equal(req.logout.called, true);
    assert.equal(res.send.called, true);
  })

});
