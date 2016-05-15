/**
 * @module ShowRating
 * @description Model to represent TV Shows' ratings
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  /** attributes - show, user, rating */
  attributes: {
    show: {
      model: 'show',
    },
    user: {
      model: 'user',
    },
    rating: {
      type: 'integer'
    },
  }
};
