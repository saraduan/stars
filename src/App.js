// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import SocialPage from './SocialPage';
import DataPage from './DataPage';
import './stars.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/data" element={<DataPage />} />
        <Route path="/social" element={<SocialPage />} />
      </Routes>
    </Router>
  );
}

export default App;
