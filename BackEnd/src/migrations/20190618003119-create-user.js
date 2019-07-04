'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
		allowNull: false
      },
      username: {
        type: Sequelize.STRING,
		unique: true,
		allowNull: false
      },
      email: {
        type: Sequelize.STRING,
		unique: true,
		allowNull: false
      },
      password: {
        type: Sequelize.STRING,
		allowNull: false
      },
      groupsOwned: {
        type: Sequelize.STRING,
		allowNull: true
      },
      groupsJoined: {
        type: Sequelize.STRING,
		allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
