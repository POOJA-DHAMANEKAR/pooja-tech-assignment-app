// models/VehicleType.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class VehicleType extends Model {}

VehicleType.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numberOfWheels: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'VehicleType',
});

module.exports = VehicleType;
