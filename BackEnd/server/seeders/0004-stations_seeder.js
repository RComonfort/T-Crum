'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stations', 
    [
      {
        name: 'Estacion 1',
        lat: 19.113616,
        lng: -98.247993,
        waiting_people: 3,
        next_crafter_arrival_time: 14.6,
        next_crafter_id: "4543GJDKSM94030",
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      },
      {
        name: 'Estacion 2',
        lat: 19.115668,
        lng: -98.249404,
        waiting_people: 6,
        next_crafter_arrival_time: 24.6,
        next_crafter_id: "4543GJDKSM94030",
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      },
      {
        name: 'Estacion 3',
        lat: 19.128059,
        lng: -98.249993,
        waiting_people: 0,
        next_crafter_arrival_time: 1.6,
        next_crafter_id: "4543GJDKSM94030",
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Crafters', 
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
    ]);
  }
};
