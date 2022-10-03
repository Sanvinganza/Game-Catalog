import { AxiosResponse } from "axios";
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { EGetGamesByName, fetchGamesByNameFailure, fetchGamesByNameSuccess } from "../actions/getGamesByName";
import { IGame } from "../types/types";
import { getGamesByName } from "../../api/getGamesByName";
import { IState } from "../store";

export const gamesByName = ((state: IState) => state.gamesByName);

function* fetchGamesByNameSaga() {
  try {
    const { name } = yield select(gamesByName);
    const request = getGamesByName(name);
    const response: AxiosResponse<IGame[]> = yield call(request);
    
    yield put(fetchGamesByNameSuccess({
      games: response.data
    }));
  } catch (e) {
    if (e instanceof Error) {
      yield put(
        fetchGamesByNameFailure({
          error: e.message
        })
      );
    } else {
      console.log('Unexpected error', e);
    }
  }
}

function* getGamesByNameSaga() {
  yield all([takeLatest(EGetGamesByName.GET_GAMES_BY_NAME_REQUEST, fetchGamesByNameSaga)]);
}

export default getGamesByNameSaga;