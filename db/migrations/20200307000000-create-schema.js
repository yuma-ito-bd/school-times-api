module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createSchema('school');
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropSchema('school');
    },
};
