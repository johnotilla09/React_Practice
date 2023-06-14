import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  async function fetchMovieHandler () {
    // Request to the API
    const response = await fetch('https://swapi.dev/api/films/');
    // Get response through json format
    const data = await response.json();
    transform the data key
    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date
      };
    });

    // set the data to the movie state
    setMovies(transformedMovies);
  }

  // The other way of requesting and getting a response to the request
  // HTTP request
  // const fetchMovieHandler = () => {
  //   // requesting and getting response to the sapi
  //   fetch('https://swapi.dev/api/films/').then(response => {
  //     return response.json();
  //   }).then(data => {
  //     // Change the name of the variables
  //     const transformedMovies = data.results.map(movieData => {
  //       return {
  //         id: movieData.episode_id,
  //         title: movieData.title,
  //         openingText: movieData.opening_crawl,
  //         releaseDate: movieData.release_date
  //       };
  //     })
  //     setMovies(transformedMovies);
  //   });

  // console.log(movies.title);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
