import "./index.scss";
import { Header } from "./components/common/Header";

const App = () => {
  const titlesArray = [
    'Games with high raiting', 
    'Recommend for you',
    'Best games for PC', 
    'New games', 
    'Popular games'
  ];

  return(
    <div className="app">
      <video src="./images/videoBg.mp4" autoPlay loop muted/>
      <Header />
    </div>
  );
};

export default App;