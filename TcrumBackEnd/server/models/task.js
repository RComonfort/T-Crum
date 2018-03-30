'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    duration: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING
    },
    completed: {
      type: DataTypes.BOOLEAN,
    },
    user_story_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
    },
  }, {});
  Task.associate = function(models) {
    Task.belongsTo (models.User_story, {
      foreignKey: 'user_story_id', 
      onDelete: 'CASCADE',
    });

    Task.belongsToMany(models.miembros, {through: 'Member_task', foreignKey: 'task_id', otherKey: 'member_id'});
  };
  return Task;
};