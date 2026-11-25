import { Link } from 'react-router-dom';
import type { MovieCardProps } from '../types/movie';
import { formatReleaseDate, getPosterUrl } from '../utils/tmdb';

export default function MovieCard({ movie }: MovieCardProps) {
  const posterUrl = getPosterUrl(movie.poster_path);

  return (
    <article className="card">
      <div className="card__poster">
        {posterUrl ? (
          <img src={posterUrl} alt={`Poster di ${movie.title}`} />
        ) : (
          <span>Poster non disponibile</span>
        )}
      </div>
      <div className="card__body">
        <h2 className="card__title">{movie.title}</h2>
        <p className="card__meta">
          Uscita: {formatReleaseDate(movie.release_date)} · Voto:{' '}
          {movie.vote_average.toFixed(1)}
        </p>
        <p className="card__overview">
          {movie.overview || 'Nessuna descrizione disponibile.'}
        </p>
        <Link className="card__cta" to={`/movies/${movie.id}`}>
          Dettaglio
        </Link>
      </div>
    </article>
  );
}
