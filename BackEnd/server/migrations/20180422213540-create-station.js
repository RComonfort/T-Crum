'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Stations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INT
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      lat: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      lng: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      waiting_people: {
        allowNull: false,
        type: Sequelize.INT
      },
      next_crafter_arrival_time: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      next_crafter_id: {
        allowNull: false,
        type: Sequelize.INT,
        onDelete: 'CASCADE',
        references: {
          model: 'Crafters',
          key: 'id',
          as: 'next_crafter_id'
        }
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
    return queryInterface.dropTable('Stations');
  }
};