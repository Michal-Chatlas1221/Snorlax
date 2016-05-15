/**
 * ShowController
 * @module      ShowController
 * @description :: Server-side logic for managing shows
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
    Show the list of all shows
    Renders show/index
    @param req { Object } request
    @param res { Object } result
    @param next { function } default action
  */
  index: function(req, res) {
    Show.find().exec(function(err, shows) {
      return res.view('show/index', {shows: shows});
    })
  },

  /**
    Show the details of a specified show
    Renders show/show
    @param req Object request
    @param res Object result
    @param next optional param
  */
  find: function (req, res, next) {
    var id = req.param('id');

    Show.findOne(id).exec(function(err, show) {
      User
        .findOne(req.user.id)
        .populate('shows')
        .exec(function(err, user) {
          const showFollowed = user.shows.find(s => s.id == show.id) != null;

          return res.view({
            show: show,
            showFollowed: showFollowed,
          });
        });
    })
  }

};
