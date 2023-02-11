import React, { useEffect } from 'react'
import { useState } from 'react';
import './Nav.css'
const Nav = () => {
    const [show,handleshow]=useState(true);
    const transitionNavbar=()=>{
        if(window.scrollY>100){
            handleshow(false);
        }
        else{
            handleshow(true);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',transitionNavbar);
        return ()=>window.removeEventListener('scroll',transitionNavbar)
    },[]);
  return (
    <div className={`nav ${!show && 'nav_black_bg'}`}>

        <div className="nav__content">
        <img  className='nav_logo'
        src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-768x432.png" alt="netflix_logo" />
        <img src="https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_1280.png" alt="user_avatar" className='nav_avatar'/>

        
        </div>
 
    </div>
  )
}

export default Nav
