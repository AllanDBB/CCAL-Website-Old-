import React, { useEffect, useState } from 'react';
import './contact.css';
import FaFacebook from '../../assets/logos/icons8-facebook-nuevo.svg';
import FaInstagram from '../../assets/logos/icons8-instagram.svg';
import emailjs from 'emailjs-com';
import Picture1 from '../../assets/plus/CIENTÍFICO-DE-ALAJUELA.webp';
const Contact = () => {


  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    document.title = "CCAL - Contáctanos";
  }, []);

  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userMessage: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'Recipient Name', 
      from_name: formData.userName,
      from_email: formData.userEmail,
      message: formData.userMessage,
    };

    emailjs.send('service_6cpxqdn', 'template_zvf1daj', templateParams, '42vLgzaYkEcI4bFOt')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.log('FAILED...', error);
      });

    setFormData({
      userName: '',
      userEmail: '',
      userMessage: '',
    });

   
    setIsButtonDisabled(true);
    setTimeout(() => setIsButtonDisabled(false), 60000); 
  };

  return (
    <div className="contact-page-container">
      <div className='contact-banner'>
        <p className='h1-title-banner'> COMUNÍCATE CON NOSOTROS </p>
        <p className='p-title-banner'> Con mucho gusto te atenderemos </p>
      </div>


      <div className='white-section1'>
                <div className='admissionPicture2'>
                    <img src={Picture1} alt="Descripción de la imagen" style={{ width: 'auto', height: 'auto' }}/>
                </div>
      </div>
      
      <div className='contact-content'>
        <div className="contact-form-box">
          <form onSubmit={handleSubmit} className="contact-page-form">
            <h2>¡ESCRÍBENOS!</h2>
            
            <div className="contact-input-group">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text" 
                id="name"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-input-group">
              <label htmlFor="email">Correo Electrónico:</label>
              <input
                type="email"
                id="email"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-input-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea className='text-area-form'
                id="message"
                name="userMessage"
                value={formData.userMessage}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit-btn" disabled={isButtonDisabled}>Enviar Mensaje</button>
          </form>

        </div>

        <div className="contact-info-box">
          <div className="contact-address">
            <h3>NUESTRA UBICACIÓN</h3>
            <p>Avenida Central, Calle 18-20, Frente a Plaza Ferias</p>
            <p>Alajuela, Costa Rica</p>
          </div>


          <div className="google-map-box">
            <iframe className='iframe-class' title='google-map'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0311589500457!2d-84.22496222592396!3d10.01428489009186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f9ceabdb63f7%3A0x3c0ff8aeada9972b!2sColegio%20Cient%C3%ADfico%20de%20Costa%20Rica%2C%20sede%20de%20Alajuela%20(UNED)!5e0!3m2!1ses-419!2scr!4v1706162341399!5m2!1ses-419!2scr"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
