import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres } from '../../../api';
import { isMobile_size } from '../../../helper/constants';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { IGenre } from '../../../redux/actions';
import { IState } from '../../../redux/reducer';
import { Header } from '../../common/Header';
import { PageWrapper } from '../../PageWrapper/PageWrapper';
import { FilterWrapper } from './FilterWrapper/FilterWrapper';
import "./index.scss";

export function Catalog () {
  const genres = useSelector((state: IState) => state.genres)
    .map((genre: IGenre) => genre.name);

  const dispatch = useDispatch();
  const isMobile = useMediaQuery(isMobile_size);

  useEffect(() => {
    (async () => {
      dispatch(fetchGenres());
    })();
  }, []);

  return (
    <>
      <video src={isMobile? "./images/video.mp4" :"./images/videobgsmall.mp4"} autoPlay loop muted/>
      <Header />
      <FilterWrapper />
      <PageWrapper titles={genres}/>
    </>
  );
}
