import { Dispatch } from "redux";
import { fetchGenres, fetchTopGames } from "../api";

export const initState = () => (dispatch: Dispatch<any>) => {
  dispatch(fetchTopGames());
  dispatch(fetchGenres());
}