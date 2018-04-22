'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Crafters', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lat: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      lng: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      isActive: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      total_seats: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      occupied_seats:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Crafters');
  }
};