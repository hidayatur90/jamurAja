'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Status_orders', [{
      status: 'Completed',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
    await queryInterface.bulkInsert('Status_orders', [{
      status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
