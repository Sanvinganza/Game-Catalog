import './game.scss';

export interface IGame {
  imageUrl?: string,
  rating?: string,
  title?: string,
  ageRating?: string,
  storyline?: string
}

export function Game ({imageUrl, rating, title, ageRating}: IGame) {
  return (
    <div className="game">
      <div style={{backgroundImage: `url(${imageUrl})`}} className="game-image">
        <div className="game-rating">{rating || '93.3'} </div>
        <div className="game-age-rating">{ageRating || '+16'}</div>
      </div>
      <div className="game-title">{title || 'Detroit: Become human'}</div>
    </div>
  );
}
