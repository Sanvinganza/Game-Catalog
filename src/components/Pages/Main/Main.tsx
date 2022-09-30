import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { titles } from "../../../helper/constants";
import { fetchTopGamesRequest } from "../../../redux/actions/getTopGames";
import { PageWrapper } from "../../PageWrapper/PageWrapper";
import { Carousel } from "./TopCarousel/TopCarousel";
import "./index.scss";
import { PageSection } from "../../PageWrapper/PageSection";
import { IState } from "../../../redux/store";
import { fetchRecommendTodayGamesRequest } from "../../../redux/actions/getRecommendTodayGames";
import { fetchHighRatingGamesRequest } from "../../../redux/actions/getHighRatingGames";
import { IGetHighRatingGamesState } from "../../../redux/reducers/highRatingGamesReducer";
import { IGetRecommendTodayGamesState } from "../../../redux/reducers/recommendTodayReducer";
import { fetchGenresRequest } from "../../../redux/actions/getGenres";
import { IGetBestGamesForPCState } from "../../../redux/reducers/bestGamesForPCReducer";
import { fetchBestGamesForPCRequest } from "../../../redux/actions/getBestGamesForPC";

export const Main = () => {
  const dispatch = useDispatch();
  const recommendTodayGames: IGetRecommendTodayGamesState = useSelector(
    (state: IState) => state.recommendTodayGames
  );
  const highRatingGames: IGetHighRatingGamesState = useSelector(
    (state: IState) => state.highRatingGames
  );
  const bestGamesForPC: IGetBestGamesForPCState = useSelector(
    (state: IState) => state.bestGamesForPC
  );
  
  useEffect(() => {
    dispatch(fetchTopGamesRequest());
    dispatch(fetchRecommendTodayGamesRequest());
    dispatch(fetchHighRatingGamesRequest());
    dispatch(fetchGenresRequest());
    dispatch(fetchBestGamesForPCRequest());
  }, []);
  return(
    <>
      <Carousel />
      <video src={"./images/videobgsmall.mp4"} autoPlay loop muted/>

      <div className="page-wrapper">
        <PageSection games={recommendTodayGames.games} title={'Recommend today'} />
        <PageSection games={highRatingGames.games} title={'Games with high raiting'} />
        <PageSection games={bestGamesForPC.games} title={'Best games For PC'} />
      </div>
      <PageWrapper  titles={titles}/>
    </>
  );
};