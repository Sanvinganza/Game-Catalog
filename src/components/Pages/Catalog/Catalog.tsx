import { genres, isMobile_size } from '../../../helper/constants';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { Header } from '../../common/Header';
import { PageWrapper } from '../../PageWrapper/PageWrapper';
import { FilterWrapper } from './FilterWrapper/FilterWrapper';
import "./index.scss";

export function Catalog () {
  const isMobile = useMediaQuery(isMobile_size);

  return (
    <>
      <video src={isMobile? "./images/video.mp4" :"./images/videobgsmall.mp4"} autoPlay loop muted/>
      <Header />
      <FilterWrapper />
      <PageWrapper titles={genres}/>
    </>
  );
}
