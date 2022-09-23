import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isMobile_size, titles } from "../../../helper/constants";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { fetchTopGamesRequest } from "../../../redux/actions/getTopGames";
import { PageWrapper } from "../../PageWrapper/PageWrapper";
import { Carousel } from "./TopCarousel/TopCarousel";
import "./index.scss";
import { PageSection } from "../../PageWrapper/PageSection";
import { IState } from "../../../redux/store";
import { fetchRecommendTodayGamesRequest } from "../../../redux/actions/getRecommendTodayGames";

export const Main = () => {
  const isMobile = useMediaQuery(isMobile_size);
  const dispatch = useDispatch();
  const { games } = useSelector(
    (state: IState) => state.recommendTodayGames
  );
  useEffect(() => {
    dispatch(fetchTopGamesRequest());
    dispatch(fetchRecommendTodayGamesRequest());
  }, []);
  return(
    <>
      <video src={isMobile? "./images/videoBg.mp4" :"./images/videobgsmall.mp4"} autoPlay loop muted/>
      <Carousel />
      <div className="page-wrapper">
        <PageSection games={games} title={'Recommend today'} />

      </div>
      <PageWrapper  titles={titles}/>
    </>
  );
};