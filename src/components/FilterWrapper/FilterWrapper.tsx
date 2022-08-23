import { Header } from '../Header/Header';
import { FilterList } from './FilterList';
import { FilterMenu } from './FilterMenu';

export function FilterWrapper () {
  return (
    <>
      <Header />
      <div className='filter-wrapper'>
        <FilterMenu />
        <FilterList />
      </div>
    </>
  );
}
