'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [
      {
        duration: 10,
        name: 'Discutir proyecto :v',
        completed: 'false',
        user_story_id: 1
      },
      {
        duration: 5,
        name: 'Crear mockups',
        completed: 'false',
        user_story_id: 2
      },
      {
        duration: 7,
        name: 'Repartir responsabilidades',
        completed: 'true',
        user_story_id: 4
      },
      {
        duration: 1,
        name: 'Ir por cafe',
        completed: 'false',
        user_story_id: 4
      },
      {
        duration: 5,
        name: 'Dar retro',
        completed: 'false',
        user_story_id: 5
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      },
      {
        id: 4
      }, 
      {
        id: 5
      }]);
  }
};
