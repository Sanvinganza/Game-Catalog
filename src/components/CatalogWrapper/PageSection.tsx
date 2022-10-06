import { Game } from '../common/Game';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import './index.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';
import useMediaQuery from '../../hooks/useMediaQuery';
import { isDesktop_size, isLargeDesktop_size, isMobile_size } from '../../helper/constants';
import { IGame } from '../../redux/types/types';
import { Link } from 'react-router-dom';

interface IPageSection {
  title: string,
  games: IGame[]
}

export function PageSection ({title, games}: IPageSection) {
  const isLargeDesktop = useMediaQuery(isLargeDesktop_size);
  const isMobile = useMediaQuery(isMobile_size);
  const isDesktop = useMediaQuery(isDesktop_size);
  return (
    <div className="page-section" 
      style={{maxWidth: isLargeDesktop?
        '1280px' : isDesktop?
          '960px' : isMobile? 
            '560px': '300px'}}>
      <a href="" className="game-genre">{title}</a>
      <Swiper
        modules={[Navigation]}
        slidesPerView={isLargeDesktop?
          4 : isDesktop?
            3 : isMobile? 
              2: 1}
        loop={true}
        scrollbar={{ draggable: true }}
      >
        {games?.map((game: IGame) => 
          <SwiperSlide key={game.id}>
            <Link to={`/games/${game.id}`}>
              <Game 
                name={game.name} 
                rating={game.rating} 
                cover={game.cover}
                id={game.id}
              />
            </Link>
          </SwiperSlide>)}
      </Swiper>
    </div>
  );
}
