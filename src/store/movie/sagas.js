import { all, call, fork, takeLatest, put } from "redux-saga/effects";
import axios from "../axios";

import { types } from "./types";
import * as actions from "./actions";

/* SUBROUTINES */

function* fetchMovie() {
  try {
    const { data } = yield call([axios, axios.get], "/movies");

    yield put(actions.fetchMovieSuccess(data.data));
  } catch (error) {
    yield put(actions.fetchMovieFailure(error));
  }
}

/* WATCHERS */

function* watchFetchMovieStart() {
  yield takeLatest(types.FETCH_MOVIE_START, fetchMovie);
}

export default function* movieSaga() {
  yield all([fork(watchFetchMovieStart)]);
}
