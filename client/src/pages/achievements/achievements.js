import React, { useState } from "react";
import { VictoryBar, VictoryChart } from 'victory';
import "./achievements.css"; // Asegúrate de que este es el camino correcto a tu archivo CSS

const Achievements = () => {
    // Datos de ejemplo para los premios
    const allData = [
        { year: 2020, category: 'ciencias', achievements: 5, name: "Premio A" },
        { year: 2021, category: 'tecnología', achievements: 3, name: "Premio B" },
        // ... más datos ...
    ];

    // Estado para la categoría seleccionada
    const [selectedCategory, setSelectedCategory] = useState('global');
    // Estado para el año seleccionado
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    // Opciones de categorías y años para los menús desplegables
    const categories = ["ciencias", "tecnología", "arte", "otras"];
    const years = Array.from({length: 19}, (_, i) => 2006 + i); // Años desde 2006 a 2024

    // Manejador del cambio de categoría
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // Manejador del cambio de año
    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    // Función para obtener datos filtrados según la categoría y el año seleccionados
    const getFilteredData = (selectedCategory, selectedYear) => {
        if (selectedCategory === 'global') {
            return allData; // Retorna todos los datos si la categoría es 'global'
        }
        return allData.filter(item => 
            item.category === selectedCategory && item.year.toString() === selectedYear
        );
    };

    // Obtener los datos filtrados
    const filteredData = getFilteredData(selectedCategory, selectedYear);

    return (
        <div className="achievements-container">
            {/* Banner con título y descripción */}
            <div className="achievements-banner">
                <h1>Logros y reconocimientos</h1>
                <p>Descubre nuestras destacadas contribuciones y logros.</p>
            </div>

            {/* Controles para la selección de categoría y año */}
            <div className="selection-controls">
                <select onChange={handleCategoryChange} value={selectedCategory}>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>

                <select onChange={handleYearChange} value={selectedYear}>
                    {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>

            {/* Contenedor del gráfico */}
            <div className="chart-container">
                <VictoryChart>
                    <VictoryBar data={filteredData} x="name" y="achievements" />
                </VictoryChart>
            </div>
        </div>
    );
}

export default Achievements;
