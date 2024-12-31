

const express = require('express');
const router = express.Router();
const Subscription = require('../models/Subscription');

// Add a new subscription (POST)
router.post('/', async (req, res) => {
  try {
    const { name, service, renewalDate } = req.body;

    const newSubscription = new Subscription({
      name,
      service,
      renewalDate,
      reminderSent: false,
    });

    await newSubscription.save();
    res.status(201).json(newSubscription);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all subscriptions (GET)
router.get('/', async (req, res) => {
  try {
    const subscriptions = await Subscription.find();
    res.status(200).json(subscriptions);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update reminderSent status (PUT)
router.put('/:id', async (req, res) => {
  try {
    const subscription = await Subscription.findById(req.params.id);

    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }

    subscription.reminderSent = true;
    await subscription.save();

    res.status(200).json(subscription);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
