/**
* AuthController
*
*/
var passport = require('passport');

module.exports = {

  login: function (req, res) {
    res.view();
  },

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
        return res.send({
          message: 'login successful'
        });
      });
    })(req, res);
  },
  
  logout: function (req,res){
    req.logout();
    res.send('logout successful');
  },

  register: function (req, res) {
    res.view();
  },

  confirm: function(req, res) {
    var user = User.create({
      username: req.param('username'),
      password: req.param('password')
    }).exec(function(err, user) {
      res.redirect('/');
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




