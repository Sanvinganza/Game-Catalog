import { IGame } from '../components/Game/Game';
import {
  GET_IMAGE_URLS,
  GET_GENRES,
  INIT_STATE
} from './actions.type';

export interface IUrl {
  id: number,
  url: string
}

export interface IGenre {
  id: number,
  name: string
}

export const getImageUrls = (urls: IUrl[]) => {
  return {
    type: GET_IMAGE_URLS,
    payload: { 
      urls
    }
  }
}

export const getGenres = (genres: IGenre[]) => {
  return {
    type: GET_GENRES,
    payload: {
      genres
    }
  }
}

export const initData = (data: any) => {
  return {
    type: INIT_STATE,
    payload: {
      data
    }
  }
}

export const getTopGamesToday = (genres: IGame[]) => {
  return {
    type: GET_GENRES,
    payload: {
      genres
    }
  }
}
