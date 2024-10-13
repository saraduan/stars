// src/components/SocialPage.js
import React, { useState } from 'react';
import './stars.css';

function SocialPage() {
  const [locations, setLocations] = useState([
    { id: 1, name: 'Dark Sky Park', rating: 5 },
    { id: 2, name: 'Stargazers Hill', rating: 4 }
  ]);

  return (
    <div className="social">
      <h1>Social Stargazing</h1>
      <div className="locations">
        <h2>Top Rated Stargazing Spots</h2>
        <ul>
          {locations.map(loc => (
            <li key={loc.id}>
              {loc.name} - Rating: {loc.rating} stars
            </li>
          ))}
        </ul>
      </div>
      <div className="location-share">
        <h2>Share Your Location</h2>
        <button>Share Now</button>
      </div>
    </div>
  );
}

export default SocialPage;
