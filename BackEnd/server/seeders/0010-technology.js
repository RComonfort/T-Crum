'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Technologies',
      [
        {
          name: 'JAVA'
        },
        {
          name: 'JAVASCRIPT'
        },
        {
          name: 'HTML'
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Technologies', 
    [
      {
        id: "1"
      },
      {
        id: "2"
      },
      {
        id: "3"
      }
    ]);
  }
};