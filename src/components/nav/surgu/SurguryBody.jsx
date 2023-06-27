import React from 'react'

const SurguryBody = ({name}) => {
  return (
    <div>
        <div className='surguryBody-main'>
            <div className='surgury-cards-img'>
                <span>Popular Surgeries</span>
                <div className='sur-cards'>
                    {
                        name.map((item)=>
                        <div className='surgury-cards'>
                            <div>
                            <img  className='sur-cards-img' src={item.img} alt="" /> 
                            </div>
                            
                            <span className='sur-card-text'>{item.title}</span>
                        </div>
                        )
                    }
                </div>
            </div>
            <div className='sur-suggestion-box'>
                <h4>Book your consultation today</h4>
            </div>
        </div>

    </div>
  )
}

export default SurguryBody