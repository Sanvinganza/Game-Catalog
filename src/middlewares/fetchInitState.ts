import axios from "axios";
import { Dispatch } from "redux";
import { multiqueryBody__fetchInitialState } from "../constant/multiqueryBody__fetchInitialState";
import { initData } from "../redux/actions";

interface IResponse{
  data: any
}

const config = {
  method: 'post',
  url: '/v4/multiquery',
  headers: {
    'Client-ID': '50wszq1yqs93wi1xnpvvq5can2p947', 
    'Authorization': 'Bearer h6cb5x1z8thq0l8rrj1l6ezhc2xr0x', 
    'Content-Type': 'text/plain'
  },
  data : multiqueryBody__fetchInitialState
};

export const fetchInitGames = () => (dispatch: Dispatch) => {
  axios(config)
    .then((response: IResponse) => {
      console.log('fetchInitState = ',response.data);
      dispatch(initData(response.data));
      return { success: true };
    })
    .catch((error: Error) => {
      console.log(error);
      return { success: false };
    });
}