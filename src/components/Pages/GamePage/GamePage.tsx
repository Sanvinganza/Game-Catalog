import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllGamesFromState } from "../../../helper/getAllGamesFromState";
import { unixDataToData } from "../../../helper/unixDataToData";
import { TState } from "../../../redux/store";
import { ICompanyInfo, IGame, IGenre, IPlatform } from "../../../redux/types/types";
import "./index.scss";

export default () => {
  const {id} = useParams();
  const game = getAllGamesFromState(useSelector((state: TState) => state))
    .find((game: IGame) => game.id === (id?+id: null));

  return (
    <div className="gamepage">
      <div className="gamepage-container">
        <div className="gamepage-title">{game.name}</div>
        <div className="gamepage-card">
          <div className="gamepage-card-logo"
            style={{backgroundImage: `url(
              ${game.cover.url
      .replace('t_screenshot_med', 't_cover_big')
      .replace('t_screenshot_big', 't_cover_big')})
      `}}
          ></div>
          <div className="gamepage-card-info">

            <div className="rating">
              <div className="title">Rating IGDB:&nbsp;</div>
              {game.rating.toFixed(0)}
            </div>

            <div className="year">
              <div className="title">Release Year:&nbsp;</div>
              {unixDataToData(game.created_at)}
            </div>
            
            <div className="companies">
              <div className="title">Company: </div> 
              {game.involved_companies.length !== 0? 
                game.involved_companies.map((companyInfo: ICompanyInfo) => 
                  <div key={companyInfo.id} className="company">{companyInfo.company.name}</div>  
                )
                : null}
            </div>
                        
            <div className="genres">
              <div className="title">Genres: </div>
              {game.genres.length !== 0 ? 
                game.genres.map((genre: IGenre) => 
                  <div key={genre.id} className="genre">{genre.name}</div>)
                : null}
            </div>
            
            <div className="platforms">
              <div className="title">Platforms: </div>
              {game.platforms.length !== 0 ? 
                game.platforms.map((platform: IPlatform) => 
                  <div className="platform" key={platform.id}>{platform.name}</div>)
                : null}
            </div>

            <div className="summary">
              <div className="discription">{game.summary}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};