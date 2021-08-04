import React, { useCallback, useEffect, useState } from 'react';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchMoviesHandler = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      const res = await fetch('https://react-chirag-project-default-rtdb.firebaseio.com/movies.json')
      if (!res.ok) {
        throw new Error(res.status + ': Something went wrong');
      }
      const data = await res.json();
      console.log(data);

      const loadMovies = [];

      for (const key in data) {
        loadMovies.push({
          id:key,
          title:data[key].title,
          openingText:data[key].openingText,
          releaseDate:data[key].releaseDate
        })
      }
     
      // const transformedMovies = data.results.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // });
      setMovies(loadMovies);
    } catch (error) {
      setError(error.message)
    }
   
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchMoviesHandler()
  }, [fetchMoviesHandler]);

  const  addMovieHandler = async(movie) => {
    console.log(movie);
    const res = await fetch('https://react-chirag-project-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
      'Content-Type': 'application/json'
    }
    })
    const data = await res.json();
    console.log(data);
  }

  console.log(isLoading)
  let content = <p>Found no movies!</p>;

  if (movies.length>0) {
   content=  <MoviesList movies={movies} />
  }
  
  if (error) {
    content=<p>{ error}</p>
  }

  if (isLoading) {
    content=<p>Loading...</p>
  }
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}/>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;