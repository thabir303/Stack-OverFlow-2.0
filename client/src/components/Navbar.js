import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    const handleNotificationClick = () => {
        navigate('/notifications');
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <h1>Stack Overflow</h1>
                </Link>
            </div>
            <div className="navbar-items">
                <div className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/signin">Sign In</Link>
                </div>
                <div className="navbar-icons">
                    <FaBell className="icon notification-icon" onClick={handleNotificationClick} />
                    <FaUserCircle className="icon profile-icon" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;