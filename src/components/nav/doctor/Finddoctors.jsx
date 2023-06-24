import React from 'react'
import FindDrBody from './FindDrBody'
import FindDrScndBody from './FindDrScndBody'
import Copy from '../main/Copy'

const Finddoctors = () => {
  return (
    <div className='find-main'>
      <div className='find-head'>
        <div className='find-content'>
          <h1>Safety of your data is our</h1>
          <h1>top priority.</h1>
          <div className='find-tick'>
          <span><img className='tick-img' src="https://img.uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/blue-check-mark-icon.svg" alt="" />Multi-level security checks</span>
          <span><img className='tick-img' src="https://img.uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/blue-check-mark-icon.svg" alt="" />Multiple data backups</span>
          <span><img className='tick-img' src="https://img.uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/blue-check-mark-icon.svg" alt="" />Stringent data privacy policies</span>
          </div>
          <div className='find-read'>
          <span>Read More</span>
          </div>
          
        </div>
        <div>
          <img className='find-img' src="https://www.practostatic.com/web-assets/home/assets/images/security_1.4f45ac92aba979dac915f864df632d90.png" alt="" />
        </div>
      </div>
      <div className='find-scn-img'>
        <div className='find-card'>
        <img src="https://www.practostatic.com/web-assets/home/assets/images/security_2.654a7085bfa74c726f26b64edaafd9a5.png" alt="" />
        <span>256-bit encryption</span>
        </div>
        <div className='find-card'>
        <img src="https://www.practostatic.com/web-assets/home/assets/images/security_3.a73921ca6e980ed186518d7cb0ce64bf.png" alt="" />
        <span>ISO 27001 certified</span>
        </div>
        <div className='find-card'>
        <img src="https://www.practostatic.com/web-assets/home/assets/images/security_4.216e25d35038f0e7f6d8a514727fa67a.png" alt="" />
        <span>HIPAA complaint data</span>
        </div>
        <div className='find-card'>
        <img src="https://www.practostatic.com/web-assets/home/assets/images/security_5.cf6e04c57178071a67c219b43066ffcf.png" alt="" />
        <span>DSCI member</span>
        </div>
      </div>

      <FindDrBody/>
      <FindDrScndBody/>
      <Copy/>
    </div>
  )
}

export default Finddoctors