import React from 'react'
import SecondBody from './SecondBody'
import { ThirdBody } from './ThirdBody'
import FourthBody from './FourthBody'
import FifthBody from './FifthBody'
import Copy from './Copy'

const Home = () => {
  return (
    <div className='home-head'>
      <div className='home-heading'>
      <div className='home-content'>
        <img className='home-location' src="https://img.uxwing.com/wp-content/themes/uxwing/download/location-travel-map/map-pin-line-icon.svg" alt="" />
      <select name="For Corporates" className='home-drp'>
      <option selected hidden  value="">Choose District</option>
      <option  value="">Malappuram</option>
      <option  value="">Alappuzha</option>
      <option  value="">Ernakulam</option>
      <option  value="">Idukki</option>
      <option  value="">Kannur</option>
      <option  value="">Kasaragod</option>
      <option  value="">Kollam</option>
      <option  value="">Kottayam</option>
      <option  value="">Kozhikode</option>
      <option  value="">Palakkad</option>
      <option  value="">Pathanamthitta</option>
      <option  value="">Thiruvananthapuram</option>
      <option  value="">Thrissur</option>
      <option  value="">Wayanad</option>
      </select>
      <img className='home-location' src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-line-icon.svg" alt="" />
      <input type="email" name="" id="home-mail"  placeholder="Search doctors,clinics,hospitals,etc."/>
      </div>
      <div>
        <img className='home-img' src="https://www.practostatic.com/subscriptions/images/plus-tag.png" alt="" />
      </div>
      </div>

      <div>
        <img className='scnd-head' src="https://s3.ap-southeast-1.amazonaws.com/www.practostatic.com/consumer-home/desktop/images/1597423628/chronic_consumer_banner_dweb.png" alt="" />
      </div>
    <SecondBody/>
    <ThirdBody/>
    <FourthBody/>
    <FifthBody/>
    <Copy/>

     

    </div>




  )
}

export default Home