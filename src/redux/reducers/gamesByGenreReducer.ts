import { EGetGamesByGenre } from "../actions/getGamesByGenre";
import { IGame, TGetGamesByGenreActions } from "../types/types";

const initialState: IGetGamesByGenreState = {
  pending: false,
  error: null,
  genre: '',
  gamesByGenreList: {}
};

export default (state = initialState, action: TGetGamesByGenreActions) => {
  switch (action.type) {
  case EGetGamesByGenre.GET_GAMES_BY_GENRE_REQUEST:
    return {
      ...state,
      genre: action.payload.genre,
      pending: true
    };
  case EGetGamesByGenre.GET_GAMES_BY_GENRE_SUCCESS:
    return {
      ...state,
      pending: false,
      error: null,
      gamesByGenreList: {
        ...state.gamesByGenreList,
        [action.payload.genre]: action.payload.games
      }
    };
  case EGetGamesByGenre.GET_GAMES_BY_GENRE_FAILURE:
    return {
      ...state,
      pending: false,
      error: true
    };
  default:
    return {
      ...state
    };
  }
};

export interface IGetGamesByGenreState {
  pending: boolean,
  error: string | null,
  genre: string,
  gamesByGenreList: {
    [key: string]: IGame[]
  }
}