const express = require('express');
const { getMeetings, createMeeting } = require('../controllers/meetingController');
const router = express.Router();

router.get('/', getMeetings);
router.post('/', createMeeting);

module.exports = router;
