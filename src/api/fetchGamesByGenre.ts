import axios from "axios";
import { Dispatch } from "redux";
import { getGamesByGenre } from "../redux/actions";
import { IGame } from "../redux/reducer";

interface IResponse{
  data: IGame[]
}

export const fetchGamesByGenre = (genre: string) => (dispatch: Dispatch) => {
  const config = {
    method: 'get',
    url: 'v4/genres?fields=name',
    headers: {
      'Client-ID': '50wszq1yqs93wi1xnpvvq5can2p947',
      'Authorization': 'Bearer h6cb5x1z8thq0l8rrj1l6ezhc2xr0x'
    },
    data: `
      fields created_at,name,summary,cover.url,total_rating,age_rating;
      where cover.url != 'null' & rating_count = (1) & genres.name = "${genre}"
    `
  };

  axios(config)
    .then((response: IResponse) => {
      console.log(`genre ${genre} :` ,response.data);
      dispatch(getGamesByGenre(genre, response.data));
    })
    .catch((error: Error) => {
      console.log(error);
    });
}