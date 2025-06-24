import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h2 className="logo">Fitness Tracker</h2>
      <div className="user">Welcome, User | Logout</div>
    </header>
  );
};

export default Header;
