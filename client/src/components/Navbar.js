//src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Stack Overflow</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
        <FaBell className="icon" onClick={() => navigate('/notifications')} />
        <FaUserCircle className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
