'use strict';
module.exports = (sequelize, DataTypes) => {
  var Arrival = sequelize.define('Arrival', {

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    crafter_id: {
      type: DataTypes.STRING,
      allowNull: false,
      onDelete: 'CASCADE'
    },
    station_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE'
    }
  }, {});
  Arrival.associate = function (models) {
    // associations can be defined here

    //Each arrival belongs to one crafter
    Arrival.belongsTo(models.Crafter, {
      foreignKey: 'crafter_id', 
      onDelete: 'CASCADE',
      as: "crafter"
    })

    //Each arrival belongs to one station
    Arrival.belongsTo(models.Station, {
      foreignKey: 'station_id', 
      onDelete: 'CASCADE',
      as: "station"
    })
  };
  return Arrival;
};