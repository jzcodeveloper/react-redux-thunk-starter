import { types } from "./types";

// Fetch all movies
export const fetchMoviesStart = () => ({
  type: types.FETCH_MOVIES_START,
});

export const fetchMoviesSuccess = (payload) => ({
  type: types.FETCH_MOVIES_SUCCESS,
  payload,
});

export const fetchMoviesFailure = (payload) => ({
  type: types.FETCH_MOVIES_FAILURE,
  payload,
});
