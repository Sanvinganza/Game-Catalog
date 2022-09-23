import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getRecommendTodayGames } from "../../api/getRecommendTodayGames";
import { EGetRecommendTodayGames, fetchRecommendTodayGamesFailure, fetchRecommendTodayGamesSuccess } from "../actions/getRecommendTodayGames";
import { IGame } from "../types/types";


function* fetchRecommendTodayGamesSaga() {
  try {
    const response: AxiosResponse<IGame[]> = yield call(getRecommendTodayGames);
    
    yield put(fetchRecommendTodayGamesSuccess({
      games: response.data
    }));
  } catch (e) {
    if (e instanceof Error) {
      yield put(
        fetchRecommendTodayGamesFailure({
          error: e.message
        })
      );
    } else {
      console.log('Unexpected error', e);
    }
  }
}

function* getRecommendTodayGamesSaga() {
  yield all([takeLatest(EGetRecommendTodayGames.GET_RECOMMEND_TODAY_GAMES_REQUEST, fetchRecommendTodayGamesSaga)]);
}

export default getRecommendTodayGamesSaga;