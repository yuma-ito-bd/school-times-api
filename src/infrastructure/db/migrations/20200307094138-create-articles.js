module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'articles',
            {
                id: {
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER,
                },
                create_time: {
                    allowNull: false,
                    type: Sequelize.DATE,
                },
                update_time: {
                    allowNull: false,
                    type: Sequelize.DATE,
                },
                delete_flg: {
                    allowNull: false,
                    type: Sequelize.BOOLEAN,
                },
                title: {
                    allowNull: true,
                    type: Sequelize.STRING,
                },
                contents: {
                    allowNull: true,
                    type: Sequelize.STRING,
                },
                author_id: {
                    allowNull: false,
                    type: Sequelize.INTEGER,
                },
                status: {
                    allowNull: false,
                    type: Sequelize.INTEGER,
                },
            },
            {
                schema: 'school',
                comment: '学級だよりテーブル',
            }
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('articles');
    },
};
