import { IGame } from "../types/types";


export const fetchRecommendTodayGamesRequest = (
): IFetchRecommendTodayGamesRequest => ({
  type: EGetRecommendTodayGames.GET_RECOMMEND_TODAY_GAMES_REQUEST
});

export const fetchRecommendTodayGamesSuccess = (
  payload: IFetchRecommendTodayGamesSuccessPayload
): IFetchRecommendTodayGamesSuccess => {
  return ({
    type: EGetRecommendTodayGames.GET_RECOMMEND_TODAY_GAMES_SUCCESS,
    payload
  });
};

export const fetchRecommendTodayGamesFailure = (
  payload: IFetchRecommendTodayGamesFailurePayload
): IFetchRecommendTodayGamesFailure => ({
  type: EGetRecommendTodayGames.GET_RECOMMEND_TODAY_GAMES_FAILURE,
  payload
});



export enum EGetRecommendTodayGames {
  GET_RECOMMEND_TODAY_GAMES_REQUEST = "GET_RECOMMEND_TODAY_GAMES_REQUEST",
  GET_RECOMMEND_TODAY_GAMES_SUCCESS = "GET_RECOMMEND_TODAY_GAMES_SUCCESS",
  GET_RECOMMEND_TODAY_GAMES_FAILURE = "GET_RECOMMEND_TODAY_GAMES_FAILURE"
}

export interface IFetchRecommendTodayGamesSuccessPayload {
  games: IGame[]
}
export interface IFetchRecommendTodayGamesSuccess {
  type: typeof EGetRecommendTodayGames.GET_RECOMMEND_TODAY_GAMES_SUCCESS,
  payload: IFetchRecommendTodayGamesSuccessPayload
}
export interface IFetchRecommendTodayGamesFailure {
  type: typeof EGetRecommendTodayGames.GET_RECOMMEND_TODAY_GAMES_FAILURE,
  payload: IFetchRecommendTodayGamesFailurePayload
}
export interface IFetchRecommendTodayGamesFailurePayload {
  error: string
}
export interface IFetchRecommendTodayGamesRequest {
  type: typeof EGetRecommendTodayGames.GET_RECOMMEND_TODAY_GAMES_REQUEST,
}