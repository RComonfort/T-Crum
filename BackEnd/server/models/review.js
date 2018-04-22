'use strict';
module.exports = (sequelize, DataTypes) => {
  var Review = sequelize.define('Review', {
    driver_id: DataTypes.STRING,
    passenger_id: DataTypes.STRING,
    crafter_id: DataTypes.STRING,
    comment: DataTypes.STRING,
    score: DataTypes.DOUBLE,
    kindness_prize: DataTypes.BOOLEAN,
    cleanliness_prize: DataTypes.BOOLEAN,
    driving_skills_price: DataTypes.BOOLEAN
  }, {});
  Review.associate = function (models) {
    // associations can be defined here

    // Review.belongsTo (models.Driver, {
    //   foreignKey: 'driver_id', 
    //   onDelete: 'CASCADE',
    //   as: "driver"
    // });

    // Review.belongsTo (models.Passenger, {
    //   foreignKey: 'passenger_id', 
    //   onDelete: 'CASCADE',
    //   as: "passenger"
    // });

    // Review.belongsTo (models.Crafter, {
    //   foreignKey: 'crafter_id', 
    //   onDelete: 'CASCADE',
    //   as: "crafter"
    // });

  };
  return Review;
};