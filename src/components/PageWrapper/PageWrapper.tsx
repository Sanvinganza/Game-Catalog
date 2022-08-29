import { PageSection } from "./PageSection";
import "./index.scss";

interface ITitle {
  id: number,
  name: string
}

interface IPageWrapper {
  titles: ITitle[]
}

export function PageWrapper ({titles}: IPageWrapper) {
  return (
    <div className="page-wrapper">
      {titles?.map((title: ITitle) => <PageSection key={title.id} title={title.name}/>)}
    </div>
  );
}
