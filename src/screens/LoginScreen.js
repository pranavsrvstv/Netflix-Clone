import React, { useState } from 'react'
import './LoginScreen.css'
import SignInScreen from './SignInScreen';
const LoginScreen = () => {
const [signIn,setSignIn]=useState(false);

  return (
    <>
    
    <div className="loginScreen">
    <div className='loginScreen_background'>
      <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-768x432.png" className='loginScreen_logo' alt="" />
      <button onClick={()=>setSignIn(true)} className='loginScreen_button'>
        Sign In
      </button>
      <div className='loginScreen_gradient'></div>

    </div>
   
    <div className='loginScreen_body'>
    {signIn?<SignInScreen/>:
        <>
        <h1>
            Unlimited Movies, WebSeries and TV Programs
        </h1>
        <h2>Watch anywhere, Cancel at anytime</h2>
        <h3>Ready to Watch ? Enter your email to create or restart your membership !</h3>
        <div className='loginScreen_input'>
            <form >
                <input type="email" placeholder='email address' />
                <button onClick={()=>setSignIn(true)} className='loginScreen_getStarted'>
                    GET STARTED
                </button>

            </form>
        </div>
        </>}
    </div>


    </div>
    
    </>
  )
}

export default LoginScreen
