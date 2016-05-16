/**
 * Created by piotrowy on 16.05.2016.
 */
var request = require('supertest');
var simple = require('simple-mock');

describe('ShowController', function() {

  describe('#index()', function() {
    it('should redirect to /login', function (done) {
      request(sails.hooks.http.app)
        .get('/show')
        .send()
        .expect(302)
        .expect('location','/login', done);
    });
  });

  describe('#find()', function() {
    it('should redirect to /login', function (done) {
      request(sails.hooks.http.app)
        .get('/show/1')
        .send()
        .expect(302)
        .expect('location','/login', done);
    });
  });

});


