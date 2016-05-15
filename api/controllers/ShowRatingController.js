/**
 * ShowRatingController
 * @module      ShowRatingController
 * @description :: Server-side logic for managing shows' ratings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
    create action
    creates a rating for a show only if user haven't rated the show before
    @param req { Object } incoming request - showId and rating parameters are required
    @param res { Object} request's result - redirects to the show page
  */
  create: function(req, res) {
    const showId = req.allParams()['showId'];
    const userId = req.user.id
    const rating = req.allParams()['rating'];

    const params = {user: userId, show: showId};
    const createParams = {user: userId, show: showId, rating: rating};


    ShowRating
      .findOrCreate(params, createParams)
      .exec(function(err, rating) {
        res.redirect('/show/' + showId);
      });
  },
};
