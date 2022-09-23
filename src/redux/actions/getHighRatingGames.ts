import { IGame } from "../types/types";


export const fetchHighRatingGamesRequest = (
): IFetchHighRatingGamesRequest => ({
  type: EGetHighRatingGames.GET_HIGH_RATING_GAMES_REQUEST
});

export const fetchHighRatingGamesSuccess = (
  payload: IFetchHighRatingGamesSuccessPayload
): IFetchHighRatingGamesSuccess => {
  return ({
    type: EGetHighRatingGames.GET_HIGH_RATING_GAMES_SUCCESS,
    payload
  });
};

export const fetchHighRatingGamesFailure = (
  payload: IFetchHighRatingGamesFailurePayload
): IFetchHighRatingGamesFailure => ({
  type: EGetHighRatingGames.GET_HIGH_RATING_GAMES_FAILURE,
  payload
});



export enum EGetHighRatingGames {
  GET_HIGH_RATING_GAMES_REQUEST = "GET_HIGH_RATING_GAMES_REQUEST",
  GET_HIGH_RATING_GAMES_SUCCESS = "GET_HIGH_RATING_GAMES_SUCCESS",
  GET_HIGH_RATING_GAMES_FAILURE = "GET_HIGH_RATING_GAMES_FAILURE"
}

export interface IFetchHighRatingGamesSuccessPayload {
  games: IGame[]
}
export interface IFetchHighRatingGamesSuccess {
  type: typeof EGetHighRatingGames.GET_HIGH_RATING_GAMES_SUCCESS,
  payload: IFetchHighRatingGamesSuccessPayload
}
export interface IFetchHighRatingGamesFailure {
  type: typeof EGetHighRatingGames.GET_HIGH_RATING_GAMES_FAILURE,
  payload: IFetchHighRatingGamesFailurePayload
}
export interface IFetchHighRatingGamesFailurePayload {
  error: string
}
export interface IFetchHighRatingGamesRequest {
  type: typeof EGetHighRatingGames.GET_HIGH_RATING_GAMES_REQUEST,
}