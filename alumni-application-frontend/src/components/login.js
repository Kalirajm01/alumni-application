// Login.js
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, such as sending credentials to a server
    console.log('Submitted:', { username, password });
  };

  return (
    <div style={loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <p style={forgotPassword}>
          <a href="/forgot-password">Forgot Password?</a>
        </p>
        <p style={gmailLink}>
          <a href="https://mail.google.com/">Login with Gmail</a>
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// Styles (you can customize these)
const loginContainer = {
  maxWidth: '300px',
  margin: 'auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginTop: '50px',
};

const forgotPassword = {
  marginTop: '10px',
  marginBottom: '10px',
};

const gmailLink = {
  color: '#4285F4',
  textDecoration: 'none',
  marginTop: '10px',
  display: 'block',
};

export default Login;
