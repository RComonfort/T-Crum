'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Crafters', 
    [
      {
        id: '4543GJDKSM94030',
        name: 'Crafter 1',
        lat: 19.119121,
        lng: -98.251798,
        isActive: true,
        total_seats: 12,
        occupied_seats: 1,
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      },
      {
        id: 'VWLTGH567899',
        name: 'Crafter 2',
        lat: 19.115861,
        lng: -98.249539,
        isActive: true,
        total_seats: 10,
        occupied_seats: 5,
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      },
      {
        id: 'PNATUF7ARTYS456',
        name: 'Crafter 3',
        lat: 19.129221,
        lng: -98.248681,
        isActive: true,
        total_seats: 6,
        occupied_seats: 6,
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Crafters', 
    [
      {
        id: '4543GJDKSM94030'
      },
      {
        id: 'VWLTGH567899'
      },
      {
        id: 'PNATUF7ARTYS456'
      }
    ]);
  }
};
