'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Crafters', 
    [
      {
        id: '4543GJDKSM94030',
        name: 'Crafter 1',
        lat: 19.127170,
        lng: -98.260555,
        isActive: true,
        total_seats: 12,
        occupied_seats: 1,
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      },
      {
        id: 'VWLTGH567899',
        name: 'Crafter 2',
        lat: 19.120017,
        lng: -98.250696,
        isActive: true,
        total_seats: 10,
        occupied_seats: 5,
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),
      },
      {
        id: 'PNATUF7ARTYS456',
        name: 'Crafter 3',
        lat: 19.127677,
        lng: -98.253732,
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
