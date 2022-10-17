import { IGame } from '../../redux/types/types';
import './index.scss';

export function Game ({cover, age_rating, name, rating}: IGame) {
  return (
    <div className="game">
      <div style={{backgroundImage: `url(${cover.url})`}} className="game-image">
        <div className="game-rating">{Math.round(rating? rating : 0)} </div>
        <div className="game-age-rating">{'0' || age_rating}</div>
      </div>
      <div className="game-title">{name}</div>
    </div>
  );
}
