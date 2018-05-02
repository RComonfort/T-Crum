'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Passengers',

      [
        {
          id: "passenger1",
          password: "$2a$10$Ke6Aa11a.k2fu3UZ1zEL9.UqM63U720h/EwJ.DZMoXIA8ZRMNPY6y",
          first_name: "Julio",
          last_name: "Andrade Gómez",
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW'),
        },
        {
          id: "alberto.ramirez@vw.com.mx",
          password: "$2a$10$Ke6Aa11a.k2fu3UZ1zEL9.UqM63U720h/EwJ.DZMoXIA8ZRMNPY6y",
          first_name: "Alberto",
          last_name: "Ramírez Cantú",
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW'),
        },
        {
          id: "israel.jimenez@vw.com.mx",
          password: "$2a$10$Ke6Aa11a.k2fu3UZ1zEL9.UqM63U720h/EwJ.DZMoXIA8ZRMNPY6y",
          first_name: "Israel",
          last_name: "Jiménez Juárez",
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