module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    department_major: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo_URL: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    password: {

      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Member.associate = function (models) {

    Member.belongsToMany(models.Project, {
      through: 'member_project',
      foreignKey: 'member_id',
      otherKey: 'project_id'
    })
  };

  Member.associate = function (models) {

    Member.belongsToMany(models.Task, {
      through: 'member_task',
      foreignKey: 'member_id',
      otherKey: 'task_id'
    })
  };

  Member.associate = function (models) {

    Member.hasMany(models.Log, {
      foreignKey: 'member_id',
      as: 'member'
    })
  };

  return Member;
};