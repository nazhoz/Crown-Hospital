import React from 'react'
import jpg from './images/Screenshot (2).png'

const LabBody = () => {
  return (
    <div className='lab-main-heading'>
        <div className='lab-main-head'>
            <div className='lab-top-head'>
                <select className='lab-top-opt' name="" id="">
                    <option selected hidden value="">Choose Your State</option>
                    <option value="">Kerala</option>
                    <option value="">Karantaka</option>
                    <option value="">Tamilnadu</option>
                    <option value="">Delhi</option>
                    <option value="">Punjab</option>
                    <option value="">Assam</option>
                    <option value="">Hyderabad</option>
                </select>
                <div>
                <input className='lab-top-input' type="text" placeholder='   Search for tests, Packages, and Profiles' />
                </div>   
            </div>
            <div>
                <img className='lab-img' src="https://img.uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/shopping-bag-icon.svg" alt="" />
                <span>Cart</span>
            </div>
        </div>
        <div className='labbody-pic'>
              <img className='lab-border' src={jpg} alt="" />  
        </div>
        <div className='lab-contact'>
            <div className='lab-contact-main'>
                <div>
                    <img src="https://www.practo.com/tests/public/images/call_to_order.svg" alt="" />
                </div> 
                <div className='lab-contact-text'>
                <span className='labt-text'>Need help with booking your test?</span>
                <span className='labt-text2'>Our experts are here to help you</span>
                </div>
            </div>
            <div>
                <img src="https://www.practo.com/tests/public/icons/call-to-order.svg" alt="" />
                <span>+91 8045684087 </span>
            </div>
        </div>

    </div>
  )
}

export default LabBody