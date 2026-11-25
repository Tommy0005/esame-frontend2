import { Link } from 'react-router-dom';
import type { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  const dataUscita = movie.release_date
    ? movie.release_date.split('-').reverse().join('/')
    : 'N/D';

  return (
    <div className="card">
      <div className="card__poster">
        {poster ? (
          <img src={poster} alt={movie.title} />
        ) : (
          <span>Poster non disponibile</span>
        )}
      </div>

      <div className="card__body">
        <h2 className="card__title">{movie.title}</h2>
        <p className="card__meta">
          Uscita: {dataUscita} | Voto: {movie.vote_average.toFixed(1)}
        </p>
        <p className="card__overview">
          {movie.overview || 'Nessuna descrizione disponibile.'}
        </p>
        <Link className="card__cta" to={`/movies/${movie.id}`}>
          Dettaglio
        </Link>
      </div>
    </div>
  );
}
