/**
 * Created by piotrowy on 16.05.2016.
 */
var request = require('supertest');
var simple = require('simple-mock');

describe('UserShowController', function() {

  describe('#index()', function() {
    it('should redirect to /login', function (done) {
      request(sails.hooks.http.app)
        .get('/user_show')
        .send()
        .expect(302)
        .expect('location','/login', done);
    });
  });
  describe('#destroy()', function() {
    it('should redirect to /login', function (done) {
      request(sails.hooks.http.app)
        .delete('/user_show')
        .send()
        .expect(302)
        .expect('location','/login', done);
    });
  });
  describe('#create()', function() {
    it('should redirect to /login', function (done) {
      request(sails.hooks.http.app)
        .post('/user_show')
        .send()
        .expect(302)
        .expect('location','/login', done);
    });
  });

});


