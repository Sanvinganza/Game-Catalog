import axios from "axios";

export const getGenres = () => axios({
  method: 'get',
  url: 'v4/genres?fields=name&limit=100',
  headers: {
    'Client-ID': '50wszq1yqs93wi1xnpvvq5can2p947',
    'Authorization': 'Bearer h6cb5x1z8thq0l8rrj1l6ezhc2xr0x'
  }
});