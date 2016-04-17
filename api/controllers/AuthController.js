/**
* @module AuthController
* @description Used for authenticating users
*
*/
var passport = require('passport');

module.exports = {
  /**
    login action
    renders 'auth/login' view
    @param req { Object } request
    @param res { Object } result
  */
  login: function (req, res) {
    res.view();
  },
  /**
    Checks if given credentials are valid.
    Displays error message if username/password don't match.
    Displays success message if username/password match.
    @param req { Object } request
    @param res { Object } result
  */
  process: function(req, res){
    passport.authenticate('local', function(err, user, info) {
      if ((err) || (!user)) {
        return res.send({
          message: 'login failed'
        });
        res.send(err);
      }
      req.logIn(user, function(err) {
        if (err) res.send(err);
        return res.redirect('/show')
      });
    })(req, res);
  },

  /**
    Destroys user's session
    @param req { Object } request
    @param res { Object } result
  */
  logout: function (req,res){
    req.logout();
    res.send('logout successful');
  },

  /**
    Renders register form
    @param req { Object } request
    @param res { Object } result
  */
  register: function (req, res) {
    res.view();
  },

  /**
    Creates user account
    @param req { Object } request
    @param res { Object } result
  */
  confirm: function(req, res) {
    var user = User.create({
      username: req.param('username'),
      password: req.param('password')
    }).exec(function(err, user) {
      req.logIn(user, function(err) {
        return res.redirect('/show');
      });
    });
  }
};

module.exports.blueprints = {

  // Expose a route for every method,
  // e.g.
  // `/auth/foo` => `foo: function (req, res) {}`
  actions: true,

  // Expose a RESTful API, e.g.
  // `post /auth` => `create: function (req, res) {}`
  rest: true,

  // Expose simple CRUD shortcuts, e.g.
  // `/auth/create` => `create: function (req, res) {}`
  // (useful for prototyping)
  shortcuts: true

};




