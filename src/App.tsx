import { Navigate, Route, Routes } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Details from './pages/detail';
import MoviesPage from './pages/movies';
import ShowPage from './pages/shows';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<MoviesPage />} />
        <Route path="movies" element={<Navigate to="/" />} />
        <Route path="shows" element={<ShowPage />} />
        <Route path="movies/:id" element={<Details />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
