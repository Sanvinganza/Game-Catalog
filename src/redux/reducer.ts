import { IGenre, IUrl } from './actions';
import {
  GET_GENRES,
  GET_IMAGE_URLS,
  GET_TOP_RATING_GAMES,
  INIT_STATE
} from './actions.type';

interface IGame {
  name: string,
  age_rating: number,
  storyline: string,
  created_at: number,
  poster: string,
  rating: number
}

export interface IState{
  urls: IUrl[],
  genres: IGenre[],
  initialData: any,
  topRatingGames: IGame[]
}

export interface IAction {
  type: string,
  payload: {
    urls: IUrl[],
    genres: IGenre[],
    data: any,
    topRatingGames: IGame[]
  }
}

const initialState: IState = {
  urls: [{
    id: 1,
    url: '//images.igdb.com/igdb/image/upload/t_thumb/w5fcogetb88owqbryp9j.jpg'
  }],
  genres: [
  ],
  topRatingGames: [],
  initialData: []
}

export const rootReducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case GET_IMAGE_URLS : 
      return {
        ...state,
        urls: [...action.payload.urls]
      }
    case GET_GENRES: 
      return {
        ...state,
        genres: [...action.payload.genres]
      }
    case INIT_STATE:
      return {
        ...state,
        initialData: [...action.payload.data]
      }
    case GET_TOP_RATING_GAMES: 
      return {
        ...state,
        topRatingGames: [...action.payload.topRatingGames]
      }
    default: return state;
  }
}