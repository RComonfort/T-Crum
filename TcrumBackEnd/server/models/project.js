'use strict';
module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define('Project', {
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey:true,
      type: DataTypes.INETEGER
    },
    vision: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    begin_date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    end_date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    background: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    risks: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    reach:{
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {});
  Project.associate = function(models) {
    Project.belongsToMany(models.member, {through: 'member_project', foreignKey: 'project_id', otherKey: 'member_id', onDelete: 'CASCADE'});
  };
  return Project;
};