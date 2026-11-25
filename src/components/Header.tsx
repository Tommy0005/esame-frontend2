import { Link } from 'react-router-dom';
import type { HeaderProps } from '../types/movie';

export default function Header({ brandTitle = 'Movie App' }: HeaderProps) {
  return (
    <header className="header">
      <div>
        <div className="header__brand">{brandTitle}</div>
      </div>
      <nav className="header__nav">
        <Link to="/">Home / Elenco</Link>
      </nav>
    </header>
  );
}
