import React from 'react'
import PropTypes from 'prop-types'

import ana from "../../Assets/PageAssets/ana.png"
import lucy from "../../Assets/PageAssets/lucy.png"
import clara from "../../Assets/PageAssets/clara.png"
import thiago from "../../Assets/PageAssets/thiago.png"
import miguel from "../../Assets/PageAssets/miguel.png"
import docBanner from "../../Assets/PageAssets/bannerDoc.jpg"


const Documentacao = props => {
  return (
    <div className='documentacao'>      
    <div className='banner-container'>
      <img className='banner' src={docBanner} />
      <div className='docbutton'>
      <h1>Confira a nossa documentação</h1> 
      <button className='blue-button'>Escopo</button>
    </div>
  </div>


    </div>
  )
}

Documentacao.propTypes = {}

export default Documentacao