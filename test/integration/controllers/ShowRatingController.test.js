/**
 * Created by piotrowy on 16.05.2016.
 */
var request = require('supertest');
var assert = require('chai').assert;
var simple = require('simple-mock');

var ShowRatingController = require('../../../api/controllers/ShowRatingController');

describe('ShowRatingController', function() {

  describe('#create()', function() {
    it('should redirect to /login', function (done) {
      request(sails.hooks.http.app)
        .post('/show_rating')
        .send()
        .expect(302)
        .expect('location','/login', done);
    });

    it('creates rating with correct params', function(done) {
        var req = {};
        simple.mock(req, 'allParams').returnWith({
          showId: 1,
          rating: 2,
        })
        var user = {id: 5};
        simple.mock(req, 'user').returnWith(user);

        var res = [];
        simple.mock(res, 'redirect')

        simple.mock(ShowRating, 'findOrCreate');

        ShowRatingController.create(req, res);

        assert.equal(ShowRating.findOrCreate.lastCall.args[1]['rating'], 2);
        assert.equal(ShowRating.findOrCreate.lastCall.args[1]['show'], 1);

        done();
    })
  });


});
