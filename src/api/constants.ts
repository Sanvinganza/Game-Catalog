export const getTopGamesConfig = {
  method: 'post',
  url: 'v4/games',
  headers: {
    'Client-ID': process.env['CLIENT-ID'] as string,
    'Authorization': process.env['AUTHORIZATION'] as string
  },
  data: `fields name,cover.url;
    where cover.url != null & 
    created_at < 1642882402 & 
    created_at > 1611347207 & 
    rating != null &
    rating > 75 &
    platforms.name = "PC (Microsoft Windows)";
  `,
};
export const getRecommendTodayGamesConfig = {
  method: 'post',
  url: 'v4/games',
  headers: {
    'Client-ID': process.env['CLIENT-ID'] as string,
    'Authorization': process.env['AUTHORIZATION'] as string
  },
  data: `fields name,cover.url;
    where cover.url != null & 
    created_at < 1642882402 & 
    created_at > 1611347207 & 
    rating != null &
    rating > 75 &
    platforms.name = "PC (Microsoft Windows)";
  `,
}