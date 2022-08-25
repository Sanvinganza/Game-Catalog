import * as ReactDOM from "react-dom";
import App from './App';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Catalog } from "./components/Catalog/Catalog";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import React from "react";
import { SearchWrapper } from "./components/SearchWrapper/SearchWrapper";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="catalog" element={<App/>} />
        <Route path="/" element={<Catalog />}/>
        <Route path="search" element={<SearchWrapper />}/>
      </Routes>
    </BrowserRouter>
  </Provider>
  , document.getElementById("app"));