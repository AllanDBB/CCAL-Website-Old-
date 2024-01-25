// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import MobileNavbar from './components/navbar/MobileNavbar';
import AboutUs from './pages/About-us';
import SignIn from './pages/Access/Sign-in';
import SignUp from './pages/Access/SignUp';
import TermsAndConditions from './components/conditions/TermsAndConditions';
import ForgotPassword from './pages/Access/ForgotPassword';
import RestorePassword from './pages/Access/RestorePassword';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route path="/" element={<><MobileNavbar /><Navbar /><Home /></>} />
          <Route path="/conócenos" element={<><MobileNavbar /><Navbar /><AboutUs /></>} />
          <Route path="/iniciar-sesión" element={<><MobileNavbar /><Navbar /><SignIn /></>} />
          <Route path="/registrarse" element={<><MobileNavbar /><Navbar /><SignUp /></>} />
          <Route path="/términos-condiciones" element={<><MobileNavbar /><Navbar /><TermsAndConditions /></>} />
          <Route path="/olvidé-mi-contraseña" element={<><MobileNavbar /><Navbar /><ForgotPassword /></>} />
          <Route path="/restaurar-contraseña" element={<RestorePassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
