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

// seeders/20220101000000-vehicle-types.js
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('VehicleTypes', [
      { name: 'Hatchback', numberOfWheels: 4 },
      { name: 'SUV', numberOfWheels: 4 },
      { name: 'Sedan', numberOfWheels: 4 },
      { name: 'Cruiser', numberOfWheels: 2 },
      { name: 'Sports', numberOfWheels: 2 },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('VehicleTypes', null, {});
  },
};