import React from "react"
import PropTypes from "prop-types"
import teste1 from "../../Assets/HomeAssets/teste1.png"
import imgcomofunciona from "../../Assets/HomeAssets/imgcomofunciona.svg"
import parceiros from "../../Assets/HomeAssets/parceiros.png"

const HomePage = props => {
  return (
    <div className="Home">
      
      <div className='banner-container'>
        <video src=""></video>
        <p className="txt-container-home">Transformando dados oceânicos em soluções inteligentes para um futuro sustentável.</p>
        <button className="btn-banner">Saiba mais</button>
      </div>

      <div className="container-inovacao">
        <div className="div-txt-inovacao">
          <h3 className="box-titulo">Nossa <b className="txt-destaque">Inovação</b>.</h3>
          <p>Desenvolvemos uma IA que utiliza dados da internet para prever catástrofes oceânicas, mudanças ambientais (temperatura, pH) e variações nas populações de espécies, promovendo a gestão sustentável e a preservação dos ecossistemas marinhos.</p>
        </div>

        <img className='teste1' src={teste1} />

      </div>

        <div className="container-comofunciona">

              <h3 className="box-titulo">Como <b className="txt-destaque">funciona</b>.</h3>
              <div className="img-como-funciona">
                <img className='imgcomofunciona' src={imgcomofunciona}/>
              </div>
            <div>
              <div className="txt-como-funciona-1">
                <h3>Coleta de Dados</h3>
                <p>A IA coleta e processa grandes volumes de dados de fontes confiáveis na internet, incluindo informações climáticas,
                   dados de poluição, registros de espécies marinhas, e muito mais.</p>
              </div>

              <div className="txt-como-funciona-2">
                <h3>Coleta de Dados</h3>
                 <p>A IA coleta e processa grandes volumes de dados de fontes confiáveis na internet, incluindo informações climáticas,
                  dados de poluição, registros de espécies marinhas, e muito mais.</p>
              </div>

              <div className="txt-como-funciona-3">
              <h3>Coleta de Dados</h3>
                 <p className="txt-box-comof">A IA coleta e processa grandes volumes de dados de fontes confiáveis na internet, incluindo informações climáticas,
                  dados de poluição, registros de espécies marinhas, e muito mais.</p>
              </div>
            </div>

        </div>
        <div className="container-beneficios">
        <h3 className="box-titulo"><b className="txt-destaque">Benefícios</b>.</h3>
        <div className="box-3itens">
            <div className="item-3">
              <h4>Resposta antecipada</h4>
              <p>Permite que governos e organizações respondam rapidamente a ameaças iminentes, minimizando o impacto ambiental.</p>
            </div>
            <div className="item-3">
              <h4>Decisões Informadas</h4>
              <p>Fornece dados precisos e análises que ajudam na tomada de decisões estratégicas para a conservação dos oceanos.</p>
            </div>
            <div className="item-3">
              <h4>Sustentabilidade</h4>
              <p>Contribui para a sustentabilidade dos oceanos ao monitorar e prever eventos que podem causar danos significativos.</p>
            </div>
        </div>
        <div className="box-2itens">
            <div className="item">
              <h4>Preservação de Espécies</h4>
              <p>Auxilia na proteção de espécies marinhas, identificando áreas e condições críticas para sua sobrevivência.</p>
            </div>
            <div className="item">
              <h4>Monitoramento Ambiental</h4>
              <p>Ajuda a manter um ambiente oceânico equilibrado, monitorando parâmetros essenciais como temperatura e pH.</p>
            </div>
        </div>
      </div>
      <hr className="divisao-pitch" />
      <h3 className="box-titulo"><b className="txt-destaque">Pitch</b>.</h3>
      <div className="container-pitch">

      <div className="box-video">
      <video src=""></video>
      </div>
      
      <button className="btn-demo">Experimente a Demo</button>
      </div>

      <h3 className="box-titulo">Nossos <b className="txt-destaque">Parceiros</b>.</h3>

      <img className="img-parceiros" src={parceiros} />

      <div><p>Juntos, transformamos dados em esperança, promovendo práticas sustentáveis e cuidando do coração azul da Terra. Nosso compromisso é com um <b className="txt-destaque">futuro onde a natureza e a tecnologia coexistem em harmonia</b>, garantindo que as próximas gerações possam desfrutar da beleza e riqueza dos mares.</p></div>

    </div>
  )
}

HomePage.propTypes = {}

export default HomePage