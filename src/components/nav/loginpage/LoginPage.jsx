import React from 'react'

const LoginPage = () => {
  return (
    <div className='login-main'>
      <div>
        <img src="https://accounts.practo.com/static/images/illustration.png" alt="" />
      </div>
      <div className='login-page'>
        <div className='login-email-input'>
          <span>Mobile Number / Email ID</span>
          <input type="text" placeholder='Mobile Number/Email' />
        </div>
        <div className='login-email-input'>
          <span>Password</span>
          <input type="password" placeholder='Password' />
        </div>
        <div className='login-password'>
          <div>
          <input type="checkbox" name="" id=""/>
          <label>Remind me in 30 days</label>
          </div> 
          <div>
            <span>Forgot Password?</span>
          </div>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Login with OTP instead of password</label>
        </div>
        <div >
          <input type="button" value="LOGIN" />
        </div>
      </div>

    </div>
  )
}

export default LoginPage