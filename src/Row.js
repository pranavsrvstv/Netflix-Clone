import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios';
const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original"
    useEffect(() => {
        async function fetchdata() {
            const request = await axios(fetchUrl);
            setMovies(
                request.data.results
            )
            //It is a good practice to return the request
            return request;
        }
        fetchdata();


    }, [fetchUrl])

    // console.log(movies);
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
            {movies.map((movie) => (
               ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path ))&&(
                    <div className='movie_single_poster'>
                    <img className={`row_poster ${isLargeRow && 'row_large_poster'}`} src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt="posterImage" />
    
                  <h3 className='movie_name'>
                  {`${movie?.name || movie?.original_name || "New Released"}`} 
                  </h3>
    
                    </div>
                )
            
                
            ))}
            </div>

        </div>
    )
}

export default Row
