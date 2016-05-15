/**
 * ShowRatingController
 * @module      ShowRatingController
 * @description :: Server-side logic for managing shows' ratings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function(req, res) {
    console.log('rating');
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
