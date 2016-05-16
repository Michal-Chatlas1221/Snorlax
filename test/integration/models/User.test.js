var assert = require('chai').assert;

describe('User', function() {

  describe('attributes', function() {
    it('is invalid without an username', function(done) {
      User.create({password: 'test', name: null}).exec(function(err, user) {
        assert.equal(user, undefined);
        done();
      })
    });
    it('is invalid without a password', function(done) {
      User.create({name: 'user', password: null}).exec(function(err, user) {
        assert.equal(user, undefined);
        done();
      })
    });
  });

  describe('#toJSON', function() {
    it('does not includes user\'s password', function(done) {
      User.create({username: 'testusername', password: 'test'}).exec(function(err, user) {
        User.destroy({username: 'testusername'}).exec(function(err) {
          assert.equal(user.toJSON()['password'], undefined);
          done();
        })
      })
    })
  })


});
/**
 * Created by piotrowy on 16.05.2016.
 */
