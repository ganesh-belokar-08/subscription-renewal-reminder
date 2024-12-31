
// Backend Entry Point


const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const subscriptionRoutes = require('./routes/subscriptions');

// Load environment variables from .env file
dotenv.config();

// Initialize the app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // For parsing application/json

// Routes
app.use('/api/subscriptions', subscriptionRoutes); // Handle subscription-related API requests

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB')) // Successful connection
  .catch((err) => console.log('Failed to connect to MongoDB:', err)); // Error handling

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
