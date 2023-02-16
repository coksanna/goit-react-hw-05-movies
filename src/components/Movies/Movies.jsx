import { useState, useEffect } from 'react';

import MoviesList from '../MoviesList/MoviesList';

import { getTrendMovies } from '../../servises/movies-api';

const Movies = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getTrendMovies();
        setItems([...data.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [setLoading, setItems, setError]);

  return (
    <>
      <h2>Trending today</h2>
      {error && <p>{error}</p>}
      {loading && <p>Loading</p>}
      <MoviesList items={items} />
    </>
  );
};

export default Movies;
