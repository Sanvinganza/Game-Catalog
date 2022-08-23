import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres, fetchTopGames } from "../../api/index";
import { IGenre } from "../../redux/actions";
import { IState } from "../../redux/reducer";
import { PageSection } from "../PageSection/PageSection";
import "./page-wrapper.scss";

export function PageWrapper () {
  const genres = useSelector((state: IState) => state.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(fetchGenres());
      dispatch(fetchTopGames());
    })();
  }, []);

  return (
    <div className="page-wrapper">
      {genres.map((genre: IGenre) => <PageSection key={genre.id} genre={genre}/>)}
    </div>
  );
}
