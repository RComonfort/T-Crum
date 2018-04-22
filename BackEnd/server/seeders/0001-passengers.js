'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Passengers',

      [
        {
          id: "user1",
          password: "12345678",
          first_name: "User",
          last_name: "One",
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW'),
        },
        {
          id: "user2",
          password: "12345678",
          first_name: "User",
          last_name: "Two",
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW'),
        },
        {
          id: "user3",
          password: "12345678",
          first_name: "User",
          last_name: "Three",
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW'),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Passengers', 
    [
      {
        id: "user1"
      },
      {
        id: "user2"
      },
      {
        id: "user3"
      }
    ]);
  }
};