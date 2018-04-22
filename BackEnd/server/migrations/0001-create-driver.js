'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Drivers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      review_count: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      review_avg: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      kindness_prize_count: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cleanliness_prize_count: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      driving_skills_prize_count: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('Drivers');
  }
};