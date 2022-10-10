import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./sagas";
import topGamesReducer from "./reducers/topGamesReducer";
import { combineReducers } from "redux";
import genresReducer from "./reducers/genresReducer";
import recommendTodayGamesReducer from "./reducers/recommendTodayReducer";
import highRatingGamesReducer from "./reducers/highRatingGamesReducer";
import bestGamesForPCReducer from "./reducers/bestGamesForPCReducer";
import gamesByNameReducer from "./reducers/gamesByNameReducer";
import gamesByGenreReducer from "./reducers/gamesByGenreReducer";
import filterReducer from "./reducers/filterReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  topGames: topGamesReducer,
  genres: genresReducer,
  recommendTodayGames: recommendTodayGamesReducer,
  highRatingGames: highRatingGamesReducer,
  bestGamesForPC: bestGamesForPCReducer,
  gamesByName: gamesByNameReducer,
  gamesByGenre: gamesByGenreReducer,
  filter: filterReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware, sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;

export type TState = ReturnType<typeof rootReducer>
export type TGamesByGenreReducer = ReturnType<typeof gamesByGenreReducer>;
export type TTopGames = ReturnType<typeof topGamesReducer>;
export type TGenres = ReturnType<typeof genresReducer>;
export type TRecommendTodayGames = ReturnType<typeof recommendTodayGamesReducer>;
export type THighRatingGames = ReturnType<typeof highRatingGamesReducer>;
export type TBestGamesForPC = ReturnType<typeof bestGamesForPCReducer>;
export type TGamesByName = ReturnType<typeof gamesByNameReducer>;
export type TFilter = ReturnType<typeof filterReducer>;

export interface IState {
  topGames: TTopGames,
  genres: TGenres,
  recommendTodayGames: TRecommendTodayGames,
  highRatingGames: THighRatingGames,
  bestGamesForPC: TBestGamesForPC,
  gamesByName: TGamesByName,
  gamesByGenre: TGamesByGenreReducer,
  filter: TFilter
}