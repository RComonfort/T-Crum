'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Passengers',

      [
        {
          id: "passenger1",
          password: "12345678",
          first_name: "Passenger",
          last_name: "One",
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW'),
        },
        {
          id: "passenger2",
          password: "12345678",
          first_name: "Passenger",
          last_name: "Two",
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW'),
        },
        {
          id: "passenger3",
          password: "12345678",
          first_name: "Passenger",
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
        id: "passenger1"
      },
      {
        id: "passenger2"
      },
      {
        id: "passenger3"
      }
    ]);
  }
};