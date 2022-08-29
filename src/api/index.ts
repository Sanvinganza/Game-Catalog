import { getGamesByGenre, getTopGamesToday } from "../redux/actions";
import { fetchGamesByGenre_data, fetchTopGames_data } from "./constants/fetchParams";
import { fetchGameFilter } from "./fetchGameFilter";

//Example: data = 1549312452
//1642336928 unix today
export const fetchTopGames = () => fetchGameFilter('post', 'games', getTopGamesToday, fetchTopGames_data);
export const fetchGamesByGenre = (genre: string) => fetchGameFilter('post', 'games', getGamesByGenre, fetchGamesByGenre_data(genre));