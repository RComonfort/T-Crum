'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Members',

      [
        {
          id: "A00000000",
          department_major: 'ITC',
          name: 'John Doe',
          photo_URL: 'test_url',
          password: '12345',
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        },
        {
          id: "A11111111",
          department_major: 'INT',
          name: 'Billy Joel',
          photo_URL: 'test_url',
          password: '11111',
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        },
        {
          id: "A22222222",
          department_major: 'ITC',
          name: 'Billy Joel',
          photo_URL: 'test_url',
          password: '11111',
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        },
        {
          id: "A33333333",
          department_major: 'ISD',
          name: 'Juanito Banana',
          photo_URL: 'test_url',
          password: '22222',
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        },
        {
          id: "A44444444",
          department_major: 'INT',
          name: 'Mary Vargas',
          photo_URL: 'test_url',
          password: '33333',
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Members', 
    [
      {
        id: "A00000000"
      },
      {
        id: "A11111111"
      },
      {
        id: "A22222222"
      },
      {
        id: "A33333333"
      },
      {
        id: "A44444444"
      },
    ]);
  }
};