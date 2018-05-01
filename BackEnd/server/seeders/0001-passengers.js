'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Passengers',

      [
        {
          id: "passenger1",
<<<<<<< Updated upstream:BackEnd/server/seeders/0001-passengers.js
          password: "12345678",
          first_name: "Passenger",
          last_name: "One",
=======
          password: "$2a$10$Ke6Aa11a.k2fu3UZ1zEL9.UqM63U720h/EwJ.DZMoXIA8ZRMNPY6y",
          first_name: "Julio",
          last_name: "Andrade Gómez",
>>>>>>> Stashed changes:BackEnd/server/seeders/0001-passengers_seeder.js
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW'),
        },
        {
          id: "passenger2",
<<<<<<< Updated upstream:BackEnd/server/seeders/0001-passengers.js
          password: "12345678",
          first_name: "Passenger",
          last_name: "Two",
=======
          password: "$2a$10$Ke6Aa11a.k2fu3UZ1zEL9.UqM63U720h/EwJ.DZMoXIA8ZRMNPY6y",
          first_name: "Alberto",
          last_name: "Ramírez Cantú",
>>>>>>> Stashed changes:BackEnd/server/seeders/0001-passengers_seeder.js
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW'),
        },
        {
          id: "passenger3",
<<<<<<< Updated upstream:BackEnd/server/seeders/0001-passengers.js
          password: "12345678",
          first_name: "Passenger",
          last_name: "Three",
=======
          password: "$2a$10$Ke6Aa11a.k2fu3UZ1zEL9.UqM63U720h/EwJ.DZMoXIA8ZRMNPY6y",
          first_name: "Israel",
          last_name: "Jiménez Juárez",
>>>>>>> Stashed changes:BackEnd/server/seeders/0001-passengers_seeder.js
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