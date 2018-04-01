'use strict';
module.exports = (sequelize, DataTypes) => {
  var sprints = sequelize.define('sprints', {
    days: DataTypes.,
    comment: DataTypes.
  }, {});
  sprints.associate = function(models) {
    // associations can be defined here
  };
  return sprints;
};