import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from "swiper";
import '../index.scss';
import 'swiper/scss/pagination';
import { TopCarouselSlide } from './TopCarouselSlide';
import { useSelector } from 'react-redux';
import { IGame, IState } from '../../../../redux/types/types';

export function Carousel () {
  const { games } = useSelector((state: IState) => state.topGames);

  return (
    <div className="carousel">
      <div className="carousel-header">
        Top Games Today
      </div>
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        effect={"fade"}
        slidesPerView={1}
        centeredSlides={true}
        draggable={true}
        navigation={true}
        modules={[Navigation]}
        className="swiper-carousel"
      >
        {games?.map((slide: IGame) => 
          <SwiperSlide key={slide.id}>
            <TopCarouselSlide cover={slide.cover}/>
          </SwiperSlide>)}
      </Swiper>
    </div>
  );
}
