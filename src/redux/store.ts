import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
  reducer: rootReducer, 
  middleware: [thunkMiddleware]
});
