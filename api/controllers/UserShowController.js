/**
 * UserShowController
 * @module      UserShowController
 * @description :: Server-side logic for managing user's shows
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {
    User.findOne(req.user.id).populate('shows').exec(function(err, user) {
      const userShows = user.shows.filter(s => typeof s != 'function');

      return res.view('user_show/index', {shows: userShows});
    });
  },
  create: function(req, res) {
    const showId = req.allParams()['showId'];

    User.findOne(req.user.id).exec(function(err, user) {
      user.shows.add(showId);
      user.save(function(err) {});
    });

    res.redirect('/show');
  },
  destroy: function(req, res) {
    const id = req.allParams()['showId'];

    User.findOne(req.user.id).populate('shows').exec(function(err, user) {
      user.shows.remove(id);
      user.save(function(err) { res.redirect("/show"); });
    });

  }
};
