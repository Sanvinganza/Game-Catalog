import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SwiperSlide, Swiper } from 'swiper/react';
import { fetchGameCarousel } from '../../api/fetchGameCarousel';
import { IGame, IState } from '../../redux/reducer';
import { Slide } from './Slide';
import { Navigation } from "swiper";
import './carousel.scss';
import 'swiper/scss/pagination';

export function Carousel () {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      console.log('gamesCarousel = ' +gamesCarousel);
      dispatch(fetchGameCarousel());
    })();
  }, []);

  const gamesCarousel = useSelector((state: IState) => state.gamesCarousel);
  
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
        {gamesCarousel?.map((slide: IGame) => 
          <SwiperSlide key={slide.id}>
            <Slide cover={slide.cover}/>
          </SwiperSlide>)}
      </Swiper>
    </div>
  );
}