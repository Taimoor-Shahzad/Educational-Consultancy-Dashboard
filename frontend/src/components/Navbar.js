import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    alert('Logged out successfully');
    navigate('/');
  };

  const role = localStorage.getItem('role');

  return (
    <nav style={{ padding: '10px', background: '#007bff', color: 'white' }}>
      <ul style={{ display: 'flex', justifyContent: 'space-between', listStyleType: 'none', padding: 0 }}>
        {role === 'admin' && (
          <li>
            <Link to="/admin-dashboard" style={{ color: 'white', textDecoration: 'none' }}>
              Admin Dashboard
            </Link>
          </li>
        )}
        {role === 'student' && (
          <li>
            <Link to="/student-dashboard" style={{ color: 'white', textDecoration: 'none' }}>
              Student Dashboard
            </Link>
          </li>
        )}
        <li>
          <button
            onClick={handleLogout}
            style={{
              background: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              padding: '5px 10px',
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
