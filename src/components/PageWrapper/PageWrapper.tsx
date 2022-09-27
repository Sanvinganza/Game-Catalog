import { PageSection } from "./PageSection";
import "./index.scss";
import { useSelector } from "react-redux";
import { IState } from "../../redux/store";

interface ITitle {
  id: number,
  name: string
}

interface IPageWrapper {
  titles: ITitle[]
}

export function PageWrapper ({titles}: IPageWrapper) {
  const { games } = useSelector(
    (state: IState) => state.topGames
  );

  return (
    <div className="page-wrapper">
      {titles?.map((title: ITitle) => <PageSection games={games} key={title.id} title={title.name}/>)}
    </div>
  );
}
