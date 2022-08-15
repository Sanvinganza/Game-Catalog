import axios from "axios";
import { response } from "express";
import { Dispatch } from "redux";
import { fetchGames_data } from "../constant/middlewares_const";
import { chengedUrlImages } from "../helper/chengedUrlImages";
import { getImageUrls, IUrl } from "../redux/actions";

interface IResponse{
  data: IUrl[]
}

export const fetchGames = () => (dispatch: Dispatch) => {
  axios.get('/v4/covers?fields=url&limit=13',{
    headers: {
      'Client-ID': '50wszq1yqs93wi1xnpvvq5can2p947',
      'Authorization': 'Bearer h6cb5x1z8thq0l8rrj1l6ezhc2xr0x',
    },
    data: fetchGames_data
  })
    .then((response: IResponse) => {
      console.log('fetchGames = ', chengedUrlImages(response.data));
      dispatch(getImageUrls(chengedUrlImages(response.data)));
      return { success: true };
    })
    .catch((error: Error) => {
      console.log(error);
      return { success: false };
    });
}