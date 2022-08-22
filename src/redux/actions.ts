import {
  GET_GENRES,
  GET_GAMES_BY_GENRE,
  GET_TOP_RATING_GAMES,
  GET_GAME_CAROUSEL
} from './actions.type';
import { IGame } from './reducer';

export interface IUrl {
  id: number,
  url: string
}

export interface IGenre {
  id: number,
  name: string
}

export const getGenres = (genres: IGenre[]) => {
  return {
    type: GET_GENRES,
    payload: {
      genres
    }
  }
}

export const getTopGamesToday = (games: IGame[]) => {
  return {
    type: GET_TOP_RATING_GAMES,
    payload: {
      games
    }
  }
}

export const getGamesByGenre = (genre: string, games: IGame[]) => {
  return {
    type: GET_GAMES_BY_GENRE,
    payload: {
      genre,
      games
    }
  }
}


export const getGamesCarousel = (games: IGame[]) => {
  return {
    type: GET_GAME_CAROUSEL,
    payload: {
      games
    }
  }
}