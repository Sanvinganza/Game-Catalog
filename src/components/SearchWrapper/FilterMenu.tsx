import { useState } from "react";
import { useSelector } from "react-redux";
import { IGenre } from "../../redux/actions";
import { IState } from "../../redux/reducer";
import { DropdownButton } from "./DropdownButton";

export function FilterMenu () {
  const genres = useSelector((state: IState) => state.genres).map((genre: IGenre) => genre.name);
  const [open, setOpen] = useState(false);
  return (
    <div className="filter-menu">
      <div className="filter-menu--inner">
        <div className="dropdown-list">
          <div onClick={() => setOpen(!open)}>
            <DropdownButton />
          </div>
          <div className="genres-list">
            {open?genres.map((genre: string) => <h2>{genre}</h2>):null}
          </div>
          <button className="dropdown-button">
            <div className="dropdown-button__title">Country</div>
            <div className="dropdown-button__icon" style={{backgroundImage: "url(./images/dropdown.png"}}></div>
          </button>
          <button className="dropdown-button">
            <div className="dropdown-button__title">Years</div>
            <div className="dropdown-button__icon" style={{backgroundImage: "url(./images/dropdown.png"}}></div>
          </button>
          <button className="dropdown-button">
            <div className="dropdown-button__title">Raiting IGDB</div>
            <div className="dropdown-button__icon" style={{backgroundImage: "url(./images/dropdown.png"}}></div>
          </button>
          <button className="dropdown-button">
            <div className="dropdown-button__title">Company</div>
            <div className="dropdown-button__icon" style={{backgroundImage: "url(./images/dropdown.png"}}></div>
          </button>
        </div>
      </div>
    </div>
  );
}