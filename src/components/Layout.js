import React from 'react'
import { Link,Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='main-navbar'>
        <nav className='nav-main'>
            <ul className='nav-bar'>
              <div className='nav-head1'>
                
              <Link to='/'><img className='practo-img' src="data:image/png;base64,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" alt="" /></Link>
                
                
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

                    

                    <span className='nav-log'>Login/Signup</span>

                    </div>
            </ul>
            
        </nav>
        <Outlet/>
    </div>
  )
}

export default Layout