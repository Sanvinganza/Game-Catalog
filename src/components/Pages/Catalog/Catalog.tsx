import { isMobile_size } from '../../../helper/constants';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { CatalogWrapper } from '../../CatalogWrapper/CatalogWrapper';
import "./index.scss";

export function Catalog () {
  const isMobile = useMediaQuery(isMobile_size);
  return (
    <>
      <video src={isMobile? "./images/video.mp4" :"./images/videobgsmall.mp4"} autoPlay loop muted/>
      <CatalogWrapper />
    </>
  );
}
