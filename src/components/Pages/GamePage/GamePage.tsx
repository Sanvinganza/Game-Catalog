import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameByIdConfig } from "../../../api/constants";
import { changeUrlImagesToScreenshot } from "../../../helper/changeUrlImagesToScreenshot";
import { unixDataToData } from "../../../helper/unixDataToData";
import { ICompany, IGame, IGenre, IPlatform } from "../../../redux/types/types";
import "./index.scss";
interface IResponse {
  data: IGame[]
}
export default () => {
  const {id} = useParams();
  console.log(id);
  const [game, setGame] = useState({
    name: '',
    created_at: 0,
    genres: [],
    platforms: [],
    rating: 0,
    summary: '',
    cover: {
      id: 0,
      url: ''
    },
    involved_companies: []
  });
  
  useEffect(() => {
    axios(getGameByIdConfig(id? id: ''))
      .then((response: IResponse) => {
        const resp = {
          ...response,
          data: response.data.map((game: IGame) => {
            if (game.cover) return {
              ...game,
              cover: changeUrlImagesToScreenshot(game.cover)
            };
            return game;
          })
        };
        setGame(resp.data[0]);
      });
  }, [id]);

  return (
    <div className="gamepage">
      <div className="gamepage-container">
        <div className="gamepage-title">{game.name}</div>
        <div className="gamepage-card">
          <div className="gamepage-card-logo"
            style={{backgroundImage: `url(${game.cover.url})`}}
          ></div>
          <div className="gamepage-card-info">
            <div className="rating">Rating IGDB: {game.rating.toFixed(0)}</div>
            <div className="year">release year: {unixDataToData(game.created_at)}</div>
            <div className="company">company: 
              {game.involved_companies.length !== 0? 
                game.involved_companies.map((company: ICompany) => 
                  company.company.name)
                :
                null
              }</div>
            <div className="summary">summary: {game.summary}</div>
            <div className="genres">
              <div className="genres-title">Genres: </div>
              {game.genres.length !== 0 ? game.genres.map((genre: IGenre) => 
                <div key={genre.id} className="genre">{genre.name}</div>)
                : null}
            </div>
            <div className="platforms">
              <div className="platforms-title">Platforms: </div>
              {game.platforms.length !== 0 ? game.platforms.map((platform: IPlatform) => 
                <div className="platform" key={platform.id}>{platform.name}</div>)
                :
                null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};