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

export function GameSection () {
  const urls = useSelector((state: IState) => state.urls);
  const dispatch = useDispatch();

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
      slidesPerView={3.01}
      watchSlidesProgress={true}
      loop={true}
      scrollbar={{ draggable: true }}
    >
      {urls.map((url: IUrl) => <SwiperSlide key={url.id}>
        <Game imageUrl={url.url}/>
      </SwiperSlide>)}
    </Swiper>
  );
}
