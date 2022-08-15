import axios from "axios";
import { Dispatch } from "redux";
import { getGenres, getImageUrls, IGenre, IUrl } from "../redux/actions";

interface IResponse{
  data: IGenre[]
}

export const fetchGenres = () => (dispatch: Dispatch) => {
  axios.get('v4/genres?fields=name',{
    headers: {
      'Client-ID': '50wszq1yqs93wi1xnpvvq5can2p947',
      'Authorization': 'Bearer h6cb5x1z8thq0l8rrj1l6ezhc2xr0x',
    },
  })
    .then((response: IResponse) => {
      console.log('fetchGenres = ',response.data);
      dispatch(getGenres(response.data));
      return { success: true };
    })
    .catch((error: Error) => {
      console.log(error);
      return { success: false };
    });
}