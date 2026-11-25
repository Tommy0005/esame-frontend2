import type { MovieDetailViewProps } from '../types/movie';
import { formatReleaseDate, getPosterUrl } from '../utils/tmdb';

export default function MovieDetailView({ movie }: MovieDetailViewProps) {
  const posterUrl = getPosterUrl(movie.poster_path);

  return (
    <article className="detail">
      <div>
        <div className="detail__poster">
          {posterUrl ? (
            <img src={posterUrl} alt={`Poster di ${movie.title}`} />
          ) : (
            <span>Poster non disponibile</span>
          )}
        </div>
      </div>

      <div>
        <h1 className="detail__title">{movie.title}</h1>
        {movie.tagline && <p className="detail__tagline">“{movie.tagline}”</p>}

        <ul className="detail__meta">
          <li>Uscita: {formatReleaseDate(movie.release_date)}</li>
          <li>Durata: {movie.runtime} min</li>
          <li>Voto: {movie.vote_average.toFixed(1)}</li>
          <li>Voti: {movie.vote_count.toLocaleString('it-IT')}</li>
          <li>Stato: {movie.status}</li>
          <li>Lingua: {movie.original_language.toUpperCase()}</li>
        </ul>

        {movie.genres.length > 0 && (
          <div className="detail__genres">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="genre">
                {genre.name}
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
            Produzione:{' '}
            {movie.production_companies.map((c) => c.name).join(' · ')}
          </p>
        )}
      </div>
    </article>
  );
}
