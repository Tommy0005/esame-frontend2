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

    async function loadMovies() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Errore nella risposta API');
        }

        const data: SearchResponse = await res.json();
        setMovies(data.results.slice(0, 20));
      } catch {
        setError('Errore nel caricamento dei film');
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, []);

  return (
    <>
      <h1 className="page-title">The Lord of the Rings</h1>
      <p className="page-sub">
        Risultati fissi da API · query=The Lord of the Rings · page=1 · max 20
        items · senza filtri / paginazione
      </p>

      {loading && <p className="note">Caricamento elenco movies...</p>}
      {error && <p className="note">Errore: {error}</p>}
      {!loading && !error && <MovieGrid movies={movies} />}
    </>
  );
}
