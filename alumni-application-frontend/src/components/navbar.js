import React from 'react';
import './navbar';
import { Link, BrowserRouter as Router,Routes,Route} from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        <img src="public\img\PSGiTech Logo.png" alt="Logo" />
        <span>PSG iTech Alumni Application</span>
      </Link>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/jobs">Jobs/Internships</Link>
        </li>
        <li>
          <Link to="/connect">Connect</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>

      {/* Sign Up Button */}
      <Link to="/signup" className="signup-button">
        Sign Up
      </Link>
    </nav>
  );
};

export default Navbar;
