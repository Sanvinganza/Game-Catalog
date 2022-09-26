import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isMobile_size } from '../../../helper/constants';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { fetchGenresRequest } from '../../../redux/actions/getGenres';
import { IState } from '../../../redux/store';
import { PageWrapper } from '../../PageWrapper/PageWrapper';
import { FilterWrapper } from './FilterWrapper/FilterWrapper';
import "./index.scss";

export function Catalog () {
  const isMobile = useMediaQuery(isMobile_size);
  const dispatch = useDispatch();
  const { genres } = useSelector((state: IState) => state.genres);

  useEffect(() => {
    dispatch(fetchGenresRequest());
  },[]);

  return (
    <>
      <video src={isMobile? "./images/video.mp4" :"./images/videobgsmall.mp4"} autoPlay loop muted/>
      <FilterWrapper />
      <PageWrapper titles={genres}/>
    </>
  );
}
