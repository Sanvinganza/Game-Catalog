import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SwiperSlide, Swiper } from 'swiper/react';
import { fetchGameCarousel } from '../../api/fetchGameCarousel';
import { IGame, IState } from '../../redux/reducer';
import { Slide } from './Slide';
import 'swiper/scss/pagination';
import { Pagination } from "swiper";

export function Carousel () {
  const gamesCarousel = useSelector((state: IState) => state.gamesCarousel);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(fetchGameCarousel());
    })();
  }, []);
  
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      watchSlidesProgress={true}
      loop={true}
      scrollbar={{ draggable: true }}
    >
      {gamesCarousel?.map((slide: IGame) => 
        <SwiperSlide>
          <Slide name={slide.name} total_rating={slide.total_rating} cover={slide.cover}/>
        </SwiperSlide>)}
    </Swiper>
  );
}
