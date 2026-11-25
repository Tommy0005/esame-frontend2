import type { MovieDetail } from './movieDetail';

export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
};

export type SearchResponse = {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
};

export type HeaderProps = {
  brandTitle?: string;
};

export type MovieCardProps = {
  movie: Movie;
};

export type MovieGridProps = {
  movies: Movie[];
};

export type MovieDetailViewProps = {
  movie: MovieDetail;
};
