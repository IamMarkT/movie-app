const omdbApiKey = import.meta.env.VITE_OMDB_API_KEY;

export type OmdbDetailResponse = {
  Response: string;
  Error?: string;
  Title?: string;
  Year?: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Actors?: string;
  Plot?: string;
  Poster?: string;
  imdbRating?: string;
};

export function fetchSearch(query: string) {
  const params = new URLSearchParams({ apikey: omdbApiKey, s: query });
  return fetch(`https://www.omdbapi.com/?${params}`).then((res) => res.json());
}

export function fetchById(imdbId: string) {
  const params = new URLSearchParams({
    apikey: omdbApiKey,
    i: imdbId,
    plot: "full",
  });
  return fetch(`https://www.omdbapi.com/?${params}`).then((res) =>
    res.json()
  ) as Promise<OmdbDetailResponse>;
}
