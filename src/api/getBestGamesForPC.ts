import axios from "axios";
import { changeUrlImagesToCover } from "../helper/changeUrlImagesToCover";
import { IGame } from "../redux/types/types";
import { getBestGamesForPCConfig } from "./constants";

interface IResponse {
  data: IGame[]
}

export const getBestGamesForPC = () => axios(getBestGamesForPCConfig)
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