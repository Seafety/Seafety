import React from "react";
import WorldMap from "../../ui/Components/WorldMap";
import red_exclamation from "../../Assets/Demo/red-exclamation.png";
import green_time from "../../Assets/Demo/green-time-icon.png";

const Navegacao = () => {
  return (
    <body className="navegacao-body">
      <h3 className="welcome">Bem vindo(a) a bordo.</h3>
      <h1 className="ship-title">Navio BR01FR</h1>
      <section className="info-section">
        <WorldMap />
        <div className="info-container">
          <div className="details">
            <p>
              <strong>Percurso:</strong> 9.708,13 km
            </p>
            <p>
              <strong>Maior onda registrada:</strong> 1.5m
            </p>
            <p>
              <strong>Temperatura da Superfície Oceânica média:</strong> 27°C
            </p>
            <p>
              <strong>Tempo de Percurso:</strong> 15 dias
            </p>
          </div>
          <ul className="menu">
            <li>CARGA</li>
            <li>MELHOR ROTA</li>
            <li>TEMPO BOM</li>
          </ul>
          <div className="warnings">
            <h4>Avisos:</h4>
            <div className="warning">
              <img src={red_exclamation} alt="" />
              <div className="warning-flex">
                <strong>Tempestade prevista de 4.000,00km à 5.000,00km.</strong>
                <p>Vento, Direção: 4.0m/s, 80.0°</p>
              </div>
            </div>
            <div className="warning">
              <img src={green_time} alt="" />
              <div className="warning-flex">
                <strong>Tempestade prevista de 4.000,00km à 5.000,00km.</strong>
                <p>Vento, Direção: 4.0m/s, 80.0°</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ul  className="navios">
        <li>Navio CN02EW</li>
        <li>Navio EN03PR</li>
        <li>Navio NB03LP</li>
      </ul>
      <p className="demo-alert">Isso é apenas um protótipo, essa funcionalidade não é usável. <br />
      Outras navegações não estão disponíveis.</p>
    </body>
  );
};

export default Navegacao;
