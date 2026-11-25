import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shell from './components/Shell';
import MovieDetail from './pages/MovieDetail';
import MovieList from './pages/MovieList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Shell />,
    children: [
      { index: true, element: <MovieList /> },
      { path: 'movies/:id', element: <MovieDetail /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
