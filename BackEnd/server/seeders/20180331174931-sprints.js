'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Sprints',

      [{
          days: 1,
          comment: 'Test comment'
        },

        {
          days: 2,
          comment: 'Test comment'
        },

        {
          days: 3,
          comment: 'Test comment'
        },

        {
          days: 4,
          comment: 'Test comment'
        },

        {
          days: 5,
          comment: 'Test comment'
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Sprints', 
    [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      },
      {
        id: 4
      },
      {
        id: 5
      },

    ]);
  }
};
