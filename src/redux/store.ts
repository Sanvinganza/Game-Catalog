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

const sagaMiddleware = createSagaMiddleware();

const rootReducer= combineReducers({
  topGames: topGamesReducer,
  genres: genresReducer,
  recommendTodayGames: recommendTodayGamesReducer,
  highRatingGames: highRatingGamesReducer,
  bestGamesForPC: bestGamesForPCReducer,
  gamesByName: gamesByNameReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware, sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;

export type IState = ReturnType<typeof rootReducer>;