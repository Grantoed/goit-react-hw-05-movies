import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { SharedLayout } from './SharedLayout';
import { MovieCard } from './MovieCard/MovieCard';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Box } from './Box';
const Homepage = lazy(() => import('../pages/Homepage/Homepage'));
const Movies = lazy(() => import('../pages/Movies/Movies'));

export const App = () => {
  return (
    <Box pr="30px" pl="30px">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Homepage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieCard />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </Box>
  );
};
