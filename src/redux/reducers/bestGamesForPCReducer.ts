import { EGetBestGamesForPC } from "../actions/getBestGamesForPC";
import { IGame, TGetBestGamesForPCActions } from "../types/types";

const initialState: IGetBestGamesForPCState = {
  pending: false,
  games: [],
  error: null
};

export default (state = initialState, action: TGetBestGamesForPCActions) => {
  switch (action.type) {
  case EGetBestGamesForPC.GET_BEST_GAMES_FOR_PC_REQUEST:
    return {
      ...state,
      pending: true
    };
  case EGetBestGamesForPC.GET_BEST_GAMES_FOR_PC_SUCCESS:
    return {
      ...state,
      pending: false,
      error: null,
      games: action.payload.games
    };
  case EGetBestGamesForPC.GET_BEST_GAMES_FOR_PC_FAILURE:
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

export interface IGetBestGamesForPCState {
  pending: boolean,
  games: IGame[],
  error: string | null
}