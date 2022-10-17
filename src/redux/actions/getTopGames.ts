import { IGame } from "../types/types";


export const fetchTopGamesRequest = (
): IFetchTopGamesRequest => ({
  type: EGetTopGames.GET_TOP_GAMES_REQUEST
});

export const fetchTopGamesSuccess = (
  payload: IFetchTopGamesSuccessPayload
): IFetchTopGamesSuccess => {
  return ({
    type: EGetTopGames.GET_TOP_GAMES_SUCCESS,
    payload
  });
};

export const fetchTopGamesFailure = (
  payload: IFetchTopGamesFailurePayload
): IFetchTopGamesFailure => ({
  type: EGetTopGames.GET_TOP_GAMES_FAILURE,
  payload
});



export enum EGetTopGames {
  GET_TOP_GAMES_REQUEST = "GET_TOP_GAMES_REQUEST",
  GET_TOP_GAMES_SUCCESS = "GET_TOP_GAMES_SUCCESS",
  GET_TOP_GAMES_FAILURE = "GET_TOP_GAMES_FAILURE"
}

export interface IFetchTopGamesSuccessPayload {
  games: IGame[]
}
export interface IFetchTopGamesSuccess {
  type: typeof EGetTopGames.GET_TOP_GAMES_SUCCESS,
  payload: IFetchTopGamesSuccessPayload
}
export interface IFetchTopGamesFailure {
  type: typeof EGetTopGames.GET_TOP_GAMES_FAILURE,
  payload: IFetchTopGamesFailurePayload
}
export interface IFetchTopGamesFailurePayload {
  error: string
}
export interface IFetchTopGamesRequest {
  type: typeof EGetTopGames.GET_TOP_GAMES_REQUEST,
}