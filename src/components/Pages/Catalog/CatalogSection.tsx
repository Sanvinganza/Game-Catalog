import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGamesByGenreRequest } from "../../../redux/actions/getGamesByGenre";
import { IState, TState } from "../../../redux/store";
import { PageSection } from "../../CatalogWrapper/PageSection";

interface ICatalogSectionProps {
  genre: string
}
export const CatalogSection = ({genre}: ICatalogSectionProps) => {
  const dispatch = useDispatch();
  const games = useSelector((state: TState | IState) => state.gamesByGenre.gamesByGenreList[genre]);
  
  useEffect(() => {
    dispatch(fetchGamesByGenreRequest({
      genre: genre
    }));
  }, []);

  return <PageSection title={genre} games={games} />;
};