import { all, fork } from "redux-saga/effects";
import getGenresSaga from "./getGenresSaga";
import getHighRatingGamesSaga from "./getHighRatingGamesSaga";
import getRecommendTodayGamesSaga from "./getRecommendTodaySaga";
import getTopGamesSaga from "./getTopGamesSaga";

export function* rootSaga() {
  yield all([
    fork(getTopGamesSaga), 
    fork(getGenresSaga), 
    fork(getRecommendTodayGamesSaga),
    fork(getHighRatingGamesSaga),
  ]);
}