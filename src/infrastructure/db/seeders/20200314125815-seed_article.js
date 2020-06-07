'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            { tableName: 'articles', schema: 'school' },
            [
                {
                    create_time: new Date(2020, 3, 1),
                    update_time: new Date(2020, 3, 1),
                    delete_flg: false,
                    title: '入学式',
                    contents: 'これからよろしくね',
                    author_id: 1,
                    status: 2,
                },
                {
                    create_time: new Date(2020, 6, 1),
                    update_time: new Date(2020, 6, 1),
                    delete_flg: false,
                    title: '夏休み',
                    contents: 'さあ夏休みです！',
                    author_id: 1,
                    status: 2,
                },
                {
                    create_time: new Date(2020, 9, 1),
                    update_time: new Date(2020, 9, 1),
                    delete_flg: false,
                    title: '運動会',
                    contents: '楽しもうね！',
                    author_id: 1,
                    status: 2,
                },
            ]
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete(
            { tableName: 'articles', schema: 'school' },
            null,
            {}
        );
    },
};
