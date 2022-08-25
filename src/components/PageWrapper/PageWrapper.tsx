import { PageSection } from "./PageSection";
import "./index.scss";

interface IPageWrapper {
  titles: string[]
}

export function PageWrapper ({titles}: IPageWrapper) {
  return (
    <div className="page-wrapper">
      {titles.map((title: string) => <PageSection key={title} title={title}/>)}
    </div>
  );
}
