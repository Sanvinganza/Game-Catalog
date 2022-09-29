import axios from "axios";
import { changeUrlImagesToCover } from "../helper/changeUrlImagesToCover";
import { changeUrlImagesToScreenshot } from "../helper/changeUrlImagesToScreenshot";
import { changeUrlImagesToScreenshotBig } from "../helper/changeUrlImagesToScreenshotBig";
import { IGame } from "../redux/types/types";
import { getTopGamesConfig } from "./constants";

interface IResponse {
  data: IGame[]
}

export const getTopGames = () => axios(getTopGamesConfig)
  .then((response: IResponse
  ) => {
    return {
      ...response,
      data: response.data.map((game: IGame) => {
        if (game.cover) return {
          ...game,
          cover: window.screen.width > 960 ?
            changeUrlImagesToScreenshotBig(game.cover) :
            window.screen.width > 560? 
              changeUrlImagesToScreenshot(game.cover) : 
              changeUrlImagesToCover(game.cover)
        };
        return game;
      })};
  });