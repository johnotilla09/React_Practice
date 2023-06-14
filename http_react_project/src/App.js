import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try { 
      // Request to the API
      const response = await fetch('https://swapi.dev/api/films/');
      console.log("Load again this page!");

      // Catching an error
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      // Get response through json format
      const data = await response.json();
      // transform the data key
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
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, []);

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
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {isLoading && <p>Loading...</p>}
        {error === null && !isLoading && movies.length === 0 ? <p>Found no movies!</p> : <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
