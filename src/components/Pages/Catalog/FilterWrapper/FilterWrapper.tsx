import { DropdownButtonGenres, DropdownButtonPlatforms, DropdownButtonRaiting, DropdownButtonThemes, DropdownButtonYears } from "./DropdownButtons";

export function FilterWrapper() {

  return (
    <>
      <div className='filter-wrapper'>
        <div className="filter-wrapper__container">
          <div className="filter-wrapper__container-inner">
            <DropdownButtonGenres />
            <DropdownButtonRaiting />
            <DropdownButtonPlatforms />
            <DropdownButtonThemes />
            <DropdownButtonYears />
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
