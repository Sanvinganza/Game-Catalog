export const fetchGames_data = `
  fields created_at,name,summary,cover.url,total_rating;
  where cover.url != 'null' & rating_count = (1);
`;

export const fetchGamesByGenre_data = (genre: string) => `
  fields created_at,name,summary,cover.url,total_rating,age_ratings;
  where cover.url != 'null' & rating_count = (1) & genres.name = "${genre}";
`;

export const fetchTopGames_data = `
  fields created_at,name,summary,cover.url,total_rating,age_ratings;
  where rating > 99 & created_at > 1542336928;
`;
