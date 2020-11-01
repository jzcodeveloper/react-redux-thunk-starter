import { createSelector } from "reselect";

export const moviesState = (state) => state.movies;

export const selectMovies = createSelector([moviesState], (movies) => {
  return movies.movies;
});

export const selectLoading = createSelector([moviesState], (movies) => {
  return movies.loading;
});

export const selectError = createSelector([moviesState], (movies) => {
  return movies.error;
});
