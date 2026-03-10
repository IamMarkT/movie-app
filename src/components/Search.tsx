import { useState } from "react";
import "./Search.css";

function Search() {
  const [query, setQuery] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wire to OMDB search when ready
  }

  return (
    <div className="search">
      <form className="searchForm" onSubmit={handleSubmit} role="search">
        <input
          className="searchInput"
          type="search"
          name="q"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
          aria-label="Search movies"
        />
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
