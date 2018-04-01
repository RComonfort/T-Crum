'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Member_project', [{
        id: 1,
        member_id: "A00000000",
        project_id: 1
      },
      {
        id: 2,
        member_id: "A00000000",
        project_id: 2
      },
      {
        id: 3,
        member_id: "A11111111",
        project_id: 1
      },
      {
        id: 4,
        member_id: "A22222222",
        project_id: 2
      },
      {
        id: 5,
        member_id: "A33333333",
        project_id: 3
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Member_project', [{
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