import { IGame } from "../types/types";


export const fetchGameByIdRequest = (
  id: number
): IFetchGameByIdRequest => ({
  type: EGetGameById.GET_GAME_BY_ID_REQUEST,
  id
});

export const fetchGameByIdSuccess = (
  payload: IFetchGameByIdSuccessPayload
): IFetchGameByIdSuccess => {
  return ({
    type: EGetGameById.GET_GAME_BY_ID_SUCCESS,
    payload
  });
};

export const fetchGameByIdFailure = (
  payload: IFetchGameByIdFailurePayload
): IFetchGameByIdFailure => ({
  type: EGetGameById.GET_GAME_BY_ID_FAILURE,
  payload
});



export enum EGetGameById {
  GET_GAME_BY_ID_REQUEST = "GET_GAME_BY_ID_REQUEST",
  GET_GAME_BY_ID_SUCCESS = "GET_GAME_BY_ID_SUCCESS",
  GET_GAME_BY_ID_FAILURE = "GET_GAME_BY_ID_FAILURE"
}

export interface IFetchGameByIdSuccessPayload {
  games: IGame[]
}
export interface IFetchGameByIdSuccess {
  type: typeof EGetGameById.GET_GAME_BY_ID_SUCCESS,
  payload: IFetchGameByIdSuccessPayload
}
export interface IFetchGameByIdFailure {
  type: typeof EGetGameById.GET_GAME_BY_ID_FAILURE,
  payload: IFetchGameByIdFailurePayload
}
export interface IFetchGameByIdFailurePayload {
  error: string
}
export interface IFetchGameByIdRequest {
  type: typeof EGetGameById.GET_GAME_BY_ID_REQUEST,
  id: number
}