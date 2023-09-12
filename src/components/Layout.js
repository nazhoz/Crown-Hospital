import React from 'react'
import { Link,Outlet } from "react-router-dom";
import logo from './nav/New folder/medicalcrown-removebg-preview.png'

const Layout = () => {
  return (
    <div className='main-navbar'>
        <nav className='nav-main'>
            <ul className='nav-bar'>
              <div className='nav-head1'>
                
              <Link to='/'><img className='practo-img' src={logo} alt="" /></Link>
                
                
                    <Link className='nav-text' to='Finddoctors'>Finddoctors</Link>
               
                    <Link className='nav-text' to='Labtests'>Labtests</Link>
               
                    <Link className='nav-text' to='Videoconsults'>Videoconsults</Link>
               
                    <Link className='nav-text' to='Medicines'>Medicines</Link>
                
                    <Link className='nav-text' to='Surguries'>Surguries</Link>
                    </div>
                  <div className='nav-head'>
                    <select name="For Corporates" className='drpdown'>
                      <option selected hidden  value="">For Corporates</option>
                      <option  value="">Health & Wellness Plans</option>
                      <option  value="">Group insurance</option>
                    </select>

                    <select name="For Corporates" className='drpdown'>
                      <option selected hidden  value="">For Providers</option>
                      <option value="">Practo Prime</option>
                      <option value="">Software Providers</option>
                      <option value="">List of your practice for free</option>
                      <option value="">ABDM</option>
                    </select>

                    <select name="For Corporates" className='drpdown'>
                      <option selected hidden value="">Security & Help</option>
                      <option value="">Data Security</option>
                      <option value="">Help</option>
                    </select>

                    

                  <Link to='LoginPage'><span className='nav-log'>Login/Signup</span></Link>

                    </div>
            </ul>
            
        </nav>
        <Outlet/>
    </div>
  )
}

export default Layout