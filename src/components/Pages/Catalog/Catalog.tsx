import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres } from '../../../api';
import { IGenre } from '../../../redux/actions';
import { IState } from '../../../redux/reducer';
import { Header } from '../../common/Header';
import { PageWrapper } from '../../PageWrapper/PageWrapper';

export function Catalog () {
  const genres = useSelector((state: IState) => state.genres)
    .map((genre: IGenre) => genre.name);

  const dispatch = useDispatch();
  
  useEffect(() => {
    (async () => {
      dispatch(fetchGenres());
    })();
  }, []);

  return (
    <>
      <video src="./images/video.mp4" autoPlay loop muted/>
      <Header />
      <PageWrapper titles={genres}/>
    </>
  );
}
