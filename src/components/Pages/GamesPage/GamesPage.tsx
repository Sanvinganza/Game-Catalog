import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IState } from "../../../redux/store";
import { IGame } from "../../../redux/types/types";
import { Game } from "../../common/Game";
import "./index.scss";

export const GamesPage = () => {
  const { games } = useSelector((state: IState) => state.bestGamesForPC);
  return (
    <div className="gamespage-container">
      <div className="gamespage-container-inner">
        {(games as IGame[]).map((game: IGame) => 
          <Link to={`/games/${game.id}`}>
            <Game cover={game.cover} name={game.name} rating={game.rating}/>
          </Link>)}
      </div>
    </div>
  );
};