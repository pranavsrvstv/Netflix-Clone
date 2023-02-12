import React from 'react'
import Banner from '../Banner'
import './HomeScreen.css'
import Nav from '../Nav'
import Row from '../Row'
import requests from '../Requests'
const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      {/* Navbar  */}
      <Nav/>
      
      {/* Banner  */}
      <Banner/>
      {/* Rows */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="TRENDING" fetchUrl={requests.getTrending} />
      <Row title="TOP RATED" fetchUrl={requests.getToprated}/>
      <Row title="ACTION MOVIES" fetchUrl={requests.getActionMovies} isLargeRow/>
      <Row title="COMEDY MOVIES" fetchUrl={requests.getComedyMovies} isLargeRow/>
      <Row title="HORROR MOVIES" fetchUrl={requests.getHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.getRomanceMovies} isLargeRow/>
      <Row title="DOCUMENTARIES" fetchUrl={requests.getDocumentaries}/>
    



    </div>
  )
}

export default HomeScreen

// getTrending:`/trending/all/week?api_key=${apikey}&language=en-US`,
// fetchNetflixOriginals:`/discover/tv?api_key=${apikey}&with_networks=213`,
// getToprated:`/movie/top_rated?api_key=${apikey}&language=en-US`,
// getActionMovies:`/discover/movie/?api_key=${apikey}&with_genres=28`,
// getComedyMovies:`/discover/movie/?api_key=${apikey}&with_genres=35`,
// getHorrorMovies:`/discover/movie/?api_key=${apikey}&with_genres=27`,
// getRomanceMovies:`/discover/movie/?api_key=${apikey}&with_genres=10749`,
// getDocumentaries:`/discover/movie/?api_key=${apikey}&with_genres=99`,
