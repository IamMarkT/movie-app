import { Link, useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import "./MovieDetailsPage.css";

function MovieDetailsPage() {
  const { imdbId } = useParams<{ imdbId: string }>();
  const { data, isLoading, error } = useMovieDetails(imdbId);

  if (!imdbId) {
    return (
      <main className="movieDetails">
        <p>Missing movie id.</p>
        <Link to="/">Back to search</Link>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="movieDetails">
        <p>Loading…</p>
      </main>
    );
  }

  if (error || !data || data.Response === "False") {
    return (
      <main className="movieDetails">
        <p>{data?.Error ?? error?.message ?? "Could not load movie."}</p>
        <Link to="/">Back to search</Link>
      </main>
    );
  }

  const detail = data;
  const hasPoster = detail.Poster && detail.Poster !== "N/A";

  return (
    <main className="movieDetails">
      <Link to="/" className="movieDetailsBack">
        ← Back to search
      </Link>
      <div className="movieDetailsLayout">
        {hasPoster ? (
          <img className="movieDetailsPoster" src={detail.Poster} alt="" />
        ) : (
          <div className="movieDetailsPoster movieDetailsPosterPlaceholder" />
        )}
        <div className="movieDetailsContent">
          <h1 className="movieDetailsTitle">{detail.Title}</h1>
          <p className="movieDetailsMeta">
            {detail.Year}
            {detail.Rated && detail.Rated !== "N/A" && ` · ${detail.Rated}`}
            {detail.Runtime &&
              detail.Runtime !== "N/A" &&
              ` · ${detail.Runtime}`}
            {detail.imdbRating && ` · IMDb ${detail.imdbRating}`}
          </p>
          {detail.Genre && detail.Genre !== "N/A" && (
            <p className="movieDetailsGenre">{detail.Genre}</p>
          )}
          {detail.Plot && detail.Plot !== "N/A" && (
            <p className="movieDetailsPlot">{detail.Plot}</p>
          )}
          {detail.Director && detail.Director !== "N/A" && (
            <p>
              <strong>Director:</strong> {detail.Director}
            </p>
          )}
          {detail.Actors && detail.Actors !== "N/A" && (
            <p>
              <strong>Cast:</strong> {detail.Actors}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

export default MovieDetailsPage;
