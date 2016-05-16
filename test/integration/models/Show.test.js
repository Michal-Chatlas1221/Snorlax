var assert = require('chai').assert;

describe('Show', function() {

  describe('#countAvgRating()', function() {
    it('returns correct value in callback', function (done) {
      Show.create({name: 'show'}).exec(function(err, show) {
        ShowRating.create([
          {show: show.id, rating: 10, user: 1},
          {show: show.id, rating: 20, user: 2},
          {show: show.id, rating: 30, user: 3}
        ]).exec(function(err, rating) {
          show.calcAvgRating(function(rating) {
            assert.equal(20, rating);
            done();
          })
        })
      });
    });
  });

  describe('attributes', function() {
    it('is invalid without a name', function(done) {
      Show.create({name: null}).exec(function(err, show) {
        assert.equal(show, undefined);
        done();
      })
    });
    it('is valid without a description', function(done) {
      Show.create({name: 'show', description: null}).exec(function(err, show) {
        assert.notEqual(show, undefined);
        done();
      })
    });
    it('is valid without a imageUrl', function(done) {
      Show.create({name: 'show', imageUrl: null}).exec(function(err, show) {
        assert.notEqual(show, undefined);
        done();
      })
    });
  });

  describe('associations', function() {
    describe('users', function() {
      it('returns list of users following the show', function(done) {
        Show.create({name: 'show'}).exec(function(err, show) {
          User.create({username: 'testusername', password: 'test'}).exec(function(err, user) {
            console.log(err);
            user.shows.add(show.id);
            user.save(function(err) {
              Show.findOne(show.id).populate('users').exec(function(err, show) {
                User.destroy({username: 'testusername'}).exec(function(err) {
                  assert.equal(show.users[0].id, user.id);
                  done();
                });
              });

            })
          });
        });
      });
    });
  });


});
