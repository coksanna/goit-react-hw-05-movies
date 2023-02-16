import axios from 'axios';

const instance = axios.create({
  baseURL: 'https:/api.themoviedb.org/3',

  params: {
    api_key: 'a1735b4b403b356dec5f0993d9adcd8f',
  },
});

export const searchMovie = async (query, page = 1) => {
  const { data } = await instance.get(`/search/movie`, {
    params: {
      page,
      query,
    },
  });
  console.log('movie', data.results);
  return data.results;
};

export const getTrendMovies = async (page = 1) => {
  const { data } = await instance.get(`/trending/movie/day?page=${page}`);
  return data;
};

export const fetchGenres = async () => {
  const { data } = await instance.get(`/genre/movie/list`);
  return data.genres;
};

export const fetchMovieById = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const fetchCredits = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data.cast;
};

export const getReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data.results;
};

// export const getPostById = async id => {
//   const { data } = await instance.get(`/${id}`);
//   return data;
// };

// export const getCommentByPostId = async id => {
//   const { data } = await instance.get(`/${id}/comments`);
//   return data;
// };
