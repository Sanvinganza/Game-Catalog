import axios from "axios";
import { Dispatch } from "redux";
import { changeUrlImagesToScreenshot } from "../helper/changeUrlImagesToScreenshot";
import { getGamesCarousel, getTopGamesToday } from "../redux/actions";
import { IGame } from "../redux/reducer";

interface IResponse{
  data: IGame[]
}

export const fetchGameCarousel = () => (dispatch: Dispatch) => {
  const config = {
    method: 'post',
    url: 'v4/games',
    headers: {
      'Client-ID': '50wszq1yqs93wi1xnpvvq5can2p947',
      'Authorization': 'Bearer h6cb5x1z8thq0l8rrj1l6ezhc2xr0x'
    },
    data: `fields created_at,name,summary,cover.url,total_rating,age_ratings;
      where cover.url != null;
    `,
  };

  axios(config)
    .then((response: IResponse) => {
      console.log(response.data);

      dispatch(getGamesCarousel(response.data.map((game: IGame) => {
        if(game.cover) return {
          ...game,
          cover: changeUrlImagesToScreenshot(game.cover)
        }
        
        return game;
      })
      ));
    })
    .catch((error: Error) => {
      console.log(error);
    });
}