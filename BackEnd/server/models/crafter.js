'use strict';
module.exports = (sequelize, DataTypes) => {
  var Crafter = sequelize.define('Crafter', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lat: {
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    lng: {
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    isActive: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    total_seats: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    occupied_seats:{
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Crafter.associate = function(models) {
    Crafter.hasMany (models.Station, {
      foreignKey: 'next_crafter_id',
      as: 'stations'
    }),

    Crafter.hasMany (models.Review, {
      foreignKey: 'crafter_id',
      as: 'reviews',
      onDelete: 'Cascade'
    })

    Crafter.hasMany (models.Arrival, {
      foreignKey: 'crafter_id',
      as: 'arrivals',
      onDelete: 'Cascade'
    })
  };
  return Crafter;
};