import React, { useRef } from 'react'
import './SignInScreen.css'
import {auth} from '../firebase.js'
const SignInScreen = () => {

  const emailRef= useRef(null);
  const passwordRef= useRef(null);


  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
    .then(()=>{

    }).catch((error)=>{
     console.log(error.message);
    });
  }

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
    .then((authuser)=>{
     console.log(authuser);
    })
    .catch((error)=>alert(error.message)
    )
  }
  return (
    <div className='signupScreen'>
      <form >
        <h1>Sign In</h1>
       
        <input ref={emailRef} type="email" placeholder="abc@xyz.com" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <button type="button" onClick={signIn}>Proceed</button>
        {/* button with type="submit" will submit the form by default and the page will reload the component,so use type =button 
        or we can also use e.preventDefault()*/}
        <h4>New to Netflix <span onClick={register}>Sign up with above details</span></h4>
      </form>

    </div>
  )
}

export default SignInScreen
