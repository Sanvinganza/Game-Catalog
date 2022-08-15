export const fetchInit_data = `
  query games "games with hight rating"{
    fields name,artworks.url,age_ratings,bundles.name,
      cover.url,first_release_date,rating,storyline;
    where rating >= 95;
    limit 10;
  };

  query characters "created_at" {
    fields created_at,description,url,name;
  };
`;

export const fetchGames_data = `
  fields created_at,name,summary,cover.url,total_rating;
  where cover.url != 'null' & rating_count = (1);
`;