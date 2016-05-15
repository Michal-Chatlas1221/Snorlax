/**
 * @module Show
 * @description Model to represent TV Show
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
