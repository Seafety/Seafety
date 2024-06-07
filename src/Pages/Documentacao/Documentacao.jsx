import React from 'react'
import PropTypes from 'prop-types'

import ana from "../../Assets/PageAssets/ana.png"
import lucy from "../../Assets/PageAssets/lucy.png"
import clara from "../../Assets/PageAssets/clara.png"
import thiago from "../../Assets/PageAssets/thiago.png"
import miguel from "../../Assets/PageAssets/miguel.png"
import docBanner from "../../Assets/PageAssets/bannerDoc.jpg"
import logo from "../../Assets/PageAssets/logo.png"
import circle from "../../Assets/PageAssets/circle.png"


const Documentacao = props => {
  return (
    <div className='documentacao'>      
    <div className='bannercontainer2'>
      <img className='bannerDoc' src={docBanner} />
      <div className='docbutton'>
      <h1>Confira a nossa documentação</h1> 
      <a href='https://docs.google.com/document/d/1p7TLi1xH8776lJwLeZxbYw-9fnorJ4Qr1DdV1aVPd5g/edit?usp=sharing' target='_blank'><button className='blue-button'>Escopo</button></a>
    </div>
    <h1 className='titledoc'>Elementos do arquivo .zip:</h1>
    <div className='elements-zip'>
        <ul>
          <li>Arquivo .txt contendo o nome e RM dos integrantes.</li>
          <li>Programa em Java</li>
          <li>Documentação do sistema</li>
          <li>Modelagem de classes e do banco de dados</li>
          <li>Protótipo</li>
        </ul>
        <img src={logo} /> 
    </div>
    <div className='boxteam'>
      <div className='participants'>
        <div className='team'>
          <div className='image-container'>
            <img className='participant' src={ana} alt="Ana Beatriz Farah" />
            <img className='ball' src={circle} alt="circle decoration" />
          </div>
          <h2>Ana Beatriz Farah</h2>
          <p>RM 98765</p>
        </div>
        <div className='team'>
          <div className='image-container'>
            <img className='participant' src={lucy} alt="Lúcia Inês Boutti" />
            <img className='ball' src={circle} alt="circle decoration" />
          </div>
          <h2>Lúcia Inês Boutti</h2>
          <p>RM 97911</p>
        </div>
        <div className='team'>
          <div className='image-container'>
            <img className='participant' src={clara} alt="Maria Clara Ferreira" />
            <img className='ball' src={circle} alt="circle decoration" />
          </div>
          <h2>Maria Clara Ferreira</h2>
          <p>RM 551746</p>
        </div>
      </div>
    </div>
    <div className='boxteam'>
      <div className='participants'>
        <div className='team'>
          <div className='image-container'>
            <img className='participant' src={miguel} alt="Miguel de Souza Lima" />
            <img className='ball' src={circle} alt="circle decoration" />
          </div>
          <h2>Miguel de Souza Lima</h2>
          <p>RM 5520035</p>
        </div>
        <div className='team'>
          <div className='image-container'>
            <img className='participant' src={thiago} alt="Thiago Eiji Matumotoi" />
            <img className='ball' src={circle} alt="circle decoration" />
          </div>
          <h2>Thiago Eiji Matumotoi</h2>
          <p>RM 97711</p>
        </div>
      </div>
    </div>
  </div>


    </div>
  )
}

Documentacao.propTypes = {}

export default Documentacao