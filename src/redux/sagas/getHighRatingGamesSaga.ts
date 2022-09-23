import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getHighRatingGames } from "../../api/getHighRatingGames";
import { EGetHighRatingGames, fetchHighRatingGamesFailure, fetchHighRatingGamesSuccess } from "../actions/getHighRatingGames";
import { IGame } from "../types/types";


function* fetchHighRatingGamesSaga() {
  try {
    const response: AxiosResponse<IGame[]> = yield call(getHighRatingGames);
    
    yield put(fetchHighRatingGamesSuccess({
      games: response.data
    }));
  } catch (e) {
    if (e instanceof Error) {
      yield put(
        fetchHighRatingGamesFailure({
          error: e.message
        })
      );
    } else {
      console.log('Unexpected error', e);
    }
  }
}

function* getHighRatingGamesSaga() {
  yield all([takeLatest(EGetHighRatingGames.GET_HIGH_RATING_GAMES_REQUEST, fetchHighRatingGamesSaga)]);
}

export default getHighRatingGamesSaga;