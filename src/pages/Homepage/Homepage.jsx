import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'moviesAPI';
import { Box } from 'components/Box';
import { MovieItem } from './Homepage.styled';
import { useLocation } from 'react-router-dom';

const Homepage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  const location = useLocation();

  return (
    <Box display="flex" flexDirection="column">
      {movies.map(({ id, title, name }) => (
        <MovieItem to={`movies/${id}`} state={{ from: location }} key={id}>
          {title ? title : name}
        </MovieItem>
      ))}
    </Box>
  );
};

export default Homepage;
