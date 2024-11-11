// models/Vehicle.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Vehicle extends Model {}

Vehicle.init({
  model: {
    type: DataTypes.STRING,
    allowNull: false, // Set this to true if `model` can be NULL in your table
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vehicleTypeId: {  // Foreign key linking to VehicleType
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'VehicleTypes',  // Name of the VehicleType table
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Vehicle',
});

module.exports = Vehicle;
