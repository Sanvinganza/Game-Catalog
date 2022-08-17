import axios from "axios";
import { Dispatch } from "redux";
import { changedUrlImages } from "../helper/changedUrlImages";
import { IUrl } from "../redux/actions";

interface IResponse{
  data: IUrl[]
}

export const fetchFilter = (method: string, endpoint: string, action: Function, data?: string) => (dispatch: Dispatch) => {
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
      console.log('fetchFilter = ',response.data);
      dispatch(action(response.data));
    })
    .catch((error: Error) => {
      console.log(error);
    });
}