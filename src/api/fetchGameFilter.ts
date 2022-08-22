import axios from "axios";
import { Dispatch } from "redux";
import { changeUrlImagesToCover } from "../helper/changeUrlImagesToCover";
import { IGame } from "../redux/reducer";

interface IResponse{
  data: IGame[]
}

export const fetchGameFilter = (method: string, endpoint: string, action: Function, data?: string) => (dispatch: Dispatch) => {
  const config = {
    method: method,
    url: 'v4/' + endpoint,
    headers: {
      'Client-ID': '50wszq1yqs93wi1xnpvvq5can2p947',
      'Authorization': 'Bearer h6cb5x1z8thq0l8rrj1l6ezhc2xr0x'
    },
    data: data,
  };

  axios(config)
    .then((response: IResponse) => {
      console.log('fetchGameFilter = method: '+ method +', data :' + response.data);

      dispatch(action(response.data.map((game: IGame) => {
        if(game.cover) return {
          ...game,
          cover: changeUrlImagesToCover(game.cover)
        }
        
        return game;
      })
      ));
    })
    .catch((error: Error) => {
      console.log(error);
    });
}