import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './loader.css'; // Asegúrate de tener tu archivo CSS

const Loader = () => (
  <div className="loader-container"> 
    <div className="loader"></div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

function RootComponent() { // Envolvemos para usar estado
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga (reemplázalo con tu lógica real)
    setTimeout(() => setIsLoading(false), 2000); 
  }, []);

  return isLoading ? <Loader /> : <App />;
}

root.render(
  <React.StrictMode>
    <RootComponent /> 
  </React.StrictMode>
);
