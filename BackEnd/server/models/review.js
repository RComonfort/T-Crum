'use strict';
module.exports = (sequelize, DataTypes) => {
  var Review = sequelize.define('Review', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    driver_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
    },
    passenger_id: {
      type: DataTypes.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
    },
    crafter_id: {
      type: DataTypes.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    score: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    kindness_prize: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    cleanliness_prize: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    driving_skills_prize: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  }, {});
  Review.associate = function (models) {
    // associations can be defined here

    //Each review belongs to one driver
    Review.belongsTo (models.Driver, {
      foreignKey: 'driver_id', 
      onDelete: 'CASCADE',
      as: "driver"
    });

    //Each review belongs to one passenger
    Review.belongsTo (models.Passenger, {
      foreignKey: 'passenger_id', 
      onDelete: 'CASCADE',
      as: "passenger"
    });

    //Each review belongs to one crafter
    Review.belongsTo (models.Crafter, {
      foreignKey: 'crafter_id', 
      onDelete: 'CASCADE',
      as: "crafter"
    });

  };
  return Review;
};