'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Technologies', {
			id: {
		    	allowNull: false,
		    	autoIncrement: true,
		    	primaryKey: true,
		    	type: Sequelize.INTEGER
			},
			name: {
				allowNull: false, 
				type: Sequelize.ENUM,
				values: ['JAVA', 'JAVASCRIPT', 'HTML', 'NODE', 'POSTGRES', 'SEQUELIZE']
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}  
		});
	},
	down: (queryInterface, Sequelize) => {
    	return queryInterface.dropTable('Technologies');
	}
};