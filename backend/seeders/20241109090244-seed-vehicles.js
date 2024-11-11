//'use strict';

/** @type {import('sequelize-cli').Migration} */
/*module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  /*},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  /*}
};*/

// seeders/[timestamp]-seed-vehicles.js
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Vehicles', [
      { model: 'Model A', vehicleTypeId: 1, available: true, createdAt: new Date(), updatedAt: new Date() },
      { model: 'Model B', vehicleTypeId: 2, available: true, createdAt: new Date(), updatedAt: new Date() },
      { model: 'Model C', vehicleTypeId: 3, available: true, createdAt: new Date(), updatedAt: new Date() },
      { model: 'Model X', vehicleTypeId: 4, available: true, createdAt: new Date(), updatedAt: new Date() },
      { model: 'Model Y', vehicleTypeId: 5, available: true, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vehicles', null, {});
  },
};
