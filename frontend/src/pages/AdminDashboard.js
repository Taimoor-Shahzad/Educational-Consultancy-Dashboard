import React from 'react';

const AdminDashboard = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>

      <h2>Manage Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>

      <h2>Add Study Materials</h2>
      <input type="text" placeholder="Material Title" />
      <input type="text" placeholder="File URL" />
      <button>Add Material</button>
    </div>
  );
};

export default AdminDashboard;
