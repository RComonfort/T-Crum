'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stations', 
    [
      {
        name: 'Estacion 1',
        lat: 19.129328,
        lng: -98.262249,
        waiting_people: 3,
        next_crafter_arrival_time: 5.6,
        next_crafter_id: "PNATUF7ARTYS456",
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      },
      {
        name: 'Estacion 2',
        lat: 19.124635,
        lng: -98.258305,
        waiting_people: 6,
        next_crafter_arrival_time: 2.6,
        next_crafter_id: "4543GJDKSM94030",
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      },
      {
        name: 'Estacion 3',
        lat: 19.120632,
        lng: -98.254359,
        waiting_people: 0,
        next_crafter_arrival_time: 4.2,
        next_crafter_id: "4543GJDKSM94030",
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      },
      {
        name: 'Estacion 4',
        lat: 19.118661,
        lng: -98.252077,
        waiting_people: 0,
        next_crafter_arrival_time: 6,
        next_crafter_id: "4543GJDKSM94030",
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      },
      {
        name: 'Estacion 5',
        lat: 19.121121,
        lng: -98.249496,
        waiting_people: 0,
        next_crafter_arrival_time: 0.4,
        next_crafter_id: "VWLTGH567899442",
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      },
      {
        name: 'Estacion 6',
        lat: 19.123222,
        lng: -98.247085,
        waiting_people: 0,
        next_crafter_arrival_time: 2,
        next_crafter_id: "VWLTGH567899442",
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      },
      {
        name: 'Estacion 7',
        lat: 19.126619,
        lng: -98.251735,
        waiting_people: 0,
        next_crafter_arrival_time: 4.9,
        next_crafter_id: "VWLTGH567899442",
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      },
      {
        name: 'Estacion 8',
        lat: 19.131752,
        lng: -98.257714,
        waiting_people: 0,
        next_crafter_arrival_time: 1.3,
        next_crafter_id: "PNATUF7ARTYS456",
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW')
      }
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
      },
      {
        id: 4
      },
      {
        id: 5
      },
      {
        id: 6
      },
      {
        id: 7
      },
      {
        id: 8
      }
    ]);
  }
};
