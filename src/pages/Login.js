import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="auth-container">
      <h2 className="auth-title">FitTrack Login</h2>
      <form className="auth-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="auth-btn">Login</button>

        <div className="auth-links">
          <Link to="/forgot-password" className="auth-link">Forgot password?</Link>
          <Link to="/signup" className="auth-link">Create an account</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
