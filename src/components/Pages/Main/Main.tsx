import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isMobile_size, titles } from "../../../helper/constants";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { fetchTopGamesRequest } from "../../../redux/actions/getTopGames";
import { PageWrapper } from "../../PageWrapper/PageWrapper";
import { Carousel } from "./TopCarousel/TopCarousel";
import "./index.scss";

export const Main = () => {
  const isMobile = useMediaQuery(isMobile_size);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopGamesRequest());
  }, []);
  
  return(
    <>
      <video src={isMobile? "./images/videoBg.mp4" :"./images/videobgsmall.mp4"} autoPlay loop muted/>
      <Carousel />
      <PageWrapper titles={titles}/>
    </>
  );
};