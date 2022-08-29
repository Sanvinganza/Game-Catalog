import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Game } from '../common/Game';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import { IGame, IState } from '../../redux/reducer';
import './index.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';
import useMediaQuery from '../../hooks/useMediaQuery';
import { fetchTopGames } from '../../api';
import { isDesktop_size, isLargeDesktop_size, isMobile_size } from '../../helper/constants';

interface IPageSection {
  title: string
}

export function PageSection ({title}: IPageSection) {
  const dispatch = useDispatch();
  const topGames = useSelector((state: IState) => state.topRatingGames);
  const isLargeDesktop = useMediaQuery(isLargeDesktop_size);
  const isMobile = useMediaQuery(isMobile_size);
  const isDesktop = useMediaQuery(isDesktop_size);

  useEffect(() => {
    (async () => {
      dispatch(fetchTopGames());
    })();
  }, []);
    
  return (
    <div className="page-section">
      <a href="" className="game-genre">{title}</a>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={isLargeDesktop?
          4.1 : isDesktop?
            3.01 : isMobile? 
              2: 1}
        loop={true}
        scrollbar={{ draggable: true }}
      >
        {topGames?.map((gameByGenre: IGame) => 
          <SwiperSlide key={gameByGenre.id}>
            <Game 
              name={gameByGenre.name} 
              total_rating={gameByGenre.total_rating} 
              cover={gameByGenre.cover}
            />
          </SwiperSlide>)}
      </Swiper>
    </div>
  );
}
