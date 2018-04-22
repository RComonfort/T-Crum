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
      type: DataTypes.INT
    },
    occupied_seats:{
      allowNull: false,
      type: DataTypes.INT
    }
  }, {});
  Crafter.associate = function(models) {
    Crafter.hasMany (models.Station, {
      foreignKey: 'next_crafter_id',
      as: 'stations',
      onDelete: 'Cascade'
    }),

    Crafter.hasMany (models.Review, {
      foreignKey: 'crafter_id',
      as: 'reviews',
      onDelete: 'Cascade'
    })
  };
  return Crafter;
};