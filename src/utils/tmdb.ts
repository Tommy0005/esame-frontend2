export const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

export function getPosterUrl(posterPath: string | null): string | null {
  if (!posterPath) {
    return null;
  }
  return `${TMDB_IMAGE_BASE}${posterPath}`;
}

export function formatReleaseDate(releaseDate: string): string {
  if (!releaseDate) {
    return 'N/D';
  }
  const [year, month, day] = releaseDate.split('-');
  if (!year || !month || !day) {
    return releaseDate;
  }
  return `${day}/${month}/${year}`;
}
