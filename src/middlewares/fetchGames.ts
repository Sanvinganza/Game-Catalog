import axios from "axios";
import { Dispatch } from "redux";
import { getImageUrls, IUrl } from "../redux/actions";

interface IResponse{
  data: IUrl[]
}

export const fetchGames = () => (dispatch: Dispatch) => {
  axios.get('/v4/artworks?fields=url&limit=10',{
    headers: {
      'Client-ID': '50wszq1yqs93wi1xnpvvq5can2p947',
      'Authorization': 'Bearer h6cb5x1z8thq0l8rrj1l6ezhc2xr0x',
    },
  })
    .then((response: IResponse) => {
      console.log('fetchGames = ',response.data);
      dispatch(getImageUrls(response.data));
      return { success: true };
    })
    .catch((error: Error) => {
      console.log(error);
      return { success: false };
    });
}