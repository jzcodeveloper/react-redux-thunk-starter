import axios from "../axios";
import * as actions from "./actions";

export const fetchMovies = (dispatch) => async () => {
  try {
    const { data } = await axios.get("/movies");
    dispatch(actions.fetchMoviesSuccess(data));
  } catch (error) {
    dispatch(actions.fetchMoviesFailure(error));
  }
};
