// src/components/DataPage.js
import React, { useEffect, useState } from 'react';
import './stars.css';

function DataPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from astronomy APIs (like NASA API)
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <div className="data">
      <h1>Astronomical Phenomena</h1>
      <div className="event-list">
        {data ? (
          <>
            <h2>{data.title}</h2>
            <p>{data.explanation}</p>
            <img src={data.url} alt="astronomical event" />
          </>
        ) : (
          <p>Loading event data...</p>
        )}
      </div>
      <div className="light-pollution">
        <h2>Light Pollution Levels</h2>
        <p>Loading real-time light pollution data...</p>
      </div>
    </div>
  );
}

export default DataPage;
