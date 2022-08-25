export interface IFilter {
  filter: {
    name: string
  }
}

export function Filter ({filter}: IFilter) {
  return (
    <div className="filter-button">
      {filter.name}
    </div>
  );
}
