/**
 * @module ShowRating
 * @description Model to represent TV Shows' ratings
 * @param show { integer } show id - required
 * @param user { integer } user id - required
 * @param rating { integer } integer - required
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  /** attributes - show, user, rating */
  attributes: {
    show: {
      model: 'show',
      required: true,
    },
    user: {
      model: 'user',
      required: true,
    },
    rating: {
      type: 'integer',
      required: true,
    },
  }
};
