'use strict';

module.exports = (sequelize, DataTypes) => {
	const Technology = sequelize.define('Technology', {
		id: {
			allowNull: false, 
			autoIncrement: true,
			primaryKey: true, 
			type: DataTypes.INTEGER
		},

		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
	});

	Technology.associate = function (models) {

		Technology.belongsToMany(models.Project, {
				through: 'project_technology',
				foreignKey: 'technology_id',
				//otherKey: 'project_id'
				as: 'projects'
			})
	  };
	

	return Technology;
};