import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Shell() {
  return (
    <div className="shell">
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
