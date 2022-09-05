import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./sagas";
import topGamesReducer from "./reducers/topGamesReducer";
import { combineReducers } from "redux";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({topGames: topGamesReducer});
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware, sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;