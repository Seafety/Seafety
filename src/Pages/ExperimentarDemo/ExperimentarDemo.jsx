import React from 'react'
import PropTypes from 'prop-types'
import SubHeaderDemo from '../../ui/Components/SubHeaderDemo'

const ExperimentarDemo = ({children}) => {
  return (
    <body>
      <SubHeaderDemo/>
      {children}
    </body>
  )
}

export default ExperimentarDemo