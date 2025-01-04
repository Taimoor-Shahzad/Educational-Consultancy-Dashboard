const express = require('express');
const otpGenerator = require('otp-generator');
const router = express.Router();

const otpStore = {};

// Generate OTP
router.post('/generate', (req, res) => {
  const { email } = req.body;
  const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
  otpStore[email] = otp;
  res.status(200).json({ message: 'OTP sent', otp });
});

// Verify OTP
router.post('/verify', (req, res) => {
  const { email, otp } = req.body;
  if (otpStore[email] === otp) {
    delete otpStore[email];
    res.status(200).json({ message: 'OTP verified' });
  } else {
    res.status(400).json({ error: 'Invalid OTP' });
  }
});

module.exports = router;
