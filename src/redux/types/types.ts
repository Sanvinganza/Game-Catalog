import { IFetchGameByIdFailure, IFetchGameByIdRequest, IFetchGameByIdSuccess } from "../actions/getGameById";
import { IFetchGenresFailure, IFetchGenresRequest, IFetchGenresSuccess } from "../actions/getGenres";
import { IFetchHighRatingGamesFailure, IFetchHighRatingGamesRequest, IFetchHighRatingGamesSuccess } from "../actions/getHighRatingGames";
import { IFetchRecommendTodayGamesFailure, IFetchRecommendTodayGamesRequest, IFetchRecommendTodayGamesSuccess } from "../actions/getRecommendTodayGames";
import { IFetchTopGamesFailure, IFetchTopGamesRequest, IFetchTopGamesSuccess } from "../actions/getTopGames";

export interface ICover {
  id: number,
  url: string
}
export interface IPlatform {
  id: number,
  name: string
}
export interface ICompany {
  id: number,
  company: {
    name: string,
    id: number
  }
}
export interface IGame {
  id?: number,
  name: string,
  age_rating?: number,
  summary?: string,
  created_at?: number,
  cover: ICover,
  total_rating?: number,
  involved_companies?: ICompany[],
  genres?: IGenre[],
  platforms?: IPlatform[],
  rating?: number
}
export interface IGenre {
  id?: number,
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
export type TGetHighRatingGamesActions =
  | IFetchHighRatingGamesRequest
  | IFetchHighRatingGamesFailure
  | IFetchHighRatingGamesSuccess;
export type TGetGameByIdActions =
  | IFetchGameByIdRequest
  | IFetchGameByIdSuccess
  | IFetchGameByIdFailure;