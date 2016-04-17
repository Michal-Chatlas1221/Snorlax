/**
 * ShowController
 *
 * @description :: Server-side logic for managing series
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  index: function(req, res) {
    Show.find().exec(function(err, shows) {
      return res.view({shows: shows});
    })
  }

};

