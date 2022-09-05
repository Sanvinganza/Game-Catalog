import { EGetTopGames } from "../actions/actionTypes/getTopGamesTypes";

export interface ICover {
  id: number,
  url: string
}
export interface IGame {
  id?: number,
  name: string,
  age_rating?: number,
  summary?: string,
  created_at?: number,
  cover: ICover,
  total_rating?: number
}
export interface IGenre {
  name: string
}
export interface IGameByGenre {
  [key: string]: IGame[]
}
export interface IState{
  topGames: IGetTopGamesState,
}
export interface IAction {
  type: string,
  payload: {
    genres: IGenre[],
    games: IGame[],
    genre: string
  }
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
export interface IGetTopGamesState {
  pending: boolean,
  games: IGame[],
  error: string | null
}
export type TGetTopGamesActions = 
  | IFetchTopGamesRequest
  | IFetchTopGamesFailure
  | IFetchTopGamesSuccess;