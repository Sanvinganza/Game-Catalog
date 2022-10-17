import { Carousel } from "./TopCarousel/TopCarousel";
import "./index.scss";
import { PageSection } from "../../CatalogWrapper/PageSection";
import { TState } from "../../../redux/store";
import { IGetHighRatingGamesState } from "../../../redux/reducers/highRatingGamesReducer";
import { IGetRecommendTodayGamesState } from "../../../redux/reducers/recommendTodayReducer";
import { IGetBestGamesForPCState } from "../../../redux/reducers/bestGamesForPCReducer";
import { useSelector } from "react-redux";

export const Main = () => {
  const recommendTodayGames: IGetRecommendTodayGamesState = useSelector(
    (state: TState) => state.recommendTodayGames
  );
  const highRatingGames: IGetHighRatingGamesState = useSelector(
    (state: TState) => state.highRatingGames
  );
  const bestGamesForPC: IGetBestGamesForPCState = useSelector(
    (state: TState) => state.bestGamesForPC
  );
  
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