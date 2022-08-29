import { Dispatch } from "redux";
import { fetchTopGames } from "../api";

export const initState = () => (dispatch: Dispatch<any>) => {
  dispatch(fetchTopGames());
}