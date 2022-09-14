import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getGenres } from "../../api/getGenres";
import { EGetGenres, fetchGenresFailure, fetchGenresSuccess } from "../actions/getGenres";
import { IGenre } from "../types/types";

function* fetchGenresSaga() {
  try {
    const response: AxiosResponse<IGenre[]> = yield call(getGenres);
    
    yield put(fetchGenresSuccess({
      genres: response.data
    }));
  } catch (e) {
    if (e instanceof Error) {
      yield put(
        fetchGenresFailure({
          error: e.message
        })
      );
    } else {
      console.log('Unexpected error', e);
    }
  }
}

function* getGenresSaga() {
  yield all([takeLatest(EGetGenres.GET_GENRES_REQUEST, fetchGenresSaga)]);
}

export default getGenresSaga;