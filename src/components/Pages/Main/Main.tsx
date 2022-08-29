import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchGameCarousel } from "../../../api/fetchGameCarousel";
import { isMobile_size, titles } from "../../../helper/constants";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { Header } from "../../common/Header";
import { PageWrapper } from "../../PageWrapper/PageWrapper";
import "./index.scss";
import { Carousel } from "./TopCarousel/TopCarousel";

export const Main = () => {
  const isMobile = useMediaQuery(isMobile_size);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(fetchGameCarousel());
    })();
  }, []);

  return(
    <div className="app">
      <video src={isMobile? "./images/videoBg.mp4" :"./images/videobgsmall.mp4"} autoPlay loop muted/>
      <Header />
      <Carousel />
      <PageWrapper titles={titles}/>
    </div>
  );
};