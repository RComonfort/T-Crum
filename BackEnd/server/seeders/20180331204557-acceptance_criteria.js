'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Acceptance_criteria', [{
      duration: 10,
      name: 'Criterion 1',
      type: 'Ac type 1',
      user_story_id: 1
    }], {});

    return queryInterface.bulkInsert('Acceptance_criteria', [{
      duration: 5,
      name: 'Criterion 2',
      type: 'Ac type 2',
      user_story_id: 2
    }], {});

    return queryInterface.bulkInsert('Acceptance_criteria', [{
      duration: 7,
      name: 'Completion',
      type: 'Delivery',
      user_story_id: 3
    }], {});

    return queryInterface.bulkInsert('Acceptance_criteria', [{
      duration: 1,
      name: 'Easy to read',
      type: 'Aesthetics',
      user_story_id: 4
    }], {});

    return queryInterface.bulkInsert('Acceptance_criteria', [{
      duration: 5,
      name: 'Original',
      type: 'Legal',
      user_story_id: 5
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Acceptance_criteria', [{
      id: 1
    }]);
    return queryInterface.bulkDelete('Acceptance_criteria', [{
      id: 2
    }]);
    return queryInterface.bulkDelete('Acceptance_criteria', [{
      id: 3
    }]);
    return queryInterface.bulkDelete('Acceptance_criteria', [{
      id: 4
    }]);
    return queryInterface.bulkDelete('Acceptance_criteria', [{
      id: 5
    }]);
  }
};
