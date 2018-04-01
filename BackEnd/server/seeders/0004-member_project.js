'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('member_project', [{
        member_id: "A00000000",
        project_id: 1
      },
      {
        member_id: "A00000000",
        project_id: 2
      },
      {
        member_id: "A11111111",
        project_id: 1
      },
      {
        member_id: "A22222222",
        project_id: 2
      },
      {
        member_id: "A33333333",
        project_id: 3
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('member_project', [{
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
      },
    ]);
  }
};