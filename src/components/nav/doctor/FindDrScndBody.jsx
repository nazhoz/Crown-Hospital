import React from 'react'
import tech from './image/pngegg.png'
import fortune from './image/Daco_4776766.png'
import forbes from './image/Daco_4230217.png'

const FindDrScndBody = () => {
  return (
    <div className='finddrscnd-body'>
        <div>
           <img className='tech-crunch' src={tech} alt="" />
        </div>
        <div>
           <img className='fortune' src={fortune} alt="" />
        </div>
        <div>
           <img className='forbes' src={forbes} alt="" />
        </div>
        

    </div>
  )
}

export default FindDrScndBody