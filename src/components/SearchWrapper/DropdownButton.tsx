import * as React from 'react';

export interface IDropdownButtonProps {
  isClicked?: boolean
}

export function DropdownButton(props: IDropdownButtonProps) {
  const [genreIsClick, setGenreIsClick] = React.useState(false);
  console.log(props);
  return (
    <div>
      <button onClick={() => { setGenreIsClick(!genreIsClick); }} className="dropdown-button">
        <div className="dropdown-button__title">Genres</div>
        <div
          className="dropdown-button__icon"
          style={{
            backgroundImage: genreIsClick ?
              "url(./images/dropup.png" : "url(./images/dropdown.png"
          }}
        ></div>
      </button>
    </div>
  );
}
