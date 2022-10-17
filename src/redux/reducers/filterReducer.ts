import { platforms, ratingIGDB, themes, years } from "../../helper/constants";
import { EGetFilter } from "../actions/getFilter";
import { IGenre, TGetFilterActions } from "../types/types";

const initialState: IGetFilterState = {
  genres: [],
  years: years,
  themes: themes,
  platforms: platforms,
  ratingIGDB: ratingIGDB
};

export default (state = initialState, action: TGetFilterActions) => {
  switch (action.type) {
  case EGetFilter.GET_FILTER:
    return {
      ...state,
      ...action.payload.state
    };
  case EGetFilter.GET_GENRES_FOR_FILTER:
    return {
      ...state,
      genres: [...action.payload.genres
        .map((genre: IGenre) => ({...genre,checked: false}))
      ]
    };
    
  default:
    return {
      ...state
    };
  }
};

export interface IGetFilterState {
  genres: IFilterItem[],
  years: IFilterItem[],
  themes: IFilterItem[],
  platforms: IFilterItem[],
  ratingIGDB: IFilterItem[]
}
export interface IFilterItem {
  id: number,
  name: string,
  checked: boolean
}