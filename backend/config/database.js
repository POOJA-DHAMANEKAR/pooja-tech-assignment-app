// config/database.js
const { Sequelize } = require('sequelize');

// Replace with your actual database connection details
const sequelize = new Sequelize('vehicle_booking_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', // Or 'postgres', 'sqlite', etc.
});

module.exports = sequelize;
