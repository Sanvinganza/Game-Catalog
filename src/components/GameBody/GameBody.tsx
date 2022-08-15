import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../../middlewares/fetchGenres";
import { fetchInitGames } from "../../middlewares/fetchInitState";
import { IGenre } from "../../redux/actions";
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
      dispatch(fetchInitGames());
    })();
  }, []);
  
  return (
    <div>
      {['section 1','section 2','section 3'].map((genre: string) => 
        <div key={genre} className="game-body">
          <h2>{genre}</h2>
          <GameSection />
        </div>)}
    </div>
  );
}
