import { all, fork } from "redux-saga/effects";
import getGenresSaga from "./getGenresSaga";
import getTopGamesSaga from "./getTopGamesSaga";

export function* rootSaga() {
  yield all([fork(getTopGamesSaga), fork(getGenresSaga)]);
}