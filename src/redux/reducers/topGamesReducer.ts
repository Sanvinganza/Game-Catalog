import { EGetTopGames } from "../actions/actionTypes/getTopGamesTypes"
import { IGetTopGamesState, TGetTopGamesActions } from "../types/types"

const initialState: IGetTopGamesState = {
  pending: false,
  games: [],
  error: null
}

export default (state = initialState, action: TGetTopGamesActions) => {
  switch(action.type) {
    case EGetTopGames.GET_TOP_GAMES_REQUEST:
      return {
        ...state,
        pending: true
      };
    case EGetTopGames.GET_TOP_GAMES_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        games: action.payload.games
      };
    case EGetTopGames.GET_TOP_GAMES_FAILURE:
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
}