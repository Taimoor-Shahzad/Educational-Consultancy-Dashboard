const express = require('express');
const StudyMaterial = require('../models/StudyMaterial');
const router = express.Router();

// Get all study materials
router.get('/', async (req, res) => {
  try {
    const materials = await StudyMaterial.find();
    res.status(200).json(materials);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch study materials' });
  }
});

// Add study material
router.post('/', async (req, res) => {
  const { title, description, fileUrl, uploadedBy } = req.body;

  try {
    const material = new StudyMaterial({ title, description, fileUrl, uploadedBy });
    await material.save();
    res.status(201).json(material);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add study material' });
  }
});

module.exports = router;
