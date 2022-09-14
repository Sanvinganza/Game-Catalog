import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { EGetGenres, fetchGenresFailure, fetchGenresSuccess } from "../actions/getGenres";
import { IGenre } from "../types/types";


const getGenres = () => axios({
  method: 'get',
  url: 'v4/genres?fields=name&limit=100',
  headers: {
    'Client-ID': '50wszq1yqs93wi1xnpvvq5can2p947',
    'Authorization': 'Bearer h6cb5x1z8thq0l8rrj1l6ezhc2xr0x'
  }
});

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