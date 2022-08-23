import * as ReactDOM from "react-dom";
import App from './App';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Catalog } from "./components/Catalog/Catalog";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import React from "react";
import { FilterWrapper } from "./components/FilterWrapper/FilterWrapper";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="catalog" element={<Catalog />}/>
          <Route path="search" element={<FilterWrapper />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
  , document.getElementById("app"));