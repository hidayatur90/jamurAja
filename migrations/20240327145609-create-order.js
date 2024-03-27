'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_order: {
        type: Sequelize.DATE
      },
      address: {
        type: Sequelize.TEXT
      },
      count_mushroom: {
        type: Sequelize.INTEGER
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

    // Define association to Mushroom table
    await queryInterface.addColumn('Orders', 'order_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Mushrooms',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Orders', 'order_id');
    await queryInterface.dropTable('Orders');
  }
};