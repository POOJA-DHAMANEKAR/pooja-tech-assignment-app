// models/index.js
const sequelize = require('../config/database');
const VehicleType = require('./VehicleType');
const Vehicle = require('./Vehicle');
const Booking = require('./Booking');

VehicleType.hasMany(Vehicle, { foreignKey: 'vehicleTypeId', as: 'Vehicles' });
Vehicle.belongsTo(VehicleType, { foreignKey: 'vehicleTypeId', as: 'VehicleType' });

module.exports = { sequelize, VehicleType, Vehicle, Booking };
