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

function App() {
  const user = useSelector(selectUser);
  const dispatch= useDispatch();

  useEffect(()=>{
   const unsubscribe= auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        //Logged in
        console.log(userAuth);
        dispatch(login({uid:userAuth.id , email:userAuth.email}));
      }
      else{
        //Logged Out
        dispatch(logout)
        
      }
    })
    //when the useEffect cleans up run unsubscribe()
    return unsubscribe;
  },[]);

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

//2:14.45