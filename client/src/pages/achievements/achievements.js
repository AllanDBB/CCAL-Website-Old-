import React, {useState} from "react";
import "./achievements.css";
import Trophy from '../../assets/plus/trofe.png';
import Excelence from '../../assets/plus/Excelencia.png'

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



const Achievements = () => {

    const [openAccordion, setOpenAccordion] = useState(null);

    const handleAccordion = (index) => {
        if (openAccordion === index) {
            setOpenAccordion(null);
        } else {
            setOpenAccordion(index);
        }
    };
  

    return (
        <div className="achievements-container">
            <div className="achievements-banner">
                <h1>Logros y reconocimientos</h1>
                <p>Descubre nuestras destacadas contribuciones y logros.</p>
            </div>

            <div className="section white-section">
                <div className="white-section-content">
                    <img src={Trophy} alt="Trofeo" className="trophy-photo"/>
                    <h2>Éxito academico</h2>
                    <p>El colegio Científico de Alajuela ha liderado la educación a lo largo de diferentes años,</p>
                    <p>Obteniendo diferentes reconocimientos en olimpiadas, eventos y competencias a nivel nacional e internacional.</p>
                </div>
            </div>

            <div className="section photo-section">
                <div className="photo-section-text">
                <p className="h1-photo-section">Algunas de nuestras representaciones se observan en olimpiadas de ciencias,</p>
                <p>retos tecnológicos, mejores puntajes a universidades públicas</p>
                <p>e incluso becas en universidades privadas y exteriores.</p>
                </div>

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
                            En relación a participaciones internacionales, más que un logro institucional, consideramos un privilegio tener estudiantes que conformen delegaciones representantes de Costa Rica en el extranjero, haciendo mérito a su esfuerzo, dedicación y perseverancia, viviendo experiencias enriquecedoras para la vida, conociendo culturas y creando lazos de amistad con otras personas. Según los datos del cuadro 10, en los últimos ocho años hemos tenido 35 estudiantes con dicho honor.



A continuación, el detalle de las representaciones internaciones de los últimos tres cursos lectivos, haciendo énfasis a que Los eventos realizados en el curso lectivo 2021, se realizaron de manera virtual, debido a la pandemia mundial:

Al revivir la historia, dentro de los logros obtenidos, destaco también que para las últimas tres ediciones del programa nacional “Antorcha”, nuestra institución ha sido el equipo campeón, combinando destrezas individuales, colectivas y de estratégica, siendo una motivación, por considerarlo un programa de tradición, para la familia y de interés educativo.
                            </p>
                        </Accordion>
                        <Accordion title="Becas" isOpen={openAccordion === 6} onClick={() => handleAccordion(6)}>
                            <p>
                                
Durante el curso lectivo 2020, tres estudiantes del Colegio Científico de Costa Rica sede Alajuela recibieron becas para estudiar en el extranjero y en universidades privadas. Uno de ellos se fue a estudiar Ingeniería Biomédica en ULACIT, Costa Rica, con la beca Opportunity Fund Education USA, y los otros dos a universidades en Estados Unidos.

Los egresados del colegio han continuado su formación académica en diversas universidades internacionales, destacando en países como Estados Unidos, Alemania, Italia, Inglaterra y Emiratos Árabes. Además, cuatro exalumnos han sido becados para participar en el programa de Intercambio Global de Pregrado UGRAD, auspiciado por la Embajada de los Estados Unidos y el Gobierno estadounidense. Los beneficiados han sido Jefferson Delgado, Daniel Pérez, Andreina Quesada y German Quesada.

Otros logros incluyen la participación de Sofía Rodríguez García en la primera edición de Tech Girl en West Virginia, la obtención de la Beca Colegio Científico por Keisy Chacón Rodríguez en 2022, y la representación en el National Youth Science Camp (NYSC) virtual 2022 por Kristell Riverson Barrantes y Sergio Castillo Víquez.
                            </p>
                        </Accordion>
                        <Accordion title="Universidades públicas" isOpen={openAccordion === 7} onClick={() => handleAccordion(7)}>
                            <p>
                            Uno de los indicadores de excelencia más significativos corresponde, a los promedios de admisión a las universidades estatales, especialmente los mejores promedios de admisión a la UCR y el ITCR entre los que destaco los siguientes:



Reconocemos que este tipo de méritos corresponden a logros personales, pero que nos engrandecen y alegran como institución.



En relación al mismo tema, para el periodo 2013-2021 se han contabilizado 34 y 34 estudiantes entre los mejores 35 puntajes de admisión a la UCR y el ITCR.
                            </p>
                        </Accordion>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Achievements;
