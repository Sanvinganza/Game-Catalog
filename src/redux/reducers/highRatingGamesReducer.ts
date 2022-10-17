import { EGetHighRatingGames } from "../actions/getHighRatingGames";
import { IGame, TGetHighRatingGamesActions } from "../types/types";

const initialState: IGetHighRatingGamesState = {
  pending: false,
  games: [],
  error: null
};

export default (state = initialState, action: TGetHighRatingGamesActions) => {
  switch (action.type) {
  case EGetHighRatingGames.GET_HIGH_RATING_GAMES_REQUEST:
    return {
      ...state,
      pending: true
    };
  case EGetHighRatingGames.GET_HIGH_RATING_GAMES_SUCCESS:
    return {
      ...state,
      pending: false,
      error: null,
      games: action.payload.games
    };
  case EGetHighRatingGames.GET_HIGH_RATING_GAMES_FAILURE:
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

export interface IGetHighRatingGamesState {
  pending: boolean,
  games: IGame[],
  error: string | null
}