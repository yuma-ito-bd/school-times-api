'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'users',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER,
                    comment: 'ID',
                },
                create_time: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    comment: '作成日時',
                },
                update_time: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    comment: '更新日時',
                },
                delete_flg: {
                    allowNull: false,
                    type: Sequelize.BOOLEAN,
                    comment: '削除フラグ',
                },
                name: {
                    allowNull: false,
                    type: Sequelize.STRING,
                    comment: '名前',
                },
                school_id: {
                    allowNull: false,
                    type: Sequelize.INTEGER,
                    comment: '学校ID',
                },
                class_id: {
                    allowNull: false,
                    type: Sequelize.INTEGER,
                    comment: 'クラスID',
                },
                attribute: {
                    allowNull: false,
                    type: Sequelize.INTEGER,
                    comment: '属性',
                },
            },
            {
                schema: 'school',
                comment: 'ユーザーテーブル',
            }
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users');
    },
};
