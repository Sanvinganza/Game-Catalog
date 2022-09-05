import * as ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Main } from "./components/Pages/Main/Main";
import { Catalog } from "./components/Pages/Catalog/Catalog";
import store from "./redux/store";
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="catalog" element={<Catalog />}/>
      </Routes>
    </BrowserRouter>
  </Provider>
  , document.getElementById("app"));