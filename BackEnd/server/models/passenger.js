'use strict';
module.exports = (sequelize, DataTypes) => {
  var Passenger = sequelize.define('Passenger', {
    id: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {});
  Passenger.associate = function(models) {
    // associations can be defined here
  };
  return Passenger;
};