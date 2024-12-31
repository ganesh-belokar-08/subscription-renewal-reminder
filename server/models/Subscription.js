

const mongoose = require('mongoose');

// Subscription Schema
const subscriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  renewalDate: {
    type: Date,
    required: true,
  },
  reminderSent: {
    type: Boolean,
    default: false,
  },
});

// Subscription Model
module.exports = mongoose.model('Subscription', subscriptionSchema);
