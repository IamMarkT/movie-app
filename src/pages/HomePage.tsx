import { useState } from "react";
import Search from "../components/Search";
import MovieCard, { type OmdbSearchItem } from "../components/MovieCard";
import { useMovieSearch } from "../hooks/useMovieSearch";
import "./HomePage.css";

function HomePage() {
  const [inputQuery, setInputQuery] = useState("batman");
  const [committedQuery, setCommittedQuery] = useState("batman");

  const { data, isLoading, error, isFetching } = useMovieSearch(committedQuery);

  if (isLoading && !data) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const hasResults = data?.Search && data.Search.length > 0;
  const omdbError = data?.Response === "False" && data?.Error;

  return (
    <main>
      <Search
        value={inputQuery}
        onChange={setInputQuery}
        onSearch={setCommittedQuery}
      />
      <h1>Welcome</h1>
      {isFetching && <p>Searching…</p>}
      {committedQuery.length === 0 && <p>Enter a title and press Search.</p>}
      {omdbError && <p>{data.Error}</p>}
      {hasResults && (
        <ul className="movieList">
          {data.Search.map((movie: OmdbSearchItem) => (
            <li key={movie.imdbID} className="movieListItem">
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      )}
      {!hasResults &&
        !omdbError &&
        committedQuery.length > 0 &&
        !isFetching && <p>No results.</p>}
    </main>
  );
}

export default HomePage;
