import React from 'react'
import SurguryMain from './SurguryMain'
import SurguryBody from './SurguryBody'
import { surcard, surcards } from './Data'
import Copy from '../main/Copy'

const Surguries = () => {
  return (
    <div>
      <SurguryMain/>
      <SurguryBody name={surcards} content={surcard}/>
      <Copy/>
    </div>

  )
}

export default Surguries