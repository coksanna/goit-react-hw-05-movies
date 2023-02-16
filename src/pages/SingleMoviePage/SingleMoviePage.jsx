import { useState, useEffect, useCallback } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import { fetchMovieById } from '../../servises/movies-api';

import styles from './singleMoviePage.module.css';

const SingleMoviePage = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from || '/';

  const getYear = () => new Date(movie.release_date).getFullYear();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const result = await fetchMovieById(id);
        setMovie(result);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchMovie();
  }, [id]);

  const goBack = useCallback(() => navigate(from), [navigate, from]);

  return (
    <div className={styles.film}>
      <button onClick={goBack} className={styles.backButton}>
        Go back
      </button>

      {movie && (
        <div>
          <img
            width="300"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
            }
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <p>({getYear()})</p>
          <p>User Score: {movie.popularity}</p>
          <div className="movie_overview">
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
      <hr />
      <div>
        <h2>Additional Information</h2>
        <ul>
          <li>
            <Link to="cast" state={{ from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default SingleMoviePage;
