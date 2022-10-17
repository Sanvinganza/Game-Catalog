import { IGetFilterState } from "../reducers/filterReducer";
import { IGenre } from "../types/types";

export const fetchFilter = (
  payload: IFetchFilterPayload
): IFetchFilter => {
  return ({
    type: EGetFilter.GET_FILTER,
    payload
  });
};
export const fetchGenresForFilter = (
  payload: IFetchGenresForFilterPayload
): IFetchGenresForFilter => {
  return ({
    type: EGetFilter.GET_GENRES_FOR_FILTER,
    payload
  });
};

export interface IFetchGenresForFilterPayload {
  genres: IGenre[]
}
export interface IFetchGenresForFilter {
  type: typeof EGetFilter.GET_GENRES_FOR_FILTER,
  payload: IFetchGenresForFilterPayload
}
export enum EGetFilter {
  GET_FILTER = "GET_FILTER",
  GET_GENRES_FOR_FILTER = "GET_GENRES_FOR_FILTER"
}
export interface IFetchFilterPayload {
  state: IGetFilterState
}
export interface IFetchFilter {
  type: typeof EGetFilter.GET_FILTER,
  payload: IFetchFilterPayload
}