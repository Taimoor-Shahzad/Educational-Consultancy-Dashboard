const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // Import path module
require('dotenv').config();

// Import routes
const otpRoutes = require('./routes/otpRoutes');
const userRoutes = require('./routes/userRoutes');
const studyMaterialRoutes = require('./routes/studyMaterialRoutes');

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/otp', otpRoutes);
app.use('/api/users', userRoutes);
app.use('/api/materials', studyMaterialRoutes);

// Root route (for testing)
app.get('/', (req, res) => {
  res.send('Welcome to the Educational Consultancy Backend API');
});

// Serve React frontend
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Handle any unmatched routes by serving the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// MongoDB Connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err));
