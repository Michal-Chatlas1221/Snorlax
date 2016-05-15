/**
 * @module Show
 * @description Model to represent TV Show
 * @param name { string }  name of the show
 * @param description { string } description on the show
 * @param imageUrl { string } show's image
 * @param users { Array } users following the show
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  /** attributes - name, description, imageUrl */
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    imageUrl: {
      type: 'string'
    },

    users: {
      collection: 'user',
      via: 'shows',
    },
  }
};
