import { Provider } from "react-redux";
import "./App.scss";
import { GameBody } from "./components/GameBody/GameBody";
import { Header } from "./components/Header/Header";
import { store } from "./redux/store";

const App = () => {
  return(
    <Provider store={store}>
      <div className="app">
        <video src="./images/videoBg.mp4" autoPlay loop muted/>
        <Header />
        <GameBody />
      </div>
    </Provider>
  );
};

export default App;