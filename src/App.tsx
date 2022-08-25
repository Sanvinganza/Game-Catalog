import "./App.scss";
import { PageWrapper } from "./components/PageWrapper/PageWrapper";
import { Header } from "./components/Header/Header";
import { Carousel } from "./components/Carousel/Carousel";

const App = () => {
  const titlesArray = [
    {name: 'Games with high raiting'}, 
    {name: 'Recommend for you'},
    {name: 'Best games for PC'}, 
    {name: 'New games'}, 
    {name: 'Popular games'}
  ];

  return(
    <div className="app">
      <video src="./images/videoBg.mp4" autoPlay loop muted/>
      <Header />
      <Carousel />
      <PageWrapper titles={titlesArray}/>
    </div>
  );
};

export default App;