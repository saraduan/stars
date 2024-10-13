// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './stars.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/data">Astronomical Data</Link></li>
        <li><Link to="/social">Social Page</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
