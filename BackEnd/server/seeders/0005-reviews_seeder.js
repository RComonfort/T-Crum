'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Reviews', 

      [
        {
          id: 1,
          driver_id: 1,
          passenger_id: "passenger1",
          crafter_id: "4543GJDKSM94030",
          comment: "Great service!",
          score: 4.98,
          kindness_prize: true,
          cleanliness_prize: false,
          driving_skills_prize: false,
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        },
        {
          id: 2,
          driver_id: 2,
          passenger_id: "passenger1",
          crafter_id: "4543GJDKSM94030",
          comment: "Great conversation!",
          score: 4.5,
          kindness_prize: false,
          cleanliness_prize: false,
          driving_skills_prize: true,
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        },
        {
          id: 3,
          driver_id: 3,
          passenger_id: "passenger1",
          crafter_id: "4543GJDKSM94030",
          comment: "Great driving skills!",
          score: 4.0,
          kindness_prize: false,
          cleanliness_prize: true,
          driving_skills_prize: true,
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Reviews', 
    [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      }
    ]);
  }
};