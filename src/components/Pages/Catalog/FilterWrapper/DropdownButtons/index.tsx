import { genres, platforms, ratingIGDB, themes, years } from "../../../../../helper/constants";
import { DropdownButtonFilter } from "./DropdownButtonFilter";

export const DropdownButton_Genres = DropdownButtonFilter(genres, "Genres");
export const DropdownButton_Raiting = DropdownButtonFilter(ratingIGDB, "Raiting");
export const DropdownButton_Years = DropdownButtonFilter(years, "Years");
export const DropdownButton_Platforms = DropdownButtonFilter(platforms, "Platforms");
export const DropdownButton_Themes = DropdownButtonFilter(themes, "Themes");