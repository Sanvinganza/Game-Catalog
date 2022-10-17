import { EGetGamesByName } from "../actions/getGamesByName";
import { IGame, TGetGamesByNameActions } from "../types/types";

const initialState: IGetGamesByNameState = {
  pending: false,
  games: [],
  error: null,
  name: ''
};

export default (state = initialState, action: TGetGamesByNameActions) => {
  switch (action.type) {
  case EGetGamesByName.GET_GAMES_BY_NAME_REQUEST:
    return {
      ...state,
      name: action.payload.name,
      pending: true
    };
  case EGetGamesByName.GET_GAMES_BY_NAME_SUCCESS:
    return {
      ...state,
      pending: false,
      error: null,
      games: action.payload.games
    };
  case EGetGamesByName.GET_GAMES_BY_NAME_FAILURE:
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

export interface IGetGamesByNameState {
  pending: boolean,
  games: IGame[],
  error: string | null,
  name: string
}