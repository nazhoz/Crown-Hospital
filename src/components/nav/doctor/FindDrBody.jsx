import React from 'react'

const FindDrBody = () => {
  return (
    <div className='finddr-main'>
        <div className='finddr-sub'>
        <div>
            <h1>Instant appointment with</h1>
            <h1>doctors.Guaranteed.</h1>
        </div>
        <div className='finddr-tick'>
            <span><img className="tick-img"src="https://img.uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/blue-check-mark-icon.svg" alt="" />100,000 Verified doctors</span>
            <span> <img className='tick-img' src="https://img.uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/blue-check-mark-icon.svg" alt="" />3M+ Patient recommendations</span>
            <span> <img className='tick-img' src="https://img.uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/blue-check-mark-icon.svg" alt="" />25M Patients/year</span>
        </div>
        <div className='finddr-btn'>
            <span>Find me the right Doctor</span>
        </div>
        </div>
        <div>
            <video className='find-video' src="https://www.practostatic.com/web-assets/home/assets/videos/appointment.700ce682eaec91bf93b6574cb8f09cd0.webm"></video>
        </div>


    </div>
  )
}

export default FindDrBody