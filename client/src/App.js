import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import AboutUs from './pages/about-us/about_us';
import Contact from './pages/contact/contact';
import Achievements from './pages/achievements/achievements';
import Admission from './pages/admission/admission';
import './App.css';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<><Home /><Footer/></>} />
          <Route path="/conócenos" element={<><AboutUs /><Footer/></>} />
          <Route path="/contáctanos" element={<><Contact /><Footer/></>} />
          <Route path="/logros" element={<><Achievements/><Footer/></>} />
          <Route path="/admisión" element={<><Admission/><Footer/></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
