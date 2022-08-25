import { Header } from '../Header/Header';
import { FilterList } from './FilterList';
import { FilterMenu } from './FilterMenu';
import './index.scss';
import "react-widgets/scss/styles.scss";

export function SearchWrapper () {
  return (
    <>
      <Header />
      <div className='filter-wrapper'>
        <div className="input-container">
          <input type="search" id="search" placeholder="Search..."></input>
        </div>
        <FilterMenu />
        <FilterList />
      </div>
    </>
  );
}
