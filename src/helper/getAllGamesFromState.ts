import { TState } from "../redux/store";

export const getAllGamesFromState = (state: TState) => {
  return Object.values(state)
    .map((gamesArray) => gamesArray.games)
    .filter((element) => element !== undefined)
    .flat(2);
};