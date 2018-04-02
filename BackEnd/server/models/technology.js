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

	return Technology;
};