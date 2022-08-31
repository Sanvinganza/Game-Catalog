import { IGenre } from './actions';
import {
  GET_GAMES_BY_GENRE,
  GET_GAME_CAROUSEL,
  GET_TOP_RATING_GAMES,
} from './actions.type';

export interface ICover {
  id: number,
  url: string
}

export interface IGame {
  id?: number,
  name: string,
  age_rating?: number,
  summary?: string,
  created_at?: number,
  cover: ICover,
  total_rating?: number
}

export interface IGameByGenre {
  [key: string]: IGame[]
}

export interface IState{
  topRatingGames: IGame[],
  gamesByGenre: IGameByGenre[],
  gamesCarousel: IGame[]
}

export interface IAction {
  type: string,
  payload: {
    genres: IGenre[],
    games: IGame[],
    genre: string
  }
}

const initialState: IState = {
  topRatingGames: [],
  gamesByGenre: [],
  gamesCarousel: []
}

export const rootReducer = (state = initialState, action: IAction) => {
  console.log('state :', state);

  switch (action.type) {
    case GET_TOP_RATING_GAMES: 
      return {
        ...state,
        topRatingGames: [...action.payload.games]
      }
    case GET_GAMES_BY_GENRE: 
      return {
        ...state,
        gamesByGenre: [
          ...state.gamesByGenre,
          { [action.payload.genre]: [...action.payload.games] }
        ]
      }
    case GET_GAME_CAROUSEL: 
      return {
        ...state,
        gamesCarousel: [...action.payload.games]
      }
    default: return state;
  }
}