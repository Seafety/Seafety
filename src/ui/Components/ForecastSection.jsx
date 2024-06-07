import React from "react";
import WaterTemperatureChart from "./charts/WaterTemperatureChart";
import PHLevelsChart from "./charts/PHLevelsChart";
import OilSpillsStormsChart from "./charts/OilSpillsStormsChart";
import red_exclamation from "../../Assets/Demo/red-exclamation.png";

const ForecastSection = () => {
  return (
    <section className="forecastSection">
      <h2>Previsões</h2>
      <div className="forecastCards">
        <div className="forecastCard">
          <div className="cardHeader">
            <p>Previsão de <span>Temperatura da Água</span></p>
            <img src={red_exclamation} alt="!" />
          </div>
          <WaterTemperatureChart />
        </div>
        <div className="forecastCard">
          <div className="cardHeader">
            <p>Previsão de <span>Níveis de pH</span></p>
            <img src={red_exclamation} alt="!" />
          </div>
          <PHLevelsChart />
        </div>
        <div className="forecastCard">
          <div className="cardHeader">
            <p>Previsão de <span>derramamentos de óleo e tempestades</span></p>
            <img src={red_exclamation} alt="!" />
          </div>
          <OilSpillsStormsChart />
        </div>
      </div>
    </section>
  );
};

export default ForecastSection;
