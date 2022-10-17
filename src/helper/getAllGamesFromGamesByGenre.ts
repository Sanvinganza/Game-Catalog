import { TGamesByGenreReducer } from "../redux/store";

export const getAllGamesFromGamesByGenre = (gamesByGenre: TGamesByGenreReducer ) => 
  Object.values(gamesByGenre.gamesByGenreList).flat(2);
