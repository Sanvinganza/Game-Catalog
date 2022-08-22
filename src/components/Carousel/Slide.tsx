import { IGame } from '../../redux/reducer';


export function Slide ({total_rating, cover}: IGame) {
  return (
    <>
      <div className="slide">
        <div style={{backgroundImage: `url(${cover.url})`|| 'url(../../images/poster.jpg)'}} className="game-image">
          <div className="game-rating">{Math.round(total_rating? total_rating : 0)} </div>
        </div>
      </div>
    </>
  );
}
