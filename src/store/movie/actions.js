import { types } from "./types";

// Fetch single movie
export const fetchMovieStart = () => ({
  type: types.FETCH_MOVIE_START,
});

export const fetchMovieSuccess = (payload) => ({
  type: types.FETCH_MOVIE_SUCCESS,
  payload,
});

export const fetchMovieFailure = (payload) => ({
  type: types.FETCH_MOVIE_FAILURE,
  payload,
});
