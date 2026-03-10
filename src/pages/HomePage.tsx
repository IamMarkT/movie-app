import { useQuery } from "@tanstack/react-query";
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";

const omdbApiKey = import.meta.env.VITE_OMDB_API_KEY;

function HomePage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["movies"],
    queryFn: () =>
      fetch(`https://www.omdbapi.com/?apikey=${omdbApiKey}&s=batman`).then(
        (res) => res.json()
      ),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main>
      <Search />
      <h1>Welcome</h1>
      <MovieCard movie={data.Search[0]} />
    </main>
  );
}

export default HomePage;
