import { useState } from "react";
import { useSelector } from "react-redux";
import { platforms, ratingIGDB, themes, years } from "../../helper/constants";
import { IState, TState } from "../../redux/store";
import { DropdownButtonFilter } from "./DropdownButtons/DropdownButtonFilter";

export interface filterState {
  [key: string] : boolean
}
export const initFilterState = {
  genres: false,
  raiting: false,
  platforms: false,
  themes: false,
  years: false
};

export function FilterWrapper() {
  const { genres } = useSelector((state: IState | TState) => state.genres);

  const [isOpen, setIsOpen] = useState<filterState>(initFilterState);
  
  const DropdownButtonGenres = DropdownButtonFilter(isOpen ,setIsOpen, genres, 'Genres');
  const DropdownButtonRaiting = DropdownButtonFilter(isOpen, setIsOpen, ratingIGDB, "Raiting");
  const DropdownButtonYears = DropdownButtonFilter(isOpen, setIsOpen, years, "Years");
  const DropdownButtonPlatforms = DropdownButtonFilter(isOpen, setIsOpen, platforms, "Platforms");
  const DropdownButtonThemes = DropdownButtonFilter(isOpen, setIsOpen, themes, "Themes");

  return (
    <>
      <div className='filter-wrapper'>
        <div className="filter-wrapper__container">
          <div className="filter-wrapper__container-inner">
            <DropdownButtonGenres />
            <DropdownButtonYears />
            <DropdownButtonRaiting />
            <DropdownButtonPlatforms />
            <DropdownButtonThemes />
          </div>
          <div className="filter-wrapper__footer">
            <div className="filter-wrapper__footer-button">&#10006; reset filters</div>
            <div className="filter-wrapper__footer-button" style={{color: 'rgb(201, 255, 222)'}}>apply</div>
          </div>
        </div>
      </div>
    </>
  );
}
