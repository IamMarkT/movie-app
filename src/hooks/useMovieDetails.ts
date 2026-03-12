import { useQuery } from "@tanstack/react-query";
import { fetchById } from "../api/omdb";

export function useMovieDetails(imdbId: string | undefined) {
  return useQuery({
    queryKey: ["movie", imdbId],
    queryFn: () => fetchById(imdbId!),
    enabled: Boolean(imdbId),
  });
}
