import { useQuery } from "@tanstack/react-query";
import { fetchSearch } from "../api/omdb";

export function useMovieSearch(committedQuery: string) {
  return useQuery({
    queryKey: ["movies", committedQuery],
    queryFn: () => fetchSearch(committedQuery),
    enabled: committedQuery.length > 0,
  });
}
