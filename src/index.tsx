import * as ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Main } from "./components/Pages/Main/Main";
import { Catalog } from "./components/Pages/Catalog/Catalog";
import store from "./redux/store";
import './index.scss';
import Layout from "./components/common/Layout";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout  />}>
          <Route index element={<Main />} />
          <Route path="catalog" element={<Catalog />}>
            
          </Route>
          <Route path="watch"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  , document.getElementById("app"));