'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            {
                schema: 'school',
                tableName: 'articles',
            },
            'class_id',
            {
                type: Sequelize.INTEGER,
                allowNull: false,
            }
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            { tableName: 'articles', schema: 'school' },
            'class_id'
        );
    },
};
