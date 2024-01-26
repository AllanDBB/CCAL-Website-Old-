import React, {useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
import './termsAndConditions.css';

const TermsAndConditions = () => {

  useEffect(() => {
    document.title = "CCAL - Términos y condiciones";
  }, []);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div className="container-terminos">
      <div className="contenido-terminos">
        <h1>Términos y Condiciones</h1>
        <h1>Términos y Condiciones de Uso - Colegio Científico de Alajuela</h1>

            <h2>INFORMACIÓN RELEVANTE</h2>
            <p>
            El acceso y uso del sitio web del Colegio Científico de Alajuela (en adelante "el Colegio") y los servicios relacionados con el proceso de admisión implican la aceptación de los siguientes Términos y Condiciones. Estos términos aplican a todos los visitantes, usuarios y personas que accedan o utilicen el servicio. El uso del sitio web implica la aceptación completa de estas condiciones.
            </p>

            <h2>DATOS PERSONALES</h2>
            <p>
            El usuario se compromete a proporcionar información verdadera, exacta y completa en el proceso de admisión y registro. El Colegio garantiza la confidencialidad de los datos proporcionados de acuerdo con la normativa vigente sobre protección de datos.
            </p>

            <h2>USO DEL SITIO WEB</h2>
            <p>
            El sitio web del Colegio es de uso exclusivo para fines educativos y de admisión. Queda prohibido su uso para actividades ilegales, fraudulentas o que violen estos Términos y Condiciones.
            </p>

            <h2>PROPIEDAD INTELECTUAL</h2>
            <p>
            Todos los contenidos del sitio web, incluyendo textos, gráficos y logos, son propiedad del Colegio y están protegidos por las leyes de propiedad intelectual. El uso no autorizado de estos materiales está estrictamente prohibido.
            </p>

            <h2>LIMITACIÓN DE RESPONSABILIDAD</h2>
            <p>
            El Colegio no será responsable de daños directos, indirectos, incidentales o consecuentes derivados del uso o incapacidad de uso del sitio web y los servicios asociados.
            </p>

            <h2>MODIFICACIONES DEL SERVICIO Y PRECIOS</h2>
            <p>
            El Colegio se reserva el derecho de modificar o interrumpir el servicio (o cualquier parte del contenido) en cualquier momento sin previo aviso.
            </p>

            <h2>ENLACES A TERCEROS</h2>
            <p>
            El sitio web puede contener enlaces a sitios web de terceros que no son propiedad ni están controlados por el Colegio. El Colegio no asume responsabilidad por el contenido, políticas de privacidad o prácticas de sitios web de terceros.
            </p>

            <h2>CAMBIOS EN LOS TÉRMINOS Y CONDICIONES</h2>
            <p>
            El Colegio se reserva el derecho, a su discreción, de modificar o reemplazar estos Términos en cualquier momento. Lo que constituye un cambio material será determinado a discreción del Colegio.
            </p>

            <h2>CONTACTO</h2>
            <p>
            Para cualquier consulta relacionada con estos Términos y Condiciones, por favor contacte al Colegio a través de los medios proporcionados en el sitio web.
            </p>

        <button onClick={handleBack} className="boton-confirmar">Confirmar y Volver</button>
      </div>
    </div>
  );
};

export default TermsAndConditions;
