const apikey=process.env.REACT_APP_TMDB_API_KEY


const requests={
    getTrending:`/trending/all/week?api_key=${apikey}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${apikey}&with_networks=213`,
    getToprated:`/movie/top_rated?api_key=${apikey}&language=en-US`,
    getActionMovies:`/discover/movie/?api_key=${apikey}&with_genres=28`,
    getComedyMovies:`/discover/movie/?api_key=${apikey}&with_genres=35`,
    getHorrorMovies:`/discover/movie/?api_key=${apikey}&with_genres=27`,
    getRomanceMovies:`/discover/movie/?api_key=${apikey}&with_genres=10749`,
    getDocumentaries:`/discover/movie/?api_key=${apikey}&with_genres=99`,
}

export default requests;