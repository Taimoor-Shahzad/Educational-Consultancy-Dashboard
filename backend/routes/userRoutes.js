const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Register user
router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const user = new User({ name, email, password, role });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: 'Failed to register user' });
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, role: user.role });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
