import { EGetGameById } from "../actions/getGameById";
import { IGame, TGetGameByIdActions } from "../types/types";

const initialState: IGetGameByIdState = {
  pending: false,
  games: [],
  error: null
};

export default (state = initialState, action: TGetGameByIdActions) => {
  switch (action.type) {
  case EGetGameById.GET_GAME_BY_ID_REQUEST:
    return {
      ...state,
      pending: true
    };
  case EGetGameById.GET_GAME_BY_ID_SUCCESS:
    return {
      ...state,
      pending: false,
      error: null,
      games: action.payload.games
    };
  case EGetGameById.GET_GAME_BY_ID_FAILURE:
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

export interface IGetGameByIdState {
  pending: boolean,
  games: IGame[],
  error: string | null
}