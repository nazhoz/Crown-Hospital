import React from 'react'

const FifthBody = () => {
  return (
    <div className='fifth-content'>
      <div className='fifth-main-content'>
        <div>
            <img className='fifth-img' src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png" alt="" />
        </div>
        <div className='fifth-body'>
            <div>
            <h1 className='text-body1'>Download the Crown app</h1>
            <span className='fifth-text-body'>Access video consultation with India’s top doctors on the Practo app. Connect with doctors online, available 24/7, from the comfort of your home</span>
            </div>
            <div className='fifth-body-text'>
            <h6>Get the link to download the app</h6>
              <div className='fifth-body5'>
                <div className='fifth-sms'>
                <h5>+91</h5>
                <input className='fifth-input' type="text" placeholder='Enter Your Mobile Number'/>
                </div>
                <div className='fifth-btn'>
                <span>Send SMS</span>
                </div>
                
              </div>
              <div className='fifth-logos'>
                <img className='fifth-logo' src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/google_play.png" alt="" />
                <img className='fifth-logo' src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/apple_store.png" alt="" />
              </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default FifthBody