import { all, call, fork, takeLatest, put } from "redux-saga/effects";
import axios from "../axios";

import { types } from "./types";
import * as actions from "./actions";

/* SUBROUTINES */

function* fetchMovies() {
  try {
    const { data } = yield call([axios, axios.get], "/movies");

    yield put(actions.fetchMoviesSuccess(data.data));
  } catch (error) {
    yield put(actions.fetchMoviesFailure(error));
  }
}

/* WATCHERS */

function* watchFetchMoviesRequest() {
  yield takeLatest(types.FETCH_MOVIES_START, fetchMovies);
}

export default function* moviesSaga() {
  yield all([fork(watchFetchMoviesRequest)]);
}
