const Material = require('../models/Material');

exports.getMaterials = async (req, res) => {
  try {
    const materials = await Material.find();
    res.status(200).json(materials);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch materials' });
  }
};

exports.createMaterial = async (req, res) => {
  const { title, fileUrl } = req.body;
  try {
    const newMaterial = new Material({ title, fileUrl });
    await newMaterial.save();
    res.status(201).json(newMaterial);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create material' });
  }
};
