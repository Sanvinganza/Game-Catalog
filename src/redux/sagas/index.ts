import { all, fork } from "redux-saga/effects";
import getTopGamesSaga from "./getTopGamesSaga";

export function* rootSaga() {
  console.log("SAGA")
  yield all([fork(getTopGamesSaga)])
}