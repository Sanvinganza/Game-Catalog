import { EGetTopGames } from "./actionTypes/getTopGamesTypes";
import { 
  IFetchTopGamesFailure,
  IFetchTopGamesFailurePayload,
  IFetchTopGamesRequest,
  IFetchTopGamesSuccess,
  IFetchTopGamesSuccessPayload 
} from "../types/types";

export const fetchTopGamesRequest = (
): IFetchTopGamesRequest => ({
  type: EGetTopGames.GET_TOP_GAMES_REQUEST
});

export const fetchTopGamesSuccess = (
  payload: IFetchTopGamesSuccessPayload
): IFetchTopGamesSuccess => ({
  type: EGetTopGames.GET_TOP_GAMES_SUCCESS,
  payload
});

export const fetchTopGamesFailure = (
  payload: IFetchTopGamesFailurePayload
): IFetchTopGamesFailure => ({
  type: EGetTopGames.GET_TOP_GAMES_FAILURE,
  payload
});