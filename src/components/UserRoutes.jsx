import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const SingleMoviePage = lazy(() =>
  import('../pages/SingleMoviePage/SingleMoviePage')
);
const SingleMoviePageCast = lazy(() =>
  import('../pages/SingleMoviePageCast/SingleMoviePageCast')
);
const SingleMoviePageReviews = lazy(() =>
  import('../pages/SingleMoviePageReview/SingleMoviePageReview')
);
const MovieSearchPage = lazy(() =>
  import('../pages/MovieSearchPage/MovieSearchPage')
);
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<SingleMoviePage />}>
          <Route path="cast" element={<SingleMoviePageCast />} />
          <Route path="reviews" element={<SingleMoviePageReviews />} />
        </Route>
        <Route path="/movie-search" element={<MovieSearchPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
