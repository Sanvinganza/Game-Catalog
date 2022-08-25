// import { Filter } from "./Filter";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FilterMenu } from "./FilterMenu";

// export interface IFilterListItem {
//   name: string
// }

// export function FilterList () {
//   return (
//     <>
//       <div className="filter-list">
//         <Swiper
//           spaceBetween={30}
//           pagination={{
//             clickable: true,
//           }}
//           loop={true}
//           slidesPerView={5}
//         >
//           {[{name: '2022'}, {name: '2021'}, {name: '2020'},
//             {name: 'free to play'}, {name: 'PC'}, {name: 'XBOX'},
//             {name: 'PS4'}, {name: 'shooter'}, {name: 'music'},
//             {name: 'RPG'}, {name: 'Sport'}, {name: 'Adventure'}]
//             .map((filter: IFilterListItem) => <SwiperSlide>
//               <Filter key={filter.name} filter={filter} />
//             </SwiperSlide>)}      
//         </Swiper>
//       </div>
//       <FilterMenu />
//     </>
//   );
// }