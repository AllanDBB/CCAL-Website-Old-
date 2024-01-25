import React, { useEffect, useState } from 'react';
import './Contact.css';
import FaFacebook from '../assets/icons8-facebook-nuevo.svg';
import FaInstagram from '../assets/icons8-instagram.svg';

const Contact = () => {

  useEffect(() => {
    document.title = "CCAL - Contáctanos";
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-page-container">
      <div className="contact-form-box">
      <form onSubmit={handleSubmit} className="contact-page-form">
          <h2>Envíanos un Mensaje</h2>
          
          <div className="contact-input-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="contact-input-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="contact-input-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="contact-submit-btn">Enviar Mensaje</button>
        </form>

        <div className="opening-hours-box">
          <h3>Horario de Atención</h3>
          <p><strong>Lunes:</strong> 07:00 - 17:00</p>
          <p><strong>Martes:</strong> 07:00 - 17:00</p>
          <p><strong>Miércoles:</strong> 07:00 - 17:00</p>
          <p><strong>Jueves:</strong> 07:00 - 17:00</p>
          <p><strong>Viernes:</strong> 07:00 - 17:00</p>
          <p><strong>Sábado:</strong> CERRADO</p>
          <p><strong>Domingo:</strong> CERRADO</p>
        </div>
      </div>


      <div className="contact-info-box">
        <h2>¡COMUNÍCATE CON NOSOTROS!</h2>
        <p>O aún mejor, ¡Ven a visitarnos!</p>
        <div className="contact-address">
          <h3>COLEGIO CIENTÍFICO DE ALAJUELA</h3>
          <p>Avenida Central, Calle 18-20, Frente a Plaza Ferias</p>
          <p>Alajuela, Costa Rica</p>
          <p>Tel. (506) 2430-9782  (506) 2431-4405</p>
        </div>

        <div className="social-media-links">
          <a href="https://www.facebook.com/ccalajuela" target="_blank" rel="noopener noreferrer">
            <img src={FaFacebook} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/ccalajuela" target="_blank" rel="noopener noreferrer">
            <img src={FaInstagram} alt="Instagram" className="social-icon" />
          </a>
        </div>

        <div className="google-map-box">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0311589500457!2d-84.22496222592396!3d10.01428489009186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f9ceabdb63f7%3A0x3c0ff8aeada9972b!2sColegio%20Cient%C3%ADfico%20de%20Costa%20Rica%2C%20sede%20de%20Alajuela%20(UNED)!5e0!3m2!1ses-419!2scr!4v1706162341399!5m2!1ses-419!2scr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
