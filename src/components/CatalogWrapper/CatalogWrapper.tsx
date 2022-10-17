import "./index.scss";
import { useSelector } from "react-redux";
import { IState } from "../../redux/store";
import { IGenre } from "../../redux/types/types";
import { CatalogSection } from "../Pages/Catalog/CatalogSection";

export function CatalogWrapper () {
  const { genres } = useSelector((state: IState) => state.genres);
  
  return (
    <div className="page-wrapper">
      {(genres as IGenre[])?.map((genre: IGenre) => {
        return <CatalogSection key={genre.id} genre={genre.name} />;
      })}
    </div>
  );
}
