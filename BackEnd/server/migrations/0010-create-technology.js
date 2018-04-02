'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('technology', {
			id: {
		    	allowNull: false,
		    	autoIncrement: true,
		    	primaryKey: true,
		    	type: Sequelize.INTEGER
			},
			name: {
				allowNull: false, 
				type: Sequelize.ENUM,
				values: ['JAVA', 'JAVASCRIPT', 'HTML' ]
			}
		});
	},
	down: (queryInterface, Sequelize) => {
    	return queryInterface.dropTable('technology');
	}
};