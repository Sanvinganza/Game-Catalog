import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopGamesRequest } from "../../../redux/actions/getTopGames";
import { Carousel } from "./TopCarousel/TopCarousel";
import "./index.scss";
import { PageSection } from "../../CatalogWrapper/PageSection";
import { TState } from "../../../redux/store";
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
    (state: TState) => state.recommendTodayGames
  );
  const highRatingGames: IGetHighRatingGamesState = useSelector(
    (state: TState) => state.highRatingGames
  );
  const bestGamesForPC: IGetBestGamesForPCState = useSelector(
    (state: TState) => state.bestGamesForPC
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
    </>
  );
};