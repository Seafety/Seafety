import React, { Children } from 'react'
import PropTypes from 'prop-types'

const Botao = ({children}) => {
  return (
    <button type="button" className='blue-button'>{children}</button>
  )
}

export default Botao