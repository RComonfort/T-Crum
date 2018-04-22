'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      driver_id: {
        type: Sequelize.STRING,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Drivers',
          key: 'id'
        }
      },
      passenger_id: {
        type: Sequelize.STRING,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Passengers',
          key: 'id'
        }
      },
      crafter_id: {
        type: Sequelize.STRING,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Crafters',
          key: 'id'
        }
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: false
      },
      score: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      kindness_prize: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      cleanliness_prize: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      driving_skills_price: {
        type: Sequelize.BOOLEAN,
        allowNull: false
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
    return queryInterface.dropTable('Reviews');
  }
};