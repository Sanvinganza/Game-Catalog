import axios from "axios";

export const getGenres = () => axios({
  method: 'get',
  url: 'v4/genres?fields=name&limit=100',
  headers: {
    'Client-ID': process.env['CLIENT-ID'] as string,
    'Authorization': process.env['AUTHORIZATION'] as string
  }
});