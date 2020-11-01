import { all, fork } from "redux-saga/effects";

import moviesSaga from "./movies/sagas";
import movieSaga from "./movie/sagas";

export default function* rootSaga() {
  yield all([fork(moviesSaga), fork(movieSaga)]);
}
