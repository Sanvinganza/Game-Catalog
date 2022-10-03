import { IGame } from "../types/types";


export const fetchGamesByNameRequest = (
  payload: IFetchGamesByNameRequestPayload
): IFetchGamesByNameRequest => ({
  type: EGetGamesByName.GET_GAMES_BY_NAME_REQUEST,
  payload
});

export const fetchGamesByNameSuccess = (
  payload: IFetchGamesByNameSuccessPayload
): IFetchGamesByNameSuccess => {
  return ({
    type: EGetGamesByName.GET_GAMES_BY_NAME_SUCCESS,
    payload
  });
};

export const fetchGamesByNameFailure = (
  payload: IFetchGamesByNameFailurePayload
): IFetchGamesByNameFailure => ({
  type: EGetGamesByName.GET_GAMES_BY_NAME_FAILURE,
  payload
});



export enum EGetGamesByName {
  GET_GAMES_BY_NAME_REQUEST = "GET_GAMES_BY_NAME_REQUEST",
  GET_GAMES_BY_NAME_SUCCESS = "GET_GAMES_BY_NAME_SUCCESS",
  GET_GAMES_BY_NAME_FAILURE = "GET_GAMES_BY_NAME_FAILURE"
}
export interface IFetchGamesByNameRequestPayload {
  name: string
}
export interface IFetchGamesByNameSuccessPayload {
  games: IGame[]
}
export interface IFetchGamesByNameSuccess {
  type: typeof EGetGamesByName.GET_GAMES_BY_NAME_SUCCESS,
  payload: IFetchGamesByNameSuccessPayload
}
export interface IFetchGamesByNameFailure {
  type: typeof EGetGamesByName.GET_GAMES_BY_NAME_FAILURE,
  payload: IFetchGamesByNameFailurePayload
}
export interface IFetchGamesByNameFailurePayload {
  error: string
}
export interface IFetchGamesByNameRequest {
  type: typeof EGetGamesByName.GET_GAMES_BY_NAME_REQUEST,
  payload: IFetchGamesByNameRequestPayload
}