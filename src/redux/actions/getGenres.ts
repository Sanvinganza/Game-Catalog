import { IGenre } from "../types/types";


export const fetchGenresRequest = (    
): IFetchGenresRequest => ({
  type: EGetGenres.GET_GENRES_REQUEST
});
export const fetchGenresSuccess = (
  payload: IFetchGenresSuccessPayload
): IFetchGenresSuccess => ({
  type: EGetGenres.GET_GENRES_SUCCESS,
  payload
});
export const fetchGenresFailure = (
  payload: IFetchGenresFailurePayload
): IFetchGenresFailure => ({
  type: EGetGenres.GET_GENRES_FAILURE,
  payload
});



export interface IFetchGenresFailure {
  type: typeof EGetGenres.GET_GENRES_FAILURE,
  payload: IFetchGenresFailurePayload
}
export interface IFetchGenresFailurePayload {
  error: string
}
export interface IFetchGenresSuccess {
  type: typeof EGetGenres.GET_GENRES_SUCCESS,
  payload: IFetchGenresSuccessPayload
}  
export interface IFetchGenresSuccessPayload {
  genres: IGenre[]
}
export enum EGetGenres {
  GET_GENRES_REQUEST = "GET_GENRES_REQUEST",
  GET_GENRES_SUCCESS = "GET_GENRES_SUCCESS",
  GET_GENRES_FAILURE = "GET_GENRES_FAILURE"
}
export interface IFetchGenresRequest {
  type: typeof EGetGenres.GET_GENRES_REQUEST
}