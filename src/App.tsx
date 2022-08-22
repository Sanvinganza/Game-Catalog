import { Provider } from "react-redux";
import "./App.scss";
import { GameBody } from "./components/PageWrapper/PageWrapper";
import { Header } from "./components/Header/Header";
import { store } from "./redux/store";
import React from "react";
import { Carousel } from "./components/Carousel/Carousel";

const App = () => {
  return(
    <React.StrictMode>
      <Provider store={store}>
        <div className="app">
          <video src="./images/videoBg.mp4" autoPlay loop muted/>
          <Header />
          <Carousel />
          <GameBody />
        </div>
      </Provider>
    </React.StrictMode>
  );
};

export default App;