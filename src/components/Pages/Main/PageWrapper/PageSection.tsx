import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Game } from '../../../common/Game';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";
import { IGame, IState } from '../../../../redux/reducer';
import '../index.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';
import { isDesktop, isLargeDesktop, isMobile } from '../../../../helper/constants';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import { fetchTopGames } from '../../../../api';

interface IPageSection {
  title: string
}

export function PageSection ({title}: IPageSection) {
  const dispatch = useDispatch();
  const topGames = useSelector((state: IState) => state.topRatingGames);
  useEffect(() => {
    (async () => {
      console.log('PageSection '+topGames);
      dispatch(fetchTopGames());
    })();
  }, []);
  
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
        slidesPerView={useMediaQuery(isLargeDesktop)?
          4.1 : useMediaQuery(isDesktop)?
            3.01:useMediaQuery(isMobile)? 
              2: 1}
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
