'use strict';
module.exports = (sequelize, DataTypes) => {
  const Driver = sequelize.define('Driver', {
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    first_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    last_name: {
      type: DataTypes.TEXT,
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
    Project.hasMany(models.Review, {
      foreignKey: 'driver_id',
      as: 'reviews'
    })
  };
  return Driver;
};