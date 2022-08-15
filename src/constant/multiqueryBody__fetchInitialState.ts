export const multiqueryBody__fetchInitialState = 
`query games "games with hight rating"{
  fields name,artworks.url,age_ratings,bundles.name,
        cover.url,first_release_date,rating,storyline;
  where rating >= 95;
  limit 10;
};

query characters "created_at" {
  fields created_at,description,url,name;
};`;