// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
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
          <Route path="/" element={<><Navbar /><Home /></>} />
          <Route path="/conócenos" element={<><Navbar /><AboutUs /></>} />
          <Route path="/iniciar-sesión" element={<><Navbar /><SignIn /></>} />
          <Route path="/registrarse" element={<><Navbar /><SignUp /></>} />
          <Route path="/términos-condiciones" element={<><Navbar /><TermsAndConditions /></>} />
          <Route path="/olvidé-mi-contraseña" element={<><Navbar /><ForgotPassword /></>} />
          <Route path="/restaurar-contraseña" element={<RestorePassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
