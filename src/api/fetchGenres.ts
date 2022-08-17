import axios from "axios";
import { Dispatch } from "redux";
import { getGenres, IGenre} from "../redux/actions";

interface IResponse{
  data: IGenre[]
}

export const fetchGenres = () => (dispatch: Dispatch) => {
  const config = {
    method: 'get',
    url: 'v4/genres?fields=name',
    headers: {
      'Client-ID': '50wszq1yqs93wi1xnpvvq5can2p947',
      'Authorization': 'Bearer h6cb5x1z8thq0l8rrj1l6ezhc2xr0x'
    }
  };

  axios(config)
    .then((response: IResponse) => {
      console.log('fetchGenres = ',response.data);
      dispatch(getGenres(response.data));
    })
    .catch((error: Error) => {
      console.log(error);
    });
}