// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import AboutUs from './pages/About-us';
import Access from './pages/Access';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conocenos" element={<AboutUs />} />
          <Route path="/acceder" element={<Access />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
