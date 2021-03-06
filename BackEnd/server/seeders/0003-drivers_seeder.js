'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Drivers',
    [
      {
        password: 'thi5i54r3477yins3cur3p445w0rd',
        first_name: 'Juan Antonio',
        last_name: 'Gómez Hernández',
        review_count: 10,
        review_avg: 5.0,
        kindness_prize_count: 2,
        cleanliness_prize_count: 3,
        driving_skills_prize_count: 4,
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      },
      {
        password: 'thi5i54r3477yins3cur3p445w0rd',
        first_name: 'Alfredo',
        last_name: 'Rodríguez Pérez',
        review_count: 20,
        review_avg: 6.5,
        kindness_prize_count: 5,
        cleanliness_prize_count: 6,
        driving_skills_prize_count: 7,
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      },
      {
        password: 'thi5i54r3477yins3cur3p445w0rd',
        first_name: 'Emmanuel',
        last_name: 'Márquez Sosa',
        review_count: 30,
        review_avg: 7.3,
        kindness_prize_count: 8,
        cleanliness_prize_count: 9,
        driving_skills_prize_count: 10,
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Drivers',
    [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      }
    ], {});
  }
};
