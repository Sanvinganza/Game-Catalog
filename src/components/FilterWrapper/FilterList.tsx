import { Filter } from "./Filter";

export interface IFilterListItem {
  name: string,
  id: number
}

export function FilterList () {
  return (
    <div>
      {[{id: 1, name: 'filter1'}, {id: 2, name: 'filter2'}, {id: 3, name: 'filter3'}]
        .map((filter: IFilterListItem) => <Filter key={filter.id} filter={filter} />)}      
    </div>
  );
}