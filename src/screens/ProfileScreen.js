import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import Nav from '../Nav'
import './ProfileScreen.css'
import {auth} from '../firebase'
import PlanScreen from './PlanScreen'

const ProfileScreen = () => {
    const user= useSelector(selectUser);
  return (
    <div className='profileScreen'>
      <Nav/>
      <div className='profileScreen_body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen_info'>
            <img src="https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_1280.png" alt="user_avatar"/>
            <div className='profileScreen_details'>
                <h2>{user.email}</h2>
                <div className='profileScreen_plans'>
                    <h3>Plans</h3>
                    <button onClick={()=>auth.signOut()} className='profileScreen_signOut'>Sign Out</button>
                    <PlanScreen/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
