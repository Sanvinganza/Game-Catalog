import { IFetchBestGamesForPCFailure, IFetchBestGamesForPCRequest, IFetchBestGamesForPCSuccess } from "../actions/getBestGamesForPC";
import { IFetchGamesByNameFailure, IFetchGamesByNameRequest, IFetchGamesByNameSuccess } from "../actions/getGamesByName";
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
  name: string,
  id: number
}
export interface ICompanyInfo {
  id: number,
  company: ICompany
}
export interface IVideos {
  name: string,
  id: number
}
export interface IGame {
  id?: number,
  name: string,
  age_rating?: number,
  summary?: string,
  created_at?: number,
  cover: ICover,
  total_rating?: number,
  involved_companies?: ICompanyInfo[],
  genres?: IGenre[],
  platforms?: IPlatform[],
  rating?: number,
  videos?: IVideos
}
export interface IGenre {
  id?: number,
  name: string
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
export type TGetBestGamesForPCActions =
  | IFetchBestGamesForPCRequest
  | IFetchBestGamesForPCSuccess
  | IFetchBestGamesForPCFailure;
export type TGetGamesByNameActions = 
  | IFetchGamesByNameRequest
  | IFetchGamesByNameSuccess
  | IFetchGamesByNameFailure;