import { platforms, ratingIGDB, themes, years } from "../../../../../helper/constants";
import { DropdownButtonFilter, IDropdownButtonFilterItem } from "./DropdownButtonFilter";

interface IDropdownButtonGenres {
  genres: IDropdownButtonFilterItem[]
}

export const DropdownButtonGenres = ({genres}: IDropdownButtonGenres) => {
  return <>{DropdownButtonFilter(genres, "Genres")}</>;
};
export const DropdownButtonRaiting = DropdownButtonFilter(ratingIGDB, "Raiting");
export const DropdownButtonYears = DropdownButtonFilter(years, "Years");
export const DropdownButtonPlatforms = DropdownButtonFilter(platforms, "Platforms");
export const DropdownButtonThemes = DropdownButtonFilter(themes, "Themes");