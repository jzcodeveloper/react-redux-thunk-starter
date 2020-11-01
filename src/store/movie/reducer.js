import { types } from "./types";

const initialState = {
  movie: {},
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_MOVIE_START: {
      return { ...state, loading: true };
    }

    case types.FETCH_MOVIE_SUCCESS: {
      return { ...state, movie: payload, loading: false, error: null };
    }

    case types.FETCH_MOVIE_FAILURE: {
      return { ...state, movie: payload, loading: false, error: payload };
    }

    default:
      return state;
  }
};
