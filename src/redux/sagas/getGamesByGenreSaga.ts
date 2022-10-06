import { AxiosResponse } from "axios";
import { all, call, put, select, takeEvery, takeLeading } from "redux-saga/effects";
import { EGetGamesByGenre, fetchGamesByGenreFailure, fetchGamesByGenreSuccess } from "../actions/getGamesByGenre";
import { IGame } from "../types/types";
import { TState } from "../store";
import { getGamesByGenre } from "../../api/getGamesByGenre";

export const gamesByGenre = ((state: TState) => state.gamesByGenre);

function* fetchGamesByGenreSaga() {
  try {
    const { genre } = yield select(gamesByGenre);
    const response: AxiosResponse<IGame[]> = yield call(getGamesByGenre, genre);
    
    yield put(fetchGamesByGenreSuccess({
      genre: genre,
      games: response.data
    }));
  } catch (e) {
    if (e instanceof Error) {
      yield put(
        fetchGamesByGenreFailure({
          error: e.message
        })
      );
    } else {
      console.log('Unexpected error', e);
    }
  }
}

function* getGamesByGenreSaga() {
  yield all([takeEvery(EGetGamesByGenre.GET_GAMES_BY_GENRE_REQUEST, fetchGamesByGenreSaga)]);
}

export default getGamesByGenreSaga;