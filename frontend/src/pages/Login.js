import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Predefined credentials for testing
  const predefinedCredentials = [
    { email: 'admin@example.com', password: 'admin123', role: 'admin' },
    { email: 'student@example.com', password: 'student123', role: 'student' },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const user = predefinedCredentials.find(
      (cred) => cred.email === email && cred.password === password
    );

    if (user) {
      alert('Login Successful');
      localStorage.setItem('token', 'fake-token');
      localStorage.setItem('role', user.role);

      if (user.role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/student-dashboard');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
