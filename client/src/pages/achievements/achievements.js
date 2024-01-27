import React, { useState } from "react";
import { VictoryArea, VictoryChart, VictoryAxis, VictoryVoronoiContainer, VictoryTooltip } from 'victory';
import "./achievements.css";

const Achievements = () => {
    const allData = [
        // ... tus datos ...
    ];

    const [selectedCategory, setSelectedCategory] = useState('Ciencias');
    const categories = ["Ciencias", "TECH", "Arte", "Graduandos", "Otros"];

    const filteredData = allData.filter(item => item.category === selectedCategory);

    return (
        <div className="achievements-container">
            <div className="achievements-banner">
                <h1>Logros y reconocimientos</h1>
                <p>Descubre nuestras destacadas contribuciones y logros.</p>
            </div>

            <div className="selection-controls">
                <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            <div className="chart-container">
                <VictoryChart
                    domainPadding={20}
                    containerComponent={
                        <VictoryVoronoiContainer
                            labels={({ datum }) => `Año: ${datum.year}\nOro: ${datum.gold}\nPlata: ${datum.silver}\nBronce: ${datum.bronze}`}
                            labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{ fill: "white" }} />}
                        />
                    }
                >
                    <VictoryAxis />
                    <VictoryAxis dependentAxis />
                    <VictoryArea
                        data={filteredData}
                        x="year"
                        y={(datum) => datum.gold + datum.silver + datum.bronze}
                    />
                </VictoryChart>
            </div>
        </div>
    );
}

export default Achievements;
