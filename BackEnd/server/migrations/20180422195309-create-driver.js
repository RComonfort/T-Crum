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
        type: Sequelize.TEXT,
        allowNull: false
      },
      first_name: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      last_name: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      review_count: {
        type: Sequelize.INT,
        allowNull: false
      },
      review_avg: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      kindness_prize_count: {
        type: Sequelize.INT,
        allowNull: false
      },
      cleanliness_prize_count: {
        type: Sequelize.INT,
        allowNull: false
      },
      driving_skills_prize_count: {
        type: Sequelize.INT,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Drivers');
  }
};