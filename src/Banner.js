import React, { useDebugValue, useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios';
import requests from './Requests'
const Banner = () => {

    const[movie,setMovie]=useState([]);
   
    useEffect(()=>{
     async function fetchData(){
      const request= await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[Math.floor(Math.random()*request.data.results.length-1)]
      );
      return request;
     }
     fetchData();
    },[])

    console.log(movie);
    
    const truncate=(string,n)=>{
        return string?.length>n?string.substr(0,n-1)+'...':string
    }
  return (
    <header className='banner' style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
        ,backgroundSize:'cover',backgroundPosition:'center center'
    }}>
        <div className='banner_content'>
            <h1 className='banner_title'>
                {movie?.name || movie?.original_name}
            </h1>
            <div className='banner_buttons'>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className='banner_description'>
            {truncate("This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description",200)}
            </h1>
           
        </div>
        <div className='banner_fadebottom'></div>
      
    </header>
  )
}

export default Banner


