'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Technology',

      [
        {
          name: 'JAVASCRIPT'
        },
        {
          name: 'HTML'
        },
        {
          name: 'NODE'
        },
        {
          name: 'POSTGRES'
        },
        {
          name: 'SEQUELIZE'
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Technology', 
    [
      {
        id: "1"
      },
      {
        id: "2"
      },
      {
        id: "3"
      },
      {
        id: "4"
      },
      {
        id: "5"
      },
    ]);
  }
};