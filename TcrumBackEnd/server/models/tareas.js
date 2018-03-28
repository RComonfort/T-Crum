'use strict';
module.exports = (sequelize, DataTypes) => {
  var tareas = sequelize.define('tareas', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    duracion: {
      type: DataTypes.INTEGER,
    },
    nombre: {
      type: DataTypes.STRING
    },
    completado: {
      type: DataTypes.BOOLEAN,
    },
    historia_de_usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
    },
  }, {});
  tareas.associate = function(models) {
    tareas.belongsTo (models.historia_de_usuario, {
      foreignKey: 'historia_de_usuario_id', 
      onDelete: 'CASCADE',
    });

    tareas.belongsToMany(models.miembros, {through: 'tarea_miembro', foreignKey: 'tarea_id', otherKey: 'miembro_id'});
  };
  return tareas;
};