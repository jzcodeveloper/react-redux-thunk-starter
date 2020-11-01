import axios from "../axios";
import * as actions from "./actions";

export const fetchMovie = (dispatch) => async () => {
  try {
    const { data } = await axios.get("/movies");
    dispatch(actions.fetchMovieSuccess(data));
  } catch (error) {
    dispatch(actions.fetchMovieFailure(error));
  }
};
