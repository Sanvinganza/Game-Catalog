import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTopGames } from "../../api/index";
import { IGenre as ITitle } from "../../redux/actions";
import { PageSection } from "../PageSection/PageSection";
import "./page-wrapper.scss";

interface IPageWrapper {
  titles: ITitle[]
}

export function PageWrapper ({titles}: IPageWrapper) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopGames());
  }, []);

  return (
    <div className="page-wrapper">
      {titles.map((title: ITitle) => <PageSection key={title.name} title={title.name}/>)}
    </div>
  );
}
