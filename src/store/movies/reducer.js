import { types } from "./types";

const initialState = {
  movies: [],
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_MOVIES_START: {
      return { ...state, loading: true };
    }

    case types.FETCH_MOVIES_SUCCESS: {
      return { ...state, movies: payload, loading: false, error: null };
    }

    case types.FETCH_MOVIES_FAILURE: {
      return { ...state, movies: payload, loading: false, error: payload };
    }

    default:
      return state;
  }
};
