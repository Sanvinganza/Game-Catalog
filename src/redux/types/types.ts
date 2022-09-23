import { IFetchGenresFailure, IFetchGenresRequest, IFetchGenresSuccess } from "../actions/getGenres";
import { IFetchRecommendTodayGamesFailure, IFetchRecommendTodayGamesRequest, IFetchRecommendTodayGamesSuccess } from "../actions/getRecommendTodayGames";
import { IFetchTopGamesFailure, IFetchTopGamesRequest, IFetchTopGamesSuccess } from "../actions/getTopGames";

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
  total_rating?: number,
  company?: string,
  genres?: IGenre[]
}
export interface IGenre {
  name: string
}
export interface IGameByGenre {
  [key: string]: IGame[]
}
export interface IAction {
  type: string,
  payload: {
    genres: IGenre[],
    games: IGame[],
    genre: string
  }
}
export type TGetTopGamesActions = 
  | IFetchTopGamesRequest
  | IFetchTopGamesFailure
  | IFetchTopGamesSuccess;
  
export type TGetGenresActions =
  | IFetchGenresRequest
  | IFetchGenresSuccess
  | IFetchGenresFailure;
export type TGetRecommendTodayGamesActions =
  | IFetchRecommendTodayGamesRequest
  | IFetchRecommendTodayGamesFailure
  | IFetchRecommendTodayGamesSuccess;