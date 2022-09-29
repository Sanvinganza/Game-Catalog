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
      rating != null &
      aggregated_rating > 60 &
      rating > 60 &
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
      rating != null &
      aggregated_rating > 60 &
      rating > 60;
  `
};