import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MovieDetailView from '../components/MovieDetailView';
import type { MovieDetail as MovieDetailType } from '../types/movieDetail';

export default function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetailType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;

    async function getMovie() {
      if (!id) {
        setError('ID film mancante');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
        if (!res.ok) {
          throw new Error('Errore nella chiamata API');
        }

        const data: MovieDetailType = await res.json();
        setMovie(data);
      } catch {
        setError('Errore nel caricamento del dettaglio');
      } finally {
        setLoading(false);
      }
    }

    getMovie();
  }, [id]);

  return (
    <div>
      <Link className="back-link" to="/">
        &lt;- Torna all'elenco
      </Link>

      {loading && <p className="note">Caricamento dettaglio...</p>}
      {error && <p className="note">{error}</p>}
      {!loading && !error && movie && <MovieDetailView movie={movie} />}
    </div>
  );
}
