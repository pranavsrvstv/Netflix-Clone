import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userSlice, { selectUser } from './features/counter/userSlice';
import { useSelector } from 'react-redux';
import './Nav.css'
const Nav = () => {
    const user =useSelector(selectUser);

    const [show,handleshow]=useState(true);

    //useNavigate can be used to navigate from another link , ie by changing the url location 
    const Navigate= useNavigate();

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
        <img  onClick={()=>Navigate('/')} className='nav_logo'
        src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-768x432.png" alt="netflix_logo" />
        <div className='nav_user'>
        <p>Hey, {user.email}</p>
        <img onClick={()=>Navigate('/profile')} src="https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_1280.png" alt="user_avatar" className='nav_avatar'/>
       
        </div>
        

        
        </div>
 
    </div>
  )
}

export default Nav
