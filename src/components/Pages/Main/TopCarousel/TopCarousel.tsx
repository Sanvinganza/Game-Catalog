import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from "swiper";
import '../index.scss';
import 'swiper/scss/pagination';
import { TopCarouselSlide } from './TopCarouselSlide';
import { useSelector } from 'react-redux';
import { IGame } from '../../../../redux/types/types';
import { IState } from '../../../../redux/store';
import { Link } from 'react-router-dom';

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
        scrollbar={{ draggable: true }}
        effect={"fade"}
        slidesPerView={1}
        centeredSlides={true}
        draggable={true}
        navigation={true}
        modules={[Navigation]}
        className="swiper-carousel"
      >
        {(games as IGame[]).map((slide: IGame) => 
          <SwiperSlide style={{width: 'fit-content'}} key={slide.id} >
            <Link to={`/games/${slide.id}`}>
              <TopCarouselSlide cover={slide.cover}/>
            </Link>
          </SwiperSlide>)}
      </Swiper>
    </div>
  );
}
