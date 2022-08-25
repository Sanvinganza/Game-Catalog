import { Carousel } from "./TopCarousel/TopCarousel";
import { Header } from "../../common/Header";
import { PageWrapper } from "./PageWrapper/PageWrapper";
import "./index.scss";

export const Main = () => {
  const titles = ['Top rating', 'best in 2021', 'best in 2022',
    'best in 2022', 'Reccomend for you'];

  return(
    <div className="app">
      <video src="./images/videoBg.mp4" autoPlay loop muted/>
      <Header />
      <Carousel />
      <PageWrapper titles={titles}/>
    </div>
  );
};