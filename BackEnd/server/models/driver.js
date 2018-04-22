'use strict';
module.exports = (sequelize, DataTypes) => {
  var Driver = sequelize.define('Driver', {
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    review_count: DataTypes.INT,
    review_avg: DataTypes.DOUBLE,
    kindness_prize_count: DataTypes.INT,
    cleanliness_prize_count: DataTypes.INT,
    driving_skills_prize_count: DataTypes.INT
  }, {});
  Driver.associate = function(models) {
    // associations can be defined here
  };
  return Driver;
};