const express = require('express');
const { getMaterials, createMaterial } = require('../controllers/materialController');
const router = express.Router();

router.get('/', getMaterials);
router.post('/', createMaterial);

module.exports = router;
