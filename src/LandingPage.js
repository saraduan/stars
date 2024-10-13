// src/components/LandingPage.js
import React from 'react';
import './stars.css';

function LandingPage() {
  return (
    <div className="landing">
      <h1>Welcome to StellarWatch</h1>
      <p>Discover the constellations visible from your location in real-time.</p>
      <div className="sky-map">
        <h2>Current Sky Above You</h2>
        {/* Integrate AR or Constellation Data */}
        <p>Loading constellations...</p>
      </div>
    </div>
  );
}

export default LandingPage;
