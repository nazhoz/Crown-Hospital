import React from 'react'

const VideoCards = () => {
  return (
    <div className='video-card-main'>
       <div className='video-card-box'>
        <div className='video-card-offer'>
            <span>OFFER</span>
        </div>
        <div className='video-card-text'>
        <h6>Download the app & get</h6>
        <h6>200 HealthCash</h6>
        </div>
        <div className='video-card-btn'>
            <span>Download app</span>
        </div>
       </div>
       <div className='video-card-box1'>
        <div className='video-card-practo'>
            <span>PRACTO PLUS</span>
        </div>
        <div className='video-card-text'>
        <h6>Free online consultations</h6>
        <h6>Starting at 799/month</h6>
        </div>
        <div className='video-card-btn'> 
            <span>Download app</span>
        </div>
       </div>
        
    </div>
  )
}

export default VideoCards