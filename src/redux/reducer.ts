import { IGenre, IUrl } from './actions';
import {
  GET_GENRES,
  GET_IMAGE_URLS,
  INIT_STATE
} from './actions.type';

export interface IState{
  urls: IUrl[],
  genres: IGenre[],
  initialData: any
}

export interface IAction {
  type: string,
  payload: {
    urls: IUrl[],
    genres: IGenre[],
    data: any
  }
}

const initialState: IState = {
  urls: [{
    id: 1,
    url: '//images.igdb.com/igdb/image/upload/t_thumb/w5fcogetb88owqbryp9j.jpg'
  }],
  genres: [

  ],
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
    default: return state;
  }
}