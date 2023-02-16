import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import MoviesList from '../MoviesList/MoviesList';

import MovieSearchForm from './MovieSearchForm/MovieSearchForm';

import { searchMovie } from '../../servises/movies-api';

import styles from './movieSearch.module.css';

const MoviesSearch = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  useEffect(() => {
    if (!search) {
      return;
    }

    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await searchMovie(search, page);
        console.log(data);
        setItems(prevItems => [...prevItems, ...data]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [search, page, setLoading, setItems, setError, setSearchParams]);

  const onSearchMovies = useCallback(
    ({ search }) => {
      setSearchParams({ search, page: 1 });
      setItems([]);
    },
    [setSearchParams]
  );

  const loadMore = useCallback(() => {
    setSearchParams({ search, page: Number(page) + 1 });
  }, [search, page, setSearchParams]);

  return (
    <>
      <MovieSearchForm initialState={{ search }} onSubmit={onSearchMovies} />
      <MoviesList items={items} />
      {error && <p className={styles.errorMessage}>{error}</p>}
      {loading && <p>...Load movies</p>}
      {Boolean(items.length) && <button onClick={loadMore}>Load more</button>}
    </>
  );
};

export default MoviesSearch;
