import { IGame } from "../types/types";


export const fetchGamesByGenreRequest = (
  payload: IFetchGamesByGenreRequestPayload
): IFetchGamesByGenreRequest => ({
  type: EGetGamesByGenre.GET_GAMES_BY_GENRE_REQUEST,
  payload
});

export const fetchGamesByGenreSuccess = (
  payload: IFetchGamesByGenreSuccessPayload
): IFetchGamesByGenreSuccess => {
  return ({
    type: EGetGamesByGenre.GET_GAMES_BY_GENRE_SUCCESS,
    payload
  });
};

export const fetchGamesByGenreFailure = (
  payload: IFetchGamesByGenreFailurePayload
): IFetchGamesByGenreFailure => ({
  type: EGetGamesByGenre.GET_GAMES_BY_GENRE_FAILURE,
  payload
});

export enum EGetGamesByGenre {
  GET_GAMES_BY_GENRE_REQUEST = "GET_GAMES_BY_GENRE_REQUEST",
  GET_GAMES_BY_GENRE_SUCCESS = "GET_GAMES_BY_GENRE_SUCCESS",
  GET_GAMES_BY_GENRE_FAILURE = "GET_GAMES_BY_GENRE_FAILURE"
}
export interface IFetchGamesByGenreRequestPayload {
  genre: string
}
export interface IFetchGamesByGenreSuccessPayload {
  games: IGame[],
  genre: string
}
export interface IFetchGamesByGenreSuccess {
  type: typeof EGetGamesByGenre.GET_GAMES_BY_GENRE_SUCCESS,
  payload: IFetchGamesByGenreSuccessPayload
}
export interface IFetchGamesByGenreFailure {
  type: typeof EGetGamesByGenre.GET_GAMES_BY_GENRE_FAILURE,
  payload: IFetchGamesByGenreFailurePayload
}
export interface IFetchGamesByGenreFailurePayload {
  error: string
}
export interface IFetchGamesByGenreRequest {
  type: typeof EGetGamesByGenre.GET_GAMES_BY_GENRE_REQUEST,
  payload: IFetchGamesByGenreRequestPayload
}