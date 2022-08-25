import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Game } from '../Game/Game';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import useMediaQuery from '../../hooks/useMediaQuery';
import { IGame, IState } from '../../redux/reducer';
import './page-section.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';

interface IPageSection {
  title: string
}

export function PageSection ({title}: IPageSection) {
  // const dispatch = useDispatch();

  const isDesktop = useMediaQuery('(min-width: 960px)');
  const isMobile = useMediaQuery('(min-width: 560px)');
  const isLargeDesktop = useMediaQuery('(min-width: 1280px)');
  
  useEffect(() => {
    (async () => {
      console.log('PageSection '+topGames);
      // dispatch(fetchGamesByGenre(genre.name));
    })();
  }, []);
  
  const topGames = useSelector((state: IState) => state.topRatingGames);
  // const gamesByGenre = useSelector((state: IState) => state.gamesByGenre);
  // console.log('gamesByGenre1 = ' + gamesByGenre);
  // console.log('gamesByGenre = ' +gamesByGenre.filter((obj: IGameByGenre) => {
  //   if(Object.keys(obj).includes(genre.name)) return obj;
  //   return null;
  // }));

  
  return (
    <div className="page-section">
      <a href="" className="game-genre">{title}</a>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={isLargeDesktop?4.1:isDesktop?3.01:isMobile? 2: 1}
        watchSlidesProgress={true}
        loop={true}
        scrollbar={{ draggable: true }}
      >
        {topGames?.map((gameByGenre: IGame) => 
          <SwiperSlide key={gameByGenre.id}>
            <Game name={gameByGenre.name} total_rating={gameByGenre.total_rating} cover={gameByGenre.cover}/>
          </SwiperSlide>)}
      </Swiper>
    </div>
  );
}
