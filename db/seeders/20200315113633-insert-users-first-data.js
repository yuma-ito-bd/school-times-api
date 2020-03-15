'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            { tableName: 'users', schema: 'school' },
            [
                {
                    create_time: new Date(),
                    update_time: new Date(),
                    delete_flg: false,
                    name: '太郎ママ',
                    school_id: 1,
                    class_id: 1,
                    attribute: 1,
                },
                {
                    create_time: new Date(),
                    update_time: new Date(),
                    delete_flg: false,
                    name: '太郎の先生',
                    school_id: 1,
                    class_id: 1,
                    attribute: 2,
                },
                {
                    create_time: new Date(),
                    update_time: new Date(),
                    delete_flg: false,
                    name: '学年主任',
                    school_id: 1,
                    class_id: 1,
                    attribute: 3,
                },
            ]
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete(
            { tableName: 'users', schema: 'school' },
            null,
            {}
        );
    },
};
