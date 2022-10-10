import { useEffect, useState } from "react";
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

interface IFilterWrapper {
  visible: boolean
}
export function FilterWrapper({visible}: IFilterWrapper) {
  const { genres } = useSelector((state: IState | TState) => state.genres);
  const [isOpen, setIsOpen] = useState<filterState>(initFilterState);

  useEffect(() => {
    if(!visible){
      setIsOpen(initFilterState);
    }
    console.log('visible',visible);
  }, [visible]);

  return <div className='filter-wrapper'>
    <div className="filter-wrapper__container">
      <div className="filter-wrapper__container-inner">
        <DropdownButtonFilter visible={visible} isOpen={isOpen} setIsOpen={setIsOpen} items={genres} name={"Genres"} />
        <DropdownButtonFilter visible={visible} isOpen={isOpen} setIsOpen={setIsOpen} items={ratingIGDB} name={"Raiting"} />
        <DropdownButtonFilter visible={visible} isOpen={isOpen} setIsOpen={setIsOpen} items={years} name={"Years"} />
        <DropdownButtonFilter visible={visible} isOpen={isOpen} setIsOpen={setIsOpen} items={platforms} name={"Platforms"} />
        <DropdownButtonFilter visible={visible} isOpen={isOpen} setIsOpen={setIsOpen} items={themes} name={"Themes"} />
      </div>
      <div className="filter-wrapper__footer">
        <div className="filter-wrapper__footer-button">&#10006; reset filters</div>
        <div className="filter-wrapper__footer-button" style={{color: 'rgb(201, 255, 222)'}}>apply</div>
      </div>
    </div>
  </div>;

}
