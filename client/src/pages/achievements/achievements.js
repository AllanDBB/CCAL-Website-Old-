import React, {useState, useEffect} from "react";
import "./achievements.css";
import Trophy from '../../assets/plus/trofe.png';
import Excelence from '../../assets/plus/School-Admission.webp'

const Accordion = ({ title, children, isOpen, onClick }) => {
    return (
        <div className="accordion-item">
            <button onClick={onClick} className="accordion-button">
                {title}
            </button>
            <div className={`accordion-content ${isOpen ? "open" : ""}`}>{children}</div>
        </div>
    );
};

const Card = ({ title, description, link }) => {
    return (
      <div className="card-container">
        <div className="card-image"></div> 
        <div className="card-content">
          <a href={link} className="card-title-link">
            <span className="card-title">{title}</span>
          </a>
          <p className="card-description">{description}</p>
          <a href={link} className="card-action">
            Find out more
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    );
  };



const Achievements = () => {

    const [openAccordion, setOpenAccordion] = useState(null);

    const handleAccordion = (index) => {
        if (openAccordion === index) {
            setOpenAccordion(null);
        } else {
            setOpenAccordion(index);
        }
    };
  
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);

    return (
        <div className="achievements-container" id='top'>

            <div className="achievements-banner">
                <h1>LOGROS Y RECONOCIMIENTOS</h1>
                <p>Descubre nuestras destacadas contribuciones y logros.</p>
            </div>

            <div className="section white-section">
                <div className="two-column-section">
                    <img src={Excelence} alt="Excelencia" className="excelence-photo" />
                    <div className="text-column">
                        <Accordion title="Logros institucionales" isOpen={openAccordion === 1} onClick={() => handleAccordion(1)}>
                            <p>

                            El Colegio Científico de Costa Rica sede Alajuela, desde su fundación en 2006, ha tenido un impacto positivo en la educación costarricense, destacándose por:
Aumento significativo en la matrícula.
Éxitos en olimpiadas nacionales e internacionales de ciencias, matemáticas y robótica.
Reconocimientos como bachilleres de excelencia y altos promedios en pruebas nacionales de bachillerato.
Participación en programas y concursos del Ministerio de Educación Pública (MEP) y en programas de la Universidad de Costa Rica.
Excelentes resultados de ingreso a universidades estatales y obtención de becas.
Distinciones internacionales, como la Distinción Internacional Polaris de EDUQATIA, y premios nacionales como el “Premio a la Excelencia” del Sistema Nacional de Colegios Científicos.
Mantenimiento de altos estándares académicos y promoción de valores como liderazgo y compromiso.
Rendimientos destacados en inglés, física y matemáticas.
                                
                            </p>
                        </Accordion>
                        <Accordion title="Premios" isOpen={openAccordion === 2} onClick={() => handleAccordion(2)}>
                            <p>
                            En este periodo se han obtenido 54 medallas de oro en las olimpiadas nacionales, seguido por 54 de plata y de bronce, además de 35 representaciones internacionales.
                            </p>
                        </Accordion>
                        <Accordion title="Bachilleres" isOpen={openAccordion === 3} onClick={() => handleAccordion(3)}>
                            <p>
                            cantidad de bachilleres con excelencia de los últimos seis años, destacando el curso lectivo 2016, en el que se obtuvo la mayor cantidad de dichas menciones, con 25 estudiantes reconocidos con este mérito, y siendo también la promoción con el promedio más alto del periodo con un 96,31.



Es así como del total de 156 graduados en este periodo, el 70,51% de los estudiantes obtuvo su bachiller con excelencia, lo que equivale a 110 estudiantes.
                            </p>
                        </Accordion>
                        <Accordion title="Inglés" isOpen={openAccordion === 4} onClick={() => handleAccordion(4)}>
                            <p>
                            Otro logro que es fundamental destacar es el crecimiento y certificación del inglés con el Centro Cultural Costarricense Norteamericano para todos nuestros estudiantes en los cursos lectivos 2016, 2017 y 2018, creando en el estudiante una conciencia en relación a la importancia de que entidades autorizadas y reconocidas internacionalmente certifiquen su nivel de inglés, tema que se desarrollará más adelante. A partir del curso lectivo 2019, y en relación a los cambios implementados por el Ministerio de Educación Pública hacia las pruebas FARO que finalmente serán implementadas en el curso lectivo 2021, se aprobó la certificación del idioma inglés con el programa DynEd, que tiene la certificación según el Marco Común Europeo, y finalmente en 2022 hemos migrado a la prueba de Cambridge para conocer el nivel de inglés.


                            </p>
                        </Accordion>
                        <Accordion title="Participaciones extranjeras" isOpen={openAccordion === 5} onClick={() => handleAccordion(5)}>
                            <p>
                            El Colegio Científico de Alajuela se enorgullece de que sus estudiantes hayan representado a Costa Rica en competencias internacionales en los últimos años. En los últimos ocho años, 35 estudiantes han tenido el honor de participar en eventos como la World Robot Olympiad (WRO) 2023, Technovation Girls y el National Youth Science Camp (NYSC) virtual 2022. Estas experiencias internacionales enriquecen la vida de los estudiantes, permitiéndoles conocer otras culturas y establecer lazos de amistad a nivel global. Además, el colegio ha sido campeón en las últimas tres ediciones del programa nacional "Antorcha", combinando habilidades individuales, colectivas y estratégicas.
                            </p>
                        </Accordion>
                        <Accordion title="Becas" isOpen={openAccordion === 6} onClick={() => handleAccordion(6)}>
                            <p>
                            El Colegio Científico de Alajuela ha logrado que sus estudiantes obtengan becas para estudiar en universidades privadas nacionales e internacionales. En 2020, tres estudiantes recibieron becas, uno para estudiar Ingeniería Biomédica en ULACIT y dos para estudiar en universidades de Estados Unidos. Exalumnos del colegio han sido becados en programas como el Intercambio Global de Pregrado UGRAD, auspiciado por la Embajada de los Estados Unidos. Además, estudiantes como Sofía Rodríguez García y Xiomy Gutiérrez Rodríguez han participado en programas como Tech Girl en West Virginia, y otros han obtenido la Beca Colegio Científico para continuar sus estudios.
                            </p>
                        </Accordion>
                        <Accordion title="Universidades públicas" isOpen={openAccordion === 7} onClick={() => handleAccordion(7)}>
                            <p>
                            Los estudiantes del Colegio Científico de Alajuela han demostrado un excelente rendimiento académico al obtener los mejores promedios de admisión en universidades estatales como la UCR y el TEC. En el período 2013-2021, 68 estudiantes se ubicaron entre los 35 mejores promedios de admisión en estas universidades, especialmente en carreras de alta demanda como Medicina, Ingeniería y Ciencias Básicas. En 2023 se obtuvo el doble puntaje perfecto en la admisión a la UCR y el TEC por los estudiantes David Araya y Natalia Orozco.
                            </p>
                        </Accordion>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Achievements;
