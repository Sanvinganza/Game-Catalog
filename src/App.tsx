import { Provider } from "react-redux";
import "./App.scss";
import { PageWrapper } from "./components/PageWrapper/PageWrapper";
import { Header } from "./components/Header/Header";
import { store } from "./redux/store";
import React from "react";
import { Carousel } from "./components/Carousel/Carousel";

const App = () => {
  return(
    <div className="app">
      <video src="./images/videoBg.mp4" autoPlay loop muted/>
      <Header />
      <Carousel />
      <PageWrapper />
    </div>
  );
};

export default App;