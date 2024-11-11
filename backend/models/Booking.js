// models/booking.js
  const { DataTypes } = require('sequelize');
  const sequelize = require('../config/database');
  //const VehicleType = require('./VehicleType');
  
  const Booking = sequelize.define('Booking', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    vehicleId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    wheels:
    {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    VehicleType:
    {
      type: DataTypes.STRING,
      allowNull: true,
    },
    model:
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  module.exports = Booking;
  