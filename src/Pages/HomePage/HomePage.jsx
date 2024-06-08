import React from "react";
import PropTypes from "prop-types";
import teste1 from "../../Assets/HomeAssets/teste1.png";
import imgcomofunciona from "../../Assets/HomeAssets/imgcomofunciona.svg";
import parceiros from "../../Assets/HomeAssets/parceiros.png";
import right from "../../Assets/HomeAssets/right.png";
import left from "../../Assets/HomeAssets/left.png";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  return (
    <div className="Home">
      <div className="banner-container">
        <video
          className="home-video"
          preload="auto"
          autoplay=""
          loop
          muted
          playsInline
        >
          <source
            src="https://s3-figma-videos-production-sig.figma.com/video/1359687156048822209/TEAM/d0fd/3273/-e78c-441e-8a63-641eabadb344?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M4eCo6fwgoEEx7ZQQyJc6DuQkxIXshybA5shbOqF7EWv8b9WKx8a3pnW9wrBLZMtxkD72P5~w-XGRflXNpgLbwjHhrxh8YUvlfFYV9DIUATbs1G6NuJTW97JIzJNy6wLNQUrVRP2kzMWHMUGOcPYyCXvkNHmdrJRThPRuwJWiHBfE77MFJHIUKWjNlxLWHUut~7P1DTrE2uEflrQJBHmIZXQcafMXKwbPGyOPzSP8C2q6RPHw9dZ6hJWE3yj4olYBPALOudJ8v-KHASO0jVZuz13cnx4vrw4KI6fEGoPca9ahmOhGwIXD8O54jWDu2vnyLMFImxM3zvWRKYavjv5AQ__"
            type="video/mp4"
          ></source>
        </video>
        <div className="banner-content">
          <p className="text-container-home">
            Transformando dados oceânicos em soluções inteligentes para um
            futuro sustentável.
          </p>
          <Link to="/TubAI">
            <button className="btn-banner">Saiba mais</button>
          </Link>
        </div>
      </div>

      <div className="container-inovacao">
        <div className="div-txt-inovacao">
          <h3 className="box-titulo1">
            Nossa <b className="txt-destaque">Inovação</b>.
          </h3>
          <p>
            Desenvolvemos uma IA que utiliza dados da internet para prever
            catástrofes oceânicas, mudanças ambientais (temperatura, pH) e
            variações nas populações de espécies, promovendo a gestão
            sustentável e a preservação dos ecossistemas marinhos.
          </p>
        </div>

        <img className="teste1" src={teste1} />
      </div>

      <div className="container-comofunciona">
        <h3 className="box-titulo">
          Como <b className="txt-destaque">funciona</b>.
        </h3>
        <div className="img-como-funciona">
          <img className="imgcomofunciona" src={imgcomofunciona} />
        </div>
        <div>
          <div className="comofunciona-textos">
            <div className="txt-como-funciona">
              <h3>Coleta de Dados</h3>
              <p>
                A IA coleta e processa grandes volumes de dados de fontes
                confiáveis na internet, incluindo informações climáticas, dados
                de poluição, registros de espécies marinhas, e muito mais.
              </p>
            </div>

            <div className="txt-como-funciona">
              <h3>Análise de Padrões</h3>
              <p>
                Utilizando algoritmos de aprendizado de máquina, a IA identifica
                padrões emergentes que podem indicar potenciais ameaças ou
                mudanças nos ecossistemas marinhos.
              </p>
            </div>

            <div className="txt-como-funciona">
              <h3>Previsões</h3>
              <p className="txt-box-comofunciona">
                Nossa IA prevê derramamentos de óleo, tempestades, tsunamis,
                alterações nas populações de espécies, migrações, riscos de
                extinção e mudanças na temperatura da água, pH, e salinidade.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-beneficios">
        <h3 className="box-titulo">
          <b className="txt-destaque">Benefícios</b>.
        </h3>
        <div className="box-3itens">
          <div className="item-3">
            <h4>Resposta antecipada</h4>
            <p>
              Permite que governos e organizações respondam rapidamente a
              ameaças iminentes, minimizando o impacto ambiental.
            </p>
          </div>
          <div className="item-3">
            <h4>Decisões Informadas</h4>
            <p>
              Fornece dados precisos e análises que ajudam na tomada de decisões
              estratégicas para a conservação dos oceanos.
            </p>
          </div>
          <div className="item-3">
            <h4>Sustentabilidade</h4>
            <p>
              Contribui para a sustentabilidade dos oceanos ao monitorar e
              prever eventos que podem causar danos significativos.
            </p>
          </div>
        </div>
        <div className="box-2itens">
          <div className="item">
            <h4>Preservação de Espécies</h4>
            <p>
              Auxilia na proteção de espécies marinhas, identificando áreas e
              condições críticas para sua sobrevivência.
            </p>
          </div>
          <div className="item">
            <h4>Monitoramento Ambiental</h4>
            <p>
              Ajuda a manter um ambiente oceânico equilibrado, monitorando
              parâmetros essenciais como temperatura e pH.
            </p>
          </div>
        </div>
      </div>
      <hr className="divisao-pitch" />
      <h3 className="box-titulo">
        <b className="txt-destaque">Pitch</b>.
      </h3>
      <div className="container-pitch">
        <iframe
          className="video-pitch"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vkxAyI2OOzM?si=XN5vtbO9WX_TnxZ3"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <Link to="/Demo/Dashboard">
          <button className="blue-button">Experimente a Demo</button>
        </Link>
      </div>

      <h3 className="box-titulo">
        Nossos <b className="txt-destaque">Parceiros</b>.
      </h3>

      <div className="parceiros">
        <img className="img-parceiros" src={parceiros} />
      </div>

      <div className="nos">
        <p>
          Juntos, transformamos dados em esperança, promovendo práticas
          sustentáveis e cuidando do coração azul da Terra. Nosso compromisso é
          com um{" "}
          <b className="txt-destaque">
            futuro onde a natureza e a tecnologia coexistem em harmonia
          </b>
          , garantindo que as próximas gerações possam desfrutar da beleza e
          riqueza dos mares.
        </p>
      </div>

      <div className="rightleft">
        <img className="left" src={left}></img>
        <img className="right" src={left}></img>
      </div>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
