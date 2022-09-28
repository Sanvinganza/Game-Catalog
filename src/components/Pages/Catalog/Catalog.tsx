import { useSelector } from 'react-redux';
import { isMobile_size } from '../../../helper/constants';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { IState } from '../../../redux/store';
import { PageWrapper } from '../../PageWrapper/PageWrapper';
import "./index.scss";

export function Catalog () {
  const isMobile = useMediaQuery(isMobile_size);
  const { genres } = useSelector((state: IState) => state.genres);

  return (
    <>
      <video src={isMobile? "./images/video.mp4" :"./images/videobgsmall.mp4"} autoPlay loop muted/>
      <PageWrapper titles={genres}/>
    </>
  );
}
