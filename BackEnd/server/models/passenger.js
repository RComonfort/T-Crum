'use strict';
module.exports = (sequelize, DataTypes) => {
  var Passenger = sequelize.define('Passenger', {

    id:{

      allowNull: false,
      primaryKey:true,
      type: DataTypes.STRING
    },
    password:{

      allowNull: false,
      type: DataTypes.STRING
    },
    first_name:{

      allowNull: false,
      type: DataTypes.STRING
    },
    last_name:{

      allowNull: false,
      type: DataTypes.STRING
    }

  }, {});

  Passenger.associate = function(models) {
    // associations can be defined here

    //One driver can have many reviews
    Passenger.hasMany(models.Review, {
      foreignKey: 'passenger_id',
      as: 'reviews'
    })
  };
  
  return Passenger;
};