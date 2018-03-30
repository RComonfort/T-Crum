module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define('Log', {
    query: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  
  Log.associate = (models) => {
    // associations can be defined here
    Log.belongsTo(models.Miembro, {
      foreignKey: 'miembro_matricula',
      onDelete: 'CASCADE'
    });
  };

  return Log;
};