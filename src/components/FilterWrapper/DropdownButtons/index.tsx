import { platforms, ratingIGDB, themes, years } from "../../../helper/constants";
import { DropdownButtonFilter } from "./DropdownButtonFilter";

export const DropdownButtonRaiting = DropdownButtonFilter(ratingIGDB, "Raiting");
export const DropdownButtonYears = DropdownButtonFilter(years, "Years");
export const DropdownButtonPlatforms = DropdownButtonFilter(platforms, "Platforms");
export const DropdownButtonThemes = DropdownButtonFilter(themes, "Themes");