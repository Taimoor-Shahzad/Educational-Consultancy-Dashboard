const Meeting = require('../models/Meeting');

exports.getMeetings = async (req, res) => {
  try {
    const meetings = await Meeting.find();
    res.status(200).json(meetings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch meetings' });
  }
};

exports.createMeeting = async (req, res) => {
  const { title, date } = req.body;
  try {
    const newMeeting = new Meeting({ title, date });
    await newMeeting.save();
    res.status(201).json(newMeeting);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create meeting' });
  }
};
