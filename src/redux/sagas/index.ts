import { all, fork } from "redux-saga/effects";
import getTopGamesSaga from "./getTopGamesSaga";

export function* rootSaga() {
  yield all([fork(getTopGamesSaga)])
}