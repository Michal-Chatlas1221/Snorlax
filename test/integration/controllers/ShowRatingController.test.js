/**
 * Created by piotrowy on 16.05.2016.
 */
var request = require('supertest');
var simple = require('simple-mock');

describe('ShowController', function() {

  describe('#create()', function() {
    it('should redirect to /login', function (done) {
      request(sails.hooks.http.app)
        .post('/show_rating')
        .send()
        .expect(302)
        .expect('location','/login', done);
    });
  });

});


