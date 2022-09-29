import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getBestGamesForPC } from "../../api/getBestGamesForPC";
import { EGetBestGamesForPC, fetchBestGamesForPCFailure, fetchBestGamesForPCSuccess } from "../actions/getBestGamesForPC";
import { IGame } from "../types/types";


function* fetchBestGamesForPCSaga() {
  try {
    const response: AxiosResponse<IGame[]> = yield call(getBestGamesForPC);
    
    yield put(fetchBestGamesForPCSuccess({
      games: response.data
    }));
  } catch (e) {
    if (e instanceof Error) {
      yield put(
        fetchBestGamesForPCFailure({
          error: e.message
        })
      );
    } else {
      console.log('Unexpected error', e);
    }
  }
}

function* getBestGamesForPCSaga() {
  yield all([takeLatest(EGetBestGamesForPC.GET_BEST_GAMES_FOR_PC_REQUEST, fetchBestGamesForPCSaga)]);
}

export default getBestGamesForPCSaga;