import { useSelector } from 'react-redux';
import { Game } from '../common/Game';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import './index.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';
import useMediaQuery from '../../hooks/useMediaQuery';
import { isDesktop_size, isLargeDesktop_size, isMobile_size } from '../../helper/constants';
import { IGame, IState } from '../../redux/types/types';

interface IPageSection {
  title: string
}

export function PageSection ({title}: IPageSection) {
  const isLargeDesktop = useMediaQuery(isLargeDesktop_size);
  const isMobile = useMediaQuery(isMobile_size);
  const isDesktop = useMediaQuery(isDesktop_size);
  
  const { games } = useSelector(
    (state: IState) => state.topGames
  );

  return (
    <div className="page-section" 
      style={{maxWidth: isLargeDesktop?
        '1280px' : isDesktop?
          '960px' : isMobile? 
            '560px': '300px'}}>
      <a href="" className="game-genre">{title}</a>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={isLargeDesktop?
          4 : isDesktop?
            3 : isMobile? 
              2: 1}
        loop={true}
        scrollbar={{ draggable: true }}
      >
        {games.map((gameByGenre: IGame) => 
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
