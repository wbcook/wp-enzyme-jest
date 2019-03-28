import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Spinner = (props) => (
  <div>
    <FontAwesomeIcon icon="cog" spin {...props}/>
  </div>
)

export default Spinner;