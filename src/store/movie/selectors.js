import { createSelector } from "reselect";

export const movieState = (state) => state.movie;

export const selectMovie = createSelector([movieState], (movie) => {
  return movie.movie;
});

export const selectLoading = createSelector([movieState], (movie) => {
  return movie.loading;
});

export const selectError = createSelector([movieState], (movie) => {
  return movie.error;
});
