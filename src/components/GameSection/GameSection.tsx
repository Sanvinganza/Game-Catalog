import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../../middlewares/fetchGames';
import { IUrl } from '../../redux/actions';
import { IState } from '../../redux/reducer';
import { Game } from './Game/Game';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import './game-section.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';
import useMediaQuery from '../../hooks/useMediaQuery';

export function GameSection () {
  const urls = useSelector((state: IState) => state.urls);
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const isMobile = useMediaQuery('(min-width: 560px)');
  const isLargeDesktop = useMediaQuery('(min-width: 1280px)');

  useEffect(() => {
    (async () => {
      console.log('useEffect');
      dispatch(fetchGames());
    })();
  }, []);
  
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={isLargeDesktop?4.1:isDesktop?3.01:isMobile? 2: 1}
      watchSlidesProgress={true}
      loop={true}
      scrollbar={{ draggable: true }}
    >
      {urls.map((url: IUrl) => 
        <SwiperSlide key={url.id}>
          <Game imageUrl={url.url}/>
        </SwiperSlide>)}
    </Swiper>
  );
}
