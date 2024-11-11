// server.js
const express = require('express');

const app = express();

const cors = require('cors');

const { sequelize, VehicleType, Vehicle, Booking } = require('./models'); // Ensure correct path

const { Op } = require('sequelize');

// Middleware to parse JSON
app.use(express.json());

// Enable CORS for your frontend's origin
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from React app running on localhost:3000
}));

// Define Routes

/**
 * GET /vehicle-types
 * Fetch vehicle types filtered by the number of wheels.
 * Example: GET /vehicle-types?wheels=4
 */

  app.get('/vehicle-types', async (req, res) => {
    const { wheels } = req.query;
    if (!wheels) {
      return res.status(400).json({ error: 'Number of wheels is required as a query parameter.' });
    }
    try {
      const vehicleTypes = await VehicleType.findAll({
        where: { numberOfWheels: wheels },
        include: {
          model: Vehicle,
          as: 'Vehicles',  // Match the alias defined in the association
        },
      });
      res.json(vehicleTypes);
    } catch (error) {
      console.error('Error fetching vehicle types:', error);
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/vehicles', async (req, res) => {
    try {
      const vehicles = await Vehicle.findAll({
        attributes: ['model'] // Retrieve only the 'model' column
      });
      // Extract models and remove duplicates
      const uniqueModels = [...new Set(vehicles.map(v => v.model))];
      res.json(uniqueModels);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch models' });
    }
  });  
  
/**
 * POST /bookings
 * Submit a new booking.
 * Body Parameters: userId, vehicleId, startDate, endDate, firstName, lastName
 */

app.post('/bookings', async (req, res) => {
  const { userId, vehicleId, startDate, endDate, firstName, lastName, wheels, vehicleType, model } = req.body;

  //const userId = req.session.userId || req.body.userId; // Get userId from session or request body
  
  console.log(req.body); // Log the body to see what data is being sent

  try {
    // Attempt to create booking
    const booking = await Booking.create({ userId, vehicleId, startDate, endDate, firstName, lastName, wheels, vehicleType, model });
    res.status(201).json(booking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: error.message });
  }
});

// Test Route to Ensure Server is Running
app.get('/', (req, res) => {
  res.send('Vehicle Booking Rental System API is running.');
});

// Start Server after Database Connection

require('dotenv').config();
const PORT = process.env.PORT || 3000; // Defaults to 3000 if PORT is not set in .env

sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully.');
    return sequelize.sync(); // Ensure models are synced with the database
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });