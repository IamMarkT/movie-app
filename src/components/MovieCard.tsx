import "./MovieCard.css";

type OmdbSearchItem = {
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
  );
}

export default MovieCard;
