export const getTopGamesConfig = {
  method: 'post',
  url: 'v4/games',
  headers: {
    'Client-ID': '50wszq1yqs93wi1xnpvvq5can2p947',
    'Authorization': 'Bearer h6cb5x1z8thq0l8rrj1l6ezhc2xr0x'
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