import React, { useEffect } from "react";
import WorldMap from "../../ui/Components/WorldMap";
import Botao from "../../ui/Components/Botao";
import Grafico from "../../ui/Components/Grafico";
import SEA_SURFACE_MAP from "../../Assets/Demo/SEA_SURFACE_TEMPERATURE.png";
import red_exclamation from "../../Assets/Demo/red-exclamation.png";
import black_exclamation from "../../Assets/Demo/black-exclamation.png";
import nuvem from "../../Assets/Demo/nuvem.png";
import son from "../../Assets/Demo/Son.png";
import world from "../../Assets/Demo/World.png";
import grafico_pizza_icon from "../../Assets/Demo/grafico-pizza-icon.png";
import grafico_icon from "../../Assets/Demo/grafico-icon.png";
import salanidade from "../../Assets/Demo/salanidade.svg";
import ForecastSection from "../../ui/Components/ForecastSection";

const Dashboard = () => {
  const data = {
    labels: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ],
    datasets: [
      {
        type: "bar",
        label: "Altitude (mm)",
        data: [100, 120, 80, 140, 150, 170, 160, 140, 130, 110, 90, 80],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        type: "line",
        label: "Temperatura (°C)",
        data: [20, 22, 18, 25, 26, 28, 27, 25, 23, 20, 18, 17],
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Altitude (mm) e Temperatura (°C)",
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
      <section className="global-data-container">
        <h2 className="global-data-title">Dado Mundiais</h2>
        <div className="global-data-map">
          <img src={SEA_SURFACE_MAP} alt="" srcset="" />
          <div className="global-data-map-data">
            <p className="warning-title">
              <img src={red_exclamation} alt="!" />
              Aumento de temperatura!
            </p>
            <div className="influences">
              <p>Influências:</p>
              <div className="influence-item">
                <img src={world} alt="World Icon" />
                <p>El Niño & La Niña</p>
              </div>
              <div className="influence-item">
                <img src={grafico_pizza_icon} alt="Pie Chart Icon" />
                <p>Derretimento das Geleiras</p>
              </div>
              <div className="influence-item">
                <img src={grafico_icon} alt="Chart Icon" />
                <p>Aumento de 0,18°C por década</p>
              </div>
            </div>
            <ul className="details">
              <li>
                <strong>Clima:</strong>A temperatura da superfície global
                crescente está intensificando eventos climáticos extremos, como
                furacões e tempestades.
              </li>
              <li>
                <strong>Ecossistemas:</strong>O aumento da temperatura está
                causando o branqueamento de corais e afetando a biodiversidade
                marinha.
              </li>
              <li>
                <strong>Nível do Mar:</strong>
                Contribui para a expansão térmica da água e o derretimento de
                geleiras, elevando o nível do mar.
              </li>
            </ul>
          </div>
        </div>
        <div className="global-data-map">
          <img src={salanidade} alt="" srcset="" />
          <div className="global-data-map-data">
            <p className="warning-title">
              <img src={black_exclamation} alt="" />A salinidade média da
              superfície é de aproximadamente 35 PSS, variando entre 32 e 39
              PSS.
            </p>
            <div className="influences">
              <p>Influências:</p>
              <div className="influence-item">
                <img src={nuvem} alt="" />
                <p>Alta/Baixa Pluvosidade</p>
              </div>
              <div className="influence-item">
                <img src={grafico_icon} alt="" />
                <p>Derretimento das Geleiras</p>
              </div>
              <div className="influence-item">
                <img src={son} alt="" />
                <p>Épocas do ano</p>
              </div>
            </div>
            <ul className="details">
              <li>
                <strong>Ecossistemas Marinhos:</strong> Altera a distribuição de
                espécies e a saúde dos corais, impactando a biodiversidade
                marinha.
              </li>
              <li>
                <strong>Nível do Mar:</strong>
                Contribui para mudanças na densidade da água e expansão térmica,
                elevando o nível do mar.
              </li>
              <li>
                <strong>Agricultura e Pesca: </strong>
                Afeta a qualidade da água para irrigação e os habitats de
                espécies importantes para a pesca.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <ForecastSection />
    </body>
  );
};

export default Dashboard;
