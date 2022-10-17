import { EGetGenres } from "../actions/getGenres";
import { IGenre, TGetGenresActions } from "../types/types";

const initialState: IGetGenresState = {
  pending: false,
  genres: [],
  error: null
};

export default (state = initialState, action: TGetGenresActions) => {
  switch (action.type) {
  case EGetGenres.GET_GENRES_REQUEST:
    return {
      ...state,
      pending: true
    };
  case EGetGenres.GET_GENRES_SUCCESS:
    return {
      ...state,
      pending: false,
      error: null,
      genres: action.payload.genres
    };
  case EGetGenres.GET_GENRES_FAILURE:
    return {
      ...state,
      pending: false,
      genres: [],
      error: true
    };
  default:
    return {
      ...state
    };
  }
};

export interface IGetGenresState {
  pending: boolean,
  genres: IGenre[],
  error: string | null
}