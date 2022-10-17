import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { fetchBestGamesForPCRequest } from "../../redux/actions/getBestGamesForPC";
import { fetchGenresRequest } from "../../redux/actions/getGenres";
import { fetchHighRatingGamesRequest } from "../../redux/actions/getHighRatingGames";
import { fetchRecommendTodayGamesRequest } from "../../redux/actions/getRecommendTodayGames";
import { fetchTopGamesRequest } from "../../redux/actions/getTopGames";
import { Header } from "./Header";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopGamesRequest());
    dispatch(fetchRecommendTodayGamesRequest());
    dispatch(fetchHighRatingGamesRequest());
    dispatch(fetchGenresRequest());
    dispatch(fetchBestGamesForPCRequest());
  }, []);
  
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;