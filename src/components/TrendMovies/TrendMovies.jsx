import { useState, useEffect } from 'react';

import MoviesList from '../MoviesList/MoviesList';

import { getTrendMovies } from '../../servises/movies-api';
import styles from '../MovieSearch/movieSearch.module.css';

const TrendMovies = () => {
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
      <MoviesList items={items} />
      {error && <p className={styles.errorMessage}>{error}</p>}
      {loading && <p>...Load movies</p>}
    </>
  );
};

export default TrendMovies;
