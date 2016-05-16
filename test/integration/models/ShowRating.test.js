var assert = require('chai').assert;

describe('ShowRating', function() {

  describe('attributes', function() {
    it('is invalid without an user', function(done) {
      ShowRating.create({show: 1, rating: 1, user: null}).exec(function(err, rating) {
        assert.equal(rating, undefined);
        done();
      })
    });
    it('is invalid without a show', function(done) {
      ShowRating.create({user: 1, rating: 1, show: null}).exec(function(err, rating) {
        assert.equal(rating, undefined);
        done();
      })
    });
    it('is invalid without a rating', function(done) {
      ShowRating.create({show: 1, user: 1, rating: null}).exec(function(err, rating) {
        assert.equal(rating, undefined);
        done();
      })
    });
  });
});
