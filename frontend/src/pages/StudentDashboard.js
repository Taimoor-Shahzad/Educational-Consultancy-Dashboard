import React, { useState, useEffect } from 'react';

const StudentDashboard = () => {
  const [meetings, setMeetings] = useState([
    { id: 1, title: 'Math Prep', date: '2025-01-15' },
    { id: 2, title: 'Physics Review', date: '2025-01-20' },
  ]);
  const [materials, setMaterials] = useState([
    { id: 1, title: 'Math Notes', fileUrl: '#' },
    { id: 2, title: 'Physics Slides', fileUrl: '#' },
  ]);
  const [announcements, setAnnouncements] = useState([
    { id: 1, text: 'Exam scheduled for Feb 10th' },
  ]);

  return (
    <div className="dashboard-container">
      <h1>Student Dashboard</h1>

      <h2>Scheduled Meetings</h2>
      <ul>
        {meetings.map((meeting) => (
          <li key={meeting.id}>{meeting.title} - {meeting.date}</li>
        ))}
      </ul>

      <h2>Study Materials</h2>
      <ul>
        {materials.map((material) => (
          <li key={material.id}>
            <a href={material.fileUrl} target="_blank" rel="noopener noreferrer">
              {material.title}
            </a>
          </li>
        ))}
      </ul>

      <h2>Announcements</h2>
      <ul>
        {announcements.map((announcement) => (
          <li key={announcement.id}>{announcement.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
