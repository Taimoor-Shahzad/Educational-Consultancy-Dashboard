const Announcement = require('../models/Announcement');

exports.getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find();
    res.status(200).json(announcements);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch announcements' });
  }
};

exports.createAnnouncement = async (req, res) => {
  const { text } = req.body;
  try {
    const newAnnouncement = new Announcement({ text });
    await newAnnouncement.save();
    res.status(201).json(newAnnouncement);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create announcement' });
  }
};
