import React, { useEffect } from 'react';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import {auth} from './firebase'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch= useDispatch();

  useEffect(()=>{
   const unsubscribe= auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        //Logged in
        console.log(userAuth);
        dispatch(login({uid:userAuth.uid , email:userAuth.email}));
      }
      else{
        //Logged Out
        dispatch(logout())
        
      }
    })
    //when the useEffect cleans up run unsubscribe()
    return unsubscribe;
  },[dispatch]);

  return (
    <BrowserRouter>
      {!user ? <LoginScreen /> :
        <div className="App">
        <Routes>
          <Route path='/' element={<HomeScreen />}></Route>
          <Route path='/profile' element={<ProfileScreen/>}></Route>
          </Routes>

        </div>
      }
    </BrowserRouter>
  );
}

export default App;

//3.57- error coming in checkout page , error in  productData.prices.priceId