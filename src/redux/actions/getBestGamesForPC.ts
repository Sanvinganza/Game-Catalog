import { IGame } from "../types/types";


export const fetchBestGamesForPCRequest = (
): IFetchBestGamesForPCRequest => ({
  type: EGetBestGamesForPC.GET_BEST_GAMES_FOR_PC_REQUEST
});

export const fetchBestGamesForPCSuccess = (
  payload: IFetchBestGamesForPCSuccessPayload
): IFetchBestGamesForPCSuccess => {
  return ({
    type: EGetBestGamesForPC.GET_BEST_GAMES_FOR_PC_SUCCESS,
    payload
  });
};

export const fetchBestGamesForPCFailure = (
  payload: IFetchBestGamesForPCFailurePayload
): IFetchBestGamesForPCFailure => ({
  type: EGetBestGamesForPC.GET_BEST_GAMES_FOR_PC_FAILURE,
  payload
});



export enum EGetBestGamesForPC {
  GET_BEST_GAMES_FOR_PC_REQUEST = "GET_BEST_GAMES_FOR_PC_REQUEST",
  GET_BEST_GAMES_FOR_PC_SUCCESS = "GET_BEST_GAMES_FOR_PC_SUCCESS",
  GET_BEST_GAMES_FOR_PC_FAILURE = "GET_BEST_GAMES_FOR_PC_FAILURE"
}

export interface IFetchBestGamesForPCSuccessPayload {
  games: IGame[]
}
export interface IFetchBestGamesForPCSuccess {
  type: typeof EGetBestGamesForPC.GET_BEST_GAMES_FOR_PC_SUCCESS,
  payload: IFetchBestGamesForPCSuccessPayload
}
export interface IFetchBestGamesForPCFailure {
  type: typeof EGetBestGamesForPC.GET_BEST_GAMES_FOR_PC_FAILURE,
  payload: IFetchBestGamesForPCFailurePayload
}
export interface IFetchBestGamesForPCFailurePayload {
  error: string
}
export interface IFetchBestGamesForPCRequest {
  type: typeof EGetBestGamesForPC.GET_BEST_GAMES_FOR_PC_REQUEST
}