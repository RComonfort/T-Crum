'use strict';
module.exports = (sequelize, DataTypes) => {

	var Sprints = sequelize.define('Sprints', {
	  	id: {
		    allowNull: false,
		    autoIncrement: true,
		    primaryKey: true,
		    type: DataTypes.INTEGER
	    },

	    days: {
	      	type: DataTypes.INTEGER
	    },

	    comment: {
			allowNull: true,
	     	type: DataTypes.TEXT
	    }
  	}, {});

  	Sprints.associate = function (models) {
    	Project.hasMany(models.User_story, {
	      	foreignKey: 'sprint_id',
	      	as: 'sprint'
    	})
  	};

  	return Sprints;
};