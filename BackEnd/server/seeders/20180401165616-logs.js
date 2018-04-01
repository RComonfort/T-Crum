'use_strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Logs', 
    [
      {
        query: 'CREATE project',
        member_id: 'A00000000'
      },
      {
        query: 'CREATE acceptance_criteria',
        member_id: 'A11111111'
      },
      {
        query: 'DELETE project',
        member_id: 'A00000000'
      },
      {
        query: 'UPDATE project',
        member_id: 'A22222222'
      },
      {
        query: 'CREATE sprint',
        member_id: 'A33333333'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Logs', 
    [
      {
        id: 1
      },
      {
        id:2
      },
      {
        id:3
      },
      {
        id:4
      },
      {
        id:5
      }
    ], {});
  }
};
