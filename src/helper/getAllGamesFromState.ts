import { IState, TState } from "../redux/store";
import { getAllGamesFromGamesByGenre } from "./getAllGamesFromGamesByGenre";

export const getAllGamesFromState = (state: TState | IState) => {
  return [
    ...Object.values(state)
      .map((gamesArray) => gamesArray.games)
      .filter((element) => element !== undefined)
      .flat(2),
    ...getAllGamesFromGamesByGenre(state.gamesByGenre)];
};