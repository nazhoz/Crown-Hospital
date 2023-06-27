import React from 'react'
import SurguryMain from './SurguryMain'
import SurguryBody from './SurguryBody'
import { surcards } from './Data'

const Surguries = () => {
  return (
    <div>
      <SurguryMain/>
      <SurguryBody name={surcards}/>
    </div>
  )
}

export default Surguries