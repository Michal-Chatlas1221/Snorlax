/**
 * User
 *
 * @module       User
 * @description  User model
 *
 */
var bcrypt = require('bcrypt');

module.exports = {

  /**
    user attributes: username, password
  */
  attributes: {
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },
    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    },

    shows: {
      collection: 'show',
      via: 'users',
      dominant: true,
    },

  },

  /**
    Encrypts the user's password using the bcrypt library - executed before the user is created
    @param user {User} user object
    @param cb {function} callback to be executed after encryption
  */
  beforeCreate: function(user, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          console.log(err);
          cb(err);
        }else{
          user.password = hash;
          cb(null, user);
        }
      });
    });
  }

};
