// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import AboutUs from './pages/About-us/about_us';
import SignIn from './pages/sign_in/sign-in';
import SignUp from './pages/sign_up/signUp';
import TermsAndConditions from './pages/terms_conditions/termsAndConditions';
import ForgotPassword from './pages/forgot_password/forgotPassword';
import RestorePassword from './pages/restore_password/restorePassword';
import Contact from './pages/contact/contact';

import './App.css';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<><Home /><Footer/></>} />
          <Route path="/conócenos" element={<><AboutUs /><Footer/></>} />
          <Route path="/iniciar-sesión" element={<><SignIn /><Footer/></>} />
          <Route path="/registrarse" element={<><SignUp /><Footer/></>} />
          <Route path="/términos-condiciones" element={<><TermsAndConditions /><Footer/></>} />
          <Route path="/olvidé-mi-contraseña" element={<><ForgotPassword /><Footer/></>} />
          <Route path="/contáctanos" element={<><Contact /><Footer/></>} />
          <Route path="/restaurar-contraseña" element={<RestorePassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
