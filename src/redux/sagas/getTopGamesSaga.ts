import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { changeUrlImagesToCover } from "../../helper/changeUrlImagesToCover";
import { changeUrlImagesToScreenshot } from "../../helper/changeUrlImagesToScreenshot";
import { EGetTopGames } from "../actions/actionTypes/getTopGamesTypes";
import { fetchTopGamesFailure, fetchTopGamesSuccess } from "../actions/getTopGames";
import { IGame } from "../reducer";

const config = {
  method: 'post',
  url: 'v4/games',
  headers: {
    'Client-ID': '50wszq1yqs93wi1xnpvvq5can2p947',
    'Authorization': 'Bearer h6cb5x1z8thq0l8rrj1l6ezhc2xr0x'
  },
  data: `fields name,cover.url;
    where cover.url != null & 
    created_at < 1642882402 & 
    created_at > 1611347207 & 
    platforms.name = "PC (Microsoft Windows)";
  `,
};

interface IResponse {
  data: IGame[]
}

const getTopGames = () => axios(config)
  .then((response: IResponse) => {
    console.log(response)
    return response.data.map((game: IGame) => {
      if (game.cover) return {
        ...game,
        cover: window.screen.width > 560 ? changeUrlImagesToScreenshot(game.cover) : changeUrlImagesToCover(game.cover)
      }

      return game;
    })
  })
  .catch((error: Error) => {
    console.log(error);
  });

function* fetchTopGamesSaga() {
  try {
    const response: AxiosResponse<IGame[]> = yield call(getTopGames);
    yield put(fetchTopGamesSuccess({ games: response.data }));
  } catch (e) {
    if (e instanceof Error) {
      yield put(
        fetchTopGamesFailure({
          error: e.message
        })
      );
    } else {
      console.log('Unexpected error', e)
    }

  }
}

function* getTopGamesSaga() {
  yield all([takeLatest(EGetTopGames.GET_TOP_GAMES_REQUEST, fetchTopGamesSaga)]);
}

export default getTopGamesSaga;