const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const announcementRoutes = require('./routes/announcementRoutes');
const materialRoutes = require('./routes/materialRoutes');
const meetingRoutes = require('./routes/meetingRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/announcements', announcementRoutes);
app.use('/api/materials', materialRoutes);
app.use('/api/meetings', meetingRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.error('Error connecting to MongoDB:', err));
