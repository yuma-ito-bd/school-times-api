'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
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
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
        return queryInterface.bulkDelete(
            { tableName: 'articles', schema: 'school' },
            null,
            {}
        );
    },
};
