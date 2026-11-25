import { useEffect, useState } from 'react';
import MovieGrid from '../components/MovieGrid';
import type { Movie, SearchResponse } from '../types/movie';

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/search/movie?query=The%20Lord%20of%20the%20Rings&include_adult=false&language=en-US&page=1&api_key=${apiKey}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Errore nella chiamata API');
        }
        return res.json();
      })
      .then((data: SearchResponse) => {
        setMovies(data.results.slice(0, 20));
        setLoading(false);
      })
      .catch(() => {
        setError('Errore nel caricamento dei film');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="page-title">The Lord of the Rings</h1>
      <p className="page-sub">
        Risultati da TMDB (query fissa, pagina 1, max 20 film)
      </p>

      {loading && <p className="note">Caricamento in corso...</p>}
      {error && <p className="note">{error}</p>}
      {!loading && !error && <MovieGrid movies={movies} />}
    </div>
  );
}
