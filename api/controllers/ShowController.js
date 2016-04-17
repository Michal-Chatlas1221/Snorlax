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
  },

  find: function (req, res, next) {
    var id = req.param('id');

    Show.findOne(id).exec(function(err, show) {
      return res.view({show: show});
    })
  }

};

