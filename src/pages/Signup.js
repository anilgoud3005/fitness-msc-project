import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  return (
    <div className="auth-container">
      <h2 className="auth-title">Create Your Account</h2>
      <form className="auth-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="auth-btn">Sign Up</button>

        <p className="privacy-text">
          By signing up, you agree to our <Link to="/terms">Terms</Link> and <Link to="/privacy">Privacy Policy</Link>.
        </p>

        <div className="auth-links">
          <Link to="/login" className="auth-link">Already have an account? Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
