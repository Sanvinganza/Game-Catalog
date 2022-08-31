import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./sagas";
import topGamesReducer from "./reducers/topGamesReducer";
import { combineReducers } from "redux";

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({rootReducer, topGamesReducer});

export const store = configureStore({
  reducer: reducer,
  middleware: [thunkMiddleware, sagaMiddleware]
});

sagaMiddleware.run(rootSaga);