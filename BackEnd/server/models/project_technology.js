'use strict';
module.exports = (sequelize, DataTypes) => {
  var project_technology = sequelize.define('Project_technology', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
  },
    project_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
  },
    technology_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
  },
    version: {
      allowNull: false,
      type: DataTypes.TEXT
  },
  }, {});
  project_technology.associate = function(models) {
  };
  return project_technology;
};