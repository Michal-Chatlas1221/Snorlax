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
    const id = req.param('id');
    const userId = req.user.id;

    Show.findOne(id).exec(function(err, show) {
      User
      .findOne(userId)
      .populate('shows')
      .exec(function(err, user) {
        const rating  =
          ShowRating
          .findOne()
          .where({user: userId, show: show.id})
          .exec(function(err, rating) {
            console.log(err, rating)
            const showFollowed = user.shows.find(s => s.id == show.id) != null;

            return res.view({
              show: show,
              showFollowed: showFollowed,
              rating: rating,
            });
        })
      });
    })
  }

};
