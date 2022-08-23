export interface ISlide{
  cover: {
    id: number,
    url: string
  }
}

export function Slide ({cover}: ISlide) {
  return (
    <>
      <div className="slide-carousel">
        <div style={{backgroundImage: `url(${cover.url})`|| 'url(../../images/poster.jpg)'}} className="slide-image">
        </div>
      </div>
    </>
  );
}
