import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

import { lazy, Suspense } from 'react';

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

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Navbar />
      <Suspense fallback={<p>...loading</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie-search" element={<MovieSearchPage />} />
          <Route path="/movie/:id" element={<SingleMoviePage />}>
            <Route path="cast" element={<SingleMoviePageCast />} />
            <Route path="reviews" element={<SingleMoviePageReviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
