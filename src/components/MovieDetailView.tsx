import type { MovieDetail } from '../types/movieDetail';

interface MovieDetailViewProps {
  movie: MovieDetail;
}

export default function MovieDetailView({ movie }: MovieDetailViewProps) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  const releaseDate = movie.release_date
    ? movie.release_date.split('-').reverse().join('/')
    : 'N/D';

  return (
    <div className="detail">
      <div className="detail__poster">
        {posterUrl ? (
          <img src={posterUrl} alt={movie.title} />
        ) : (
          <span>Poster non disponibile</span>
        )}
      </div>

      <div>
        <h1 className="detail__title">{movie.title}</h1>
        {movie.tagline && (
          <p className="detail__tagline">"{movie.tagline}"</p>
        )}

        <ul className="detail__meta">
          <li>Uscita: {releaseDate}</li>
          <li>Durata: {movie.runtime} min</li>
          <li>Voto: {movie.vote_average.toFixed(1)}</li>
          <li>Voti: {movie.vote_count}</li>
          <li>Stato: {movie.status}</li>
          <li>Lingua: {movie.original_language.toUpperCase()}</li>
        </ul>

        {movie.genres.length > 0 && (
          <div className="detail__genres">
            {movie.genres.map((g) => (
              <span key={g.id} className="genre">
                {g.name}
              </span>
            ))}
          </div>
        )}

        <p className="detail__overview-label">Trama</p>
        <p className="detail__overview">
          {movie.overview || 'Nessuna trama disponibile.'}
        </p>

        {movie.production_companies.length > 0 && (
          <p className="card__meta">
            Produzione: {movie.production_companies.map((c) => c.name).join(', ')}
          </p>
        )}
      </div>
    </div>
  );
}
