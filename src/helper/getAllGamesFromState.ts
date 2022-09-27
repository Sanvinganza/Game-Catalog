import { IState } from "../redux/store";

export const getAllGamesFromState = (state: IState) => {
  return Object.values(state)
    .map((gamesArray) => gamesArray.games)
    .filter((element) => element !== undefined)
    .flat(2);
};