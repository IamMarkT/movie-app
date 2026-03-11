import { Link } from "react-router-dom";
import "./MovieCard.css";

export type OmdbSearchItem = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
};

type MovieCardProps = {
  movie: OmdbSearchItem;
};

function MovieCard({ movie }: MovieCardProps) {
  const hasPoster = movie.Poster && movie.Poster !== "N/A";

  return (
    <Link
      to={`/movie/${movie.imdbID}`}
      className="movieCardLink"
      aria-label={`View details for ${movie.Title}`}
    >
      <article className="movieCard">
        {hasPoster ? (
          <img
            className="movieCardPoster"
            src={movie.Poster}
            alt=""
            loading="lazy"
          />
        ) : (
          <div className="movieCardPoster" aria-hidden />
        )}
        <div className="movieCardBody">
          <h2 className="movieCardTitle">{movie.Title}</h2>
          <p className="movieCardMeta">
            {movie.Year} · {movie.Type}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default MovieCard;
