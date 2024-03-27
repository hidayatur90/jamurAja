'use strict';
/** @type {import('sequelize-cli').Migration} */

const STATUSORDER = ['Completed', 'Pending']
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StatusOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.ENUM(...STATUSORDER)
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StatusOrders');
  }
};