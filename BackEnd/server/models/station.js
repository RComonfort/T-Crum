'use strict';
module.exports = (sequelize, DataTypes) => {
  var Station = sequelize.define('Station', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
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
    waiting_people: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    next_crafter_arrival_time: {
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    next_crafter_id: {
      allowNull: true,
      type: DataTypes.STRING
    },
  }, {});
  Station.associate = function (models) {
    
    Station.belongsTo(models.Crafter, {
      foreignKey: 'next_crafter_id',
      as: 'next_crafter'
    })

    Station.hasMany (models.Arrival, {
      foreignKey: 'station_id',
      as: 'arrivals',
      onDelete: 'Cascade'
    })
  };
  return Station;
};