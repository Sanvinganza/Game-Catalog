import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilter } from "../../api/fetchFilter";
import { fetchGenres } from "../../api/fetchGenres";
import { getGenres, IGenre } from "../../redux/actions";
import { IState } from "../../redux/reducer";
import { GameSection } from "../GameSection/GameSection";
import "./game-body.scss";

export function GameBody () {
  const genres = useSelector((state: IState) => state.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      console.log('useEffect');
      dispatch(fetchGenres());
      dispatch(fetchFilter('get', 'genres?fields=name', getGenres));
    })();
  }, []);
  
  return (
    <div className="game-sections">
      {genres.map((genre: IGenre) => 
        <div className="game-section" key={genre.id}>
          <a href="" className="game-genre">{genre.name}</a>
          <GameSection />
        </div>)}
    </div>
  );
}
