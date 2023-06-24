import React from 'react'
import niyas from './Data'

const SecondBody = () => {
   
  return (
    <div className='scnd-main'>
        {
          niyas.map((item)=>(
            <div className='sinsar'>
                <div className='niyas'>
                <img className='scnd-img' src={item.img} alt="" />
                </div>
                <div className='scnd-all-text'>
                <div className='scnd-text1'>
                {item.Title}
                </div>
                <div className='scnd-text'>
                {item.dse}
                </div>
                </div>
            </div>
          ))
        }

    </div>
  )
}

export default SecondBody