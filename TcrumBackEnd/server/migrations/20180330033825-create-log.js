module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('Logs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      query: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      miembro_matricula: {
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
        references: {
          model: 'Miembros',
          key: 'matrciula',
          as: 'miembro_matricula',
        }
      }
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Logs'),
};