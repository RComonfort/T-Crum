module.exports = (sequelize, DataTypes) => {
  const Member_project = sequelize.define('Member_project', {

      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      member_id: {

          allowNull: false,
          type: DataTypes.INTEGER
      },

      project_id: {

          allowNull: false,
          type: DataTypes.INTEGER
      },
  });

  return Member_project;
};