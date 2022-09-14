import { IGame } from '../../redux/types/types';
import './index.scss';

export function Game ({cover, age_rating, name, total_rating}: IGame) {
  return (
    <div className="game">
      <div style={{backgroundImage: `url(${cover.url})`|| 'url(../../images/poster.jpg)'}} className="game-image">
        <div className="game-rating">{Math.round(total_rating? total_rating : 0)} </div>
        <div className="game-age-rating">{age_rating || '+16'}</div>
      </div>
      <div className="game-title">{name || 'Detroit: Become human'}</div>
    </div>
  );
}
