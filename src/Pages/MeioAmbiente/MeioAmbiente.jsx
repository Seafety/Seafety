import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

import icon1 from '../../Assets/PageAssets/icon1.png'
import icon2 from '../../Assets/PageAssets/icon2.png'
import icon3 from '../../Assets/PageAssets/icon3.png'
import icon4 from '../../Assets/PageAssets/icon4.png'
import icon5 from '../../Assets/PageAssets/icon5.png'
import icon6 from '../../Assets/PageAssets/icon6.png'
import circle from '../../Assets/PageAssets/circle.png'
import diver from '../../Assets/PageAssets/diver.png'
import girlcode from '../../Assets/PageAssets/girlcode.png'
import boycode from '../../Assets/PageAssets/boycode.png'


const MeioAmbiente = props => {
  return (
    <body data-theme="dark">
    <div className='meio-ambiente'>
      <div className='box-video'>
        <video className='video-ma' preload="auto" autoplay="" loop muted playsInline>
          <source src='https://s3-figma-videos-production-sig.figma.com/video/1359687156048822209/TEAM/4787/3453/-9379-4afc-a029-99fa26f269d8?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fgbN20-cEns-6S1t3DDt9xhKBU-ipLGL6wXasGr2EaUD7WFMzppb7YxO83iIBWUuGFKI9A8PWLvLOYOeUCGzKWlTp7b2tG0MWKyyFfcngR3Fsq7Wq6c6phLwPHiNKTArYMpleW71ND~9B0jLJmA4~KmS0PXrYWzJ8QgBwhzaWSGnDZsLb4Ls4H1ZALt63m7Q-0hVgWiUgxN~FgUoadvSK-VQzNoAE3-V4XvZQTHCl5~js6CtROZHHPkW7d4PdMxcoPcWIcl88ifB6qPgM1jdTneLeeGRST-ndkvxKH395j9useyFk8oZcVjVJ4kvasz1Xi~YIvL-GGXvGzp7z-tSZg__' type="video/mp4"></source>
        </video>
        <div className='text-overlay'>
          <p>Os oceanos concentram <span>cerca de 97% da água do planeta.</span> O que representa um dos bens mais valiosos para a vida.</p>
          <p>A Seafety apresenta a solução que leva mais sustentabilidade para os oceanos com <span> informações e insights</span> sobre ele.</p></div>
      </div>
      <div className='icons-text'>
        <div className='box-icons'>
          <img className='icon-ma' src={icon1} />
          <img className='icon-ma1' src={icon2} />
          <img className='icon-ma' src={icon3} />
        </div>
          <div className='circle-container'>
            <img src={circle} />
              <div className='text-icon'>
                <p>Nós conectamos o fundo do mar com o mundo, para um futuro que ambos beneficiam-se.</p>
                <p>A Seafety utiliza inteligência artificial para analisar dados oceânicos em tempo real, promovendo práticas sustentáveis e ajudando a preservar nossos oceanos.</p>
              </div>
          </div>
        <div className='box-icons'>
          <img className='icon-ma1' src={icon4} />
          <img className='icon-ma' src={icon5} />
          <img className='icon-ma1' src={icon6} />
        </div>
      </div>

      <div className='box-video'>
        <video className='video-ma' preload="auto" autoplay="" loop muted playsInline>
          <source src='https://s3-figma-videos-production-sig.figma.com/video/1359687156048822209/TEAM/fe58/0340/-e277-4a36-8bdc-fada41e22c07?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l04Q9KegO2yk1E-TnFhdo-Y0~Dnq6ZdBcv5u82XyewdU0F4jLyJXX37~FMC8TP0ya1gVTeLoZUVZ3GKSXmhK6-V0Hl92OqMewHC90aQMxV2Pz0Y9yc6OaXlechf4mCI14NhMh4s8Y1nj6906~E7HFwA6lXpSl8~xULLo5b0oVBOlCcc46NaiOsqa9n7JNgjrrrPOW-72XGy7XRMRW8fxDJ6Glp~DzOuXBsteWzu5DfmlRzvGae9gBRAWIkwJ8cO5LbVhKbY2lwXy20r38XiiKOGIP0KtlgyAQ7abBdrSAyb9UrWGOtNg4iCojz5rSfGpz9IN6xZRPcd8KhFXZNGA7g__' type="video/mp4"></source>
        </video>
        <div className='text-overlay'>
          <h1> Nossas análises ajudam a minimizar o impacto ambiental das atividades marítimas.</h1>
          <p>A Seafety prevê condições marítimas e identifica padrões, proporcionando previsões confiáveis que auxiliam na tomada de decisões estratégicas, garantindo operações mais seguras e eficientes em águas abertas.</p> 
        </div>
      </div>
      <div className='box-text'>
        <img src={girlcode} />
        <div className='text-container'>
        <h4>Nos comprometemos em promover a conscientização ambiental e educação</h4>
        <p>Nossa plataforma de inteligência artificial é acessível ao público, permitindo que qualquer pessoa acompanhe a segurança marítima e a sustentabilidade dos oceanos, utilizando dados e previsões avançadas para se envolver ativamente na causa da conservação.</p>
        <Link to="/TubAI"><button className='dark-button'>TubAI</button></Link>
      </div></div>
      <div className='box-text'>
        <div className='text-container'>
          <h4>Promovemos a segurança e a eficiência no transporte marítimo</h4>
          <p>Nossa plataforma de inteligência artificial oferece aos marinheiros acesso a dados precisos e previsões avançadas, permitindo a escolha das melhores rotas e garantindo operações mais seguras e eficientes.</p>
        <div className='darkbuttons'>
          <Link to="/HomePage"><button className='dark-button'>Seafety</button></Link>
          <Link to="/Documentacao"><button className='dark-button'>Documentação</button></Link>
        </div>
        </div>
        <img src={boycode} />
      </div>
      <div className='kindafooter'>
        <img src={diver} />
        <div className='text1footer'>
          <h3>Compromisso com o Meio Ambiente</h3>
          <p>Tudo que oferecemos e lançamos é parte de um esforço contínuo para preservar a saúde dos nossos oceanos. </p>
          <button className='dark-button'>Saiba Mais</button>
        </div>
      </div>
      
    </div>
    </body>
  )
}


MeioAmbiente.propTypes = {}

export default MeioAmbiente