import React, { useEffect } from "react";
import WorldMap from "../../ui/Components/WorldMap";
import Botao from "../../ui/Components/Botao";
import Grafico from "../../ui/Components/Grafico";

const Dashboard = () => {

const data = {
  labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  datasets: [
    {
      type: 'bar',
      label: 'Altitude (mm)',
      data: [100, 120, 80, 140, 150, 170, 160, 140, 130, 110, 90, 80],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    },
    {
      type: 'line',
      label: 'Temperatura (°C)',
      data: [20, 22, 18, 25, 26, 28, 27, 25, 23, 20, 18, 17],
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      fill: false,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Altitude (mm) e Temperatura (°C)',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
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
        <div className="dash-graph">
          <Grafico data={data} options={options} />
        </div>
      </section>
    </body>
  );
};

export default Dashboard;
