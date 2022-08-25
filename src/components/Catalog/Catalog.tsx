import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres } from '../../api';
import { IState } from '../../redux/reducer';
import { Header } from '../Header/Header';
import { PageWrapper } from '../PageWrapper/PageWrapper';
import { FilterList } from '../SearchWrapper/FilterList';

export function Catalog () {
  const genres = useSelector((state: IState) => state.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  return (
    <>
      <video src="./images/video.mp4" autoPlay loop muted/>
      <Header />
      <FilterList />
      <PageWrapper titles={genres}/>
    </>
  );
}
