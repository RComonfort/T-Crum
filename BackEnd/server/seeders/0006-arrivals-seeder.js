'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Arrivals',

            [
                {
                    id: 1,
                    crafter_id: "4543GJDKSM94030",
                    station_id: 1,
                    createdAt: Sequelize.fn('NOW'),
                    updatedAt: Sequelize.fn('NOW')
                },
                {
                    id: 2,
                    crafter_id: "VWLTGH567899",
                    station_id: 4,
                    createdAt: Sequelize.fn('NOW'),
                    updatedAt: Sequelize.fn('NOW')
                },
                {
                    id: 3,
                    crafter_id: "PNATUF7ARTYS456",
                    station_id: 7,
                    createdAt: Sequelize.fn('NOW'),
                    updatedAt: Sequelize.fn('NOW')
                }
            ], {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Arrivals', [
            
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