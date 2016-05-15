/**
 * UserShowController
 * @module      UserShowController
 * @description :: Server-side logic for managing user's shows
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
    index action
    Fetches the list of shows that current user is following and renders index view.
    @param req { Object } Incoming request - requires user to be logged in.
  */
  index: function(req, res) {
    User.findOne(req.user.id).populate('shows').exec(function(err, user) {
      const userShows = user.shows.filter(s => typeof s != 'function');

      return res.view('user_show/index', {shows: userShows});
    });
  },
  /**
  create action
  Adds show with the given id to the current user's shows list.
  Redirects to the shows list.
  @param req { Object } Incoming request - requires user to be logged in. showId parameter is required.
  */
  create: function(req, res) {
    const showId = req.allParams()['showId'];

    User.findOne(req.user.id).exec(function(err, user) {
      user.shows.add(showId);
      user.save(function(err) {});
    });

    res.redirect('/show');
  },
  /**
  destroy action
  Removes show with the given id from the current user's shows list.
  Redirects to the shows list.
  @param req { Object } Incoming request - requires user to be logged in. showId parameter is required.
  */
  destroy: function(req, res) {
    const id = req.allParams()['showId'];

    User.findOne(req.user.id).populate('shows').exec(function(err, user) {
      user.shows.remove(id);
      user.save(function(err) { res.redirect("/show"); });
    });

  }
};
