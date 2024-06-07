import React, { useEffect } from "react";
import WorldMap from "../../ui/Components/WorldMap";
import Botao from "../../ui/Components/Botao";

const Dashboard = () => {
  return (
    <body>
      <h3 className="welcome">Bem vindo(a) a bordo.</h3>
      <WorldMap />
      <section className="information">
        <section className="dash-map">
          <div className="dash-map-data">
            <ul className="dash-map-data-left">
              <li>Posição</li>
              <li>Nível do mar</li>
              <li>Temperatura</li>
              <li>Oxigenação</li>
              <li>Salinidade</li>
              <li>Microplástico</li>
              <li>pH</li>
            </ul>
            <ul className="dash-map-data-right">
              <li>43° 36.3' N 012° 31.8' W</li>
              <li>3562m</li>
              <li>25,3°C</li>
              <li>103%</li>
              <li>36PPS</li>
              <li>~=10 mil partículas</li>
              <li>7,9</li>
            </ul>
          </div>
          <p className="dash-map-data-button">Analisar</p>
        </section>
        <div className="dash-graph"></div>
      </section>
    </body>
  );
};

export default Dashboard;
