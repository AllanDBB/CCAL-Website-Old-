import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import './home.css';
import Admision from '../../assets/plus/Admision.png';
import Trophy from '../../assets/plus/Trophy-home.png';
import Conocenos from '../../assets/plus/Conocenos.png';

const Home = () => {
  const scrollToContent = () => {
    document.querySelector('.scroll-snap-card-container').scrollIntoView({ behavior: 'smooth' });
  };

  const [stats, setStats] = useState([
    { number: 420, label: "Estudiantes graduados" },
    { number: 18, label: "Años de experiencia" },
    { number: 100, label: "Mejores promedios" },
    { number: 200, label: "Competencias" },
    { number: 30, label: "Representaciones internacionales" }
  ]);
  const [currentNumbers, setCurrentNumbers] = useState(stats.map(() => 0));
  const statsSectionRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const intervalId = setInterval(() => {
            setCurrentNumbers(prevNumbers => prevNumbers.map((current, index) => {
              const target = stats[index].number;
              const increment = Math.ceil(target / 100); // Ajusta la velocidad de la animación
              return Math.min(target, current + increment); // Incrementamos hasta el valor objetivo
            }));
          }, 10); // Intervalo de 10ms para una animación más suave

          return () => clearInterval(intervalId); // Limpiamos el intervalo al salir de la vista
        }
      },
      { threshold: 0.5 } // Ajusta el umbral de visibilidad según tus necesidades
    );

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }

    return () => {
      if (statsSectionRef.current) {
        observer.unobserve(statsSectionRef.current);
      }
    };
  }, [stats]); 

  return (
    <div className="home-container">
      <header className="hero-section"> 
        <div className="hero-content">
          <h1 className="hero-title">COLEGIO CIENTÍFICO DE ALAJUELA</h1>
          <h2 className="hero-subtitle">Institución líder en la educación media</h2>
          <button className="HomeB" onClick={scrollToContent}>¡Empezar Ahora!</button>
        </div>
      </header>


      <div className="card-redirect-container">
        <div className="card-redirect">
          <img src={Conocenos} alt="Conócenos" />

          <div className="card-redirect-details">
            <p className="text-title">¿Quieres saber más sobre nosotros?</p>
          </div>
          <NavLink to="/conócenos" className="card-redirect-button">
            <button className="card-redirect-button">Más información</button>
          </NavLink>
        </div>

        <div className="card-redirect">
          <img src={Trophy} alt="Logros" />
          <div className="card-redirect-details">
            <p className="text-title">¿Te interesaría saber sobre nuestros logros?</p>
          </div>
          <NavLink to="/logros" className="card-redirect-button">
            <button className="card-redirect-button">Más información</button>
          </NavLink>
        </div>

        <div className="card-redirect">
          <img src={Admision} alt="Admision" />
          <div className="card-redirect-details">
            <p className="text-title">¿Acaso te gustaría aplicar a nuestra institución?</p>
          </div>
          <NavLink to="/admisión" className="card-redirect-button">
            <button className="card-redirect-button">Más información</button>
          </NavLink>
        </div>
      </div>


      <div className="stats-section" ref={statsSectionRef}>
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div className="stat" key={index}>
              <span className="stat-number">{currentNumbers[index]}+</span>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-snap-card-container">
        <div className="scroll-card-paragraph"></div>
        <div className="responsive-iframe-container">
          <iframe
            width="744"
            height="419"
            src="https://www.youtube.com/embed/AhGhLTd7BMc"
            title="¡Más que una fórmula! - 15 Aniversario del CCC Alajuela"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default Home;
