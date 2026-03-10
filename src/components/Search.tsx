import "./Search.css";

type SearchProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch: (trimmedQuery: string) => void;
};

function Search({ value, onChange, onSearch }: SearchProps) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSearch(value.trim());
  }

  return (
    <div className="search">
      <form className="searchForm" onSubmit={handleSubmit} role="search">
        <input
          className="searchInput"
          type="search"
          name="q"
          placeholder="Search movies..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
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
