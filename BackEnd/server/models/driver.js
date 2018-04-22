'use strict';
module.exports = (sequelize, DataTypes) => {
  const Driver = sequelize.define('Driver', {
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    review_count: {
      type: DataTypes.INT,
      allowNull: false
    },
    review_avg: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    kindness_prize_count: {
      type: DataTypes.INT,
      allowNull: false
    },
    cleanliness_prize_count: {
      type: DataTypes.INT,
      allowNull: false
    },
    driving_skills_prize_count: {
      type: DataTypes.INT,
      allowNull: false
    }
  });
  Driver.associate = function(models) {
    
    //One driver can have many reviews
    Driver.hasMany(models.Review, {
      foreignKey: 'driver_id',
      as: 'reviews'
    })
  };
  return Driver;
};