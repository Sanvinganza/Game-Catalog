import { EGetRecommendTodayGames } from "../actions/getRecommendTodayGames";
import { IGame, TGetRecommendTodayGamesActions } from "../types/types";

const initialState: IGetRecommendTodayGamesState = {
  pending: false,
  games: [],
  error: null
};

export default (state = initialState, action: TGetRecommendTodayGamesActions) => {
  switch (action.type) {
  case EGetRecommendTodayGames.GET_RECOMMEND_TODAY_GAMES_REQUEST:
    return {
      ...state,
      pending: true
    };
  case EGetRecommendTodayGames.GET_RECOMMEND_TODAY_GAMES_SUCCESS:
    return {
      ...state,
      pending: false,
      error: null,
      games: action.payload.games
    };
  case EGetRecommendTodayGames.GET_RECOMMEND_TODAY_GAMES_FAILURE:
    return {
      ...state,
      pending: false,
      games: [],
      error: true
    };
  default:
    return {
      ...state
    };
  }
};

export interface IGetRecommendTodayGamesState {
  pending: boolean,
  games: IGame[] | never,
  error: string | null
}