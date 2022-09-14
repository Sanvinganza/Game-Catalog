import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getTopGames } from "../../api/getTopGames";
import { EGetTopGames, fetchTopGamesFailure, fetchTopGamesSuccess } from "../actions/getTopGames";
import { IGame } from "../types/types";


function* fetchTopGamesSaga() {
  try {
    const response: AxiosResponse<IGame[]> = yield call(getTopGames);
    
    yield put(fetchTopGamesSuccess({
      games: response.data
    }));
  } catch (e) {
    if (e instanceof Error) {
      yield put(
        fetchTopGamesFailure({
          error: e.message
        })
      );
    } else {
      console.log('Unexpected error', e);
    }
  }
}

function* getTopGamesSaga() {
  yield all([takeLatest(EGetTopGames.GET_TOP_GAMES_REQUEST, fetchTopGamesSaga)]);
}

export default getTopGamesSaga;