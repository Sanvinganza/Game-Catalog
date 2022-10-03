import axios from "axios";
import { changeUrlImagesToCover } from "../helper/changeUrlImagesToCover";
import { IGame } from "../redux/types/types";
import { getGamesByNameConfig } from "./constants";

interface IResponse {
  data: IGame[]
}

export const getGamesByName = (name: string) => () => axios(getGamesByNameConfig(name))
  .then((response: IResponse
  ) => {
    return {
      ...response,
      data: response.data.map((game: IGame) => {
        if (game.cover) return {
          ...game,
          cover: changeUrlImagesToCover(game.cover)
        };
        return game;
      })};
  });