import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { changeUrlImagesToScreenshot } from "../../../helper/changeUrlImagesToScreenshot";
import { getAllGamesFromState } from "../../../helper/getAllGamesFromState";
import { unixDataToData } from "../../../helper/unixDataToData";
import { IState } from "../../../redux/store";
import { ICompany, IGame, IGenre, IPlatform } from "../../../redux/types/types";
import "./index.scss";

export default () => {
  const {id} = useParams();
  const game = getAllGamesFromState(useSelector((state: IState) => state))
    .find((game: IGame) => game.id === (id?+id: null));

  // useEffect(() => {
  //   axios(getGameByIdConfig(id? id: ''))
  //     .then((response: IResponse) => {
  //       const resp = {
  //         ...response,
  //         data: response.data.map((game: IGame) => {
  //           if (game.cover) return {
  //             ...game,
  //             cover: changeUrlImagesToScreenshot(game.cover)
  //           };
  //           return game;
  //         })
  //       };
  //       setGame(resp.data[0]);
  //     });
  // }, [id]);

  return (
    <div className="gamepage">
      <div className="gamepage-container">
        <div className="gamepage-title">{game.name}</div>
        <div className="gamepage-card">
          <div className="gamepage-card-logo"
            style={{backgroundImage: `url(${changeUrlImagesToScreenshot(game.cover).url})`}}
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
                game.involved_companies.map((company: ICompany) => 
                  <div className="company">{company.company.name}</div>  
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
              <div className="title">summary:&nbsp;</div>
              <div className="discription">{game.summary}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};