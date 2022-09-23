import { IGame } from "../../../redux/types/types";
import "./index.scss";

export default ({name, total_rating, created_at, company, 
  summary, genres, id, cover}: IGame) => {
  
  console.log(name, total_rating, created_at, company, 
    summary, genres, id, cover);
  
  return (
    <div className="gamepage">
      <div className="gamepage-container">
        <div className="gamepage-title">Detroit: Become human</div>
        <div className="gamepage-card">
          <div className="gamepage-card-logo"></div>
          <div className="gamepage-card-info">
            <div className="rating">Rating IGDB: 93</div>
            <div className="year">release year: 2018</div>
            <div className="company">company: Sony</div>
            <div className="summary">summary: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, enim atque sed incidunt voluptatem officia, dolorem placeat cum error vitae quae. Corrupti quod molestiae, impedit obcaecati eum est minima quo?</div>
            <div className="genres">
              <div className="genres-title">Genres:</div>
              <div className="genre">action</div>
              <div className="genre">action</div>
              <div className="genre">action</div>
              <div className="genre">action</div>
            </div>
            <div className="platforms">
              <div className="platforms-title">Platforms: </div>
              <div className="platform">PC (Microsoft Windows)</div>
              <div className="platform">XBOX</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};