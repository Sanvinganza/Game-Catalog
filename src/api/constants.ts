export const getTopGamesConfig = {
  method: 'post',
  url: 'v4/games',
  headers: {
    'Client-ID': process.env['CLIENT-ID'] as string,
    'Authorization': process.env['AUTHORIZATION'] as string
  },
  data: `fields created_at,name,summary,
  cover.url,age_ratings.rating,rating,platforms.name,
  genres.name,involved_companies.company.name, videos;
    where cover.url != null &
      platforms != null &
      genres != null &
      involved_companies != null & 
      created_at < 1642882402 & 
      created_at > 1611347207 & 
      rating != null &
      rating > 75;
  `
};
export const getRecommendTodayGamesConfig = {
  method: 'post',
  url: 'v4/games',
  headers: {
    'Client-ID': process.env['CLIENT-ID'] as string,
    'Authorization': process.env['AUTHORIZATION'] as string
  },
  data: `fields created_at,name,summary,
  cover.url,age_ratings.rating,rating,platforms.name,
  genres.name,involved_companies.company.name, videos;
    where cover.url != null &
      platforms != null &
      genres != null &
      involved_companies != null &
      rating != null &
      aggregated_rating > 60 &
      created_at > 1632936969;
  `
};
export const getHighRatingGamesConfig = {
  method: 'post',
  url: 'v4/games',
  headers: {
    'Client-ID': process.env['CLIENT-ID'] as string,
    'Authorization': process.env['AUTHORIZATION'] as string
  },
  data: `fields created_at,name,summary,
  cover.url,age_ratings.rating,rating,platforms.name,
  genres.name,involved_companies.company.name, videos;
    where cover.url != null &
      platforms != null &
      genres != null &
      involved_companies != null &
      rating != null &
      rating > 60;
  `
};
export const getBestGamesForPCConfig = {
  method: 'post',
  url: 'v4/games',
  headers: {
    'Client-ID': process.env['CLIENT-ID'] as string,
    'Authorization': process.env['AUTHORIZATION'] as string
  },
  data: `fields created_at,name,summary,
  cover.url,age_ratings.rating,rating,platforms.name,
  genres.name,involved_companies.company.name, videos;
    where cover.url != null &
      platforms != null &
      genres != null &
      involved_companies != null &
      rating != null &
      rating > 40 & 
      platforms.name = "PC (Microsoft Windows)";
  `  
};
export const getGamesByNameConfig = (name: string) => ({
  method: 'post',
  url: '/v4/games',
  headers: {
    'Client-ID': process.env['CLIENT-ID'] as string,
    'Authorization': process.env['AUTHORIZATION'] as string
  },
  data: `fields created_at,name,summary,cover.url,age_ratings.category,age_ratings.rating,rating,platforms.name, genres.name, involved_companies.company.name;
  where cover.url != null &
  platforms != null &
  genres != null &
  involved_companies != null &
  rating != null;
  limit 20;
  search "${name}";
  `
});
export const getGamesByGenreConfig = (genre: string) => ({
  method: 'post',
  url: '/v4/games',
  headers: {
    'Client-ID': process.env['CLIENT-ID'] as string,
    'Authorization': process.env['AUTHORIZATION'] as string
  },
  data: `fields created_at,name,summary,cover.url,age_ratings.category,age_ratings.rating,rating,platforms.name, genres.name, involved_companies.company.name;
  where cover.url != null &
  platforms != null &
  genres != null &
  involved_companies != null &
  rating != null &
  genres.name = "${genre}";
  `
});