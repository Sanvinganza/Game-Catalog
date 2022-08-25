import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchGameCarousel } from "../../../api/fetchGameCarousel";
import { Header } from "../../common/Header";
import { PageWrapper } from "../../PageWrapper/PageWrapper";
import "./index.scss";
import { Carousel } from "./TopCarousel/TopCarousel";

export const Main = () => {
  const titles = [
    'Games with high raiting', 
    'Recommend for you',
    'Best games for PC', 
    'New games', 
    'Popular games'
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(fetchGameCarousel());
    })();
  }, []);


  return(
    <div className="app">
      <video src="./images/videoBg.mp4" autoPlay loop muted/>
      <Header />
      <Carousel />
      <PageWrapper titles={titles}/>
    </div>
  );
};