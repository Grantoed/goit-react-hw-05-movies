import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'moviesAPI';
import { Box } from 'components/Box';
import { NavItem } from 'components/AppBar/AppBar.styled';
import { GoBack, Poster, Title, SectionHeader, Text } from './MovieCard.styled';

export const MovieCard = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieDetails(movieId).then(r => setMovie(r.data));
  }, [movieId]);
  const location = useLocation();

  console.log(location);

  return (
    <Box>
      <GoBack to={location.state?.from ?? '/'}>Go back</GoBack>
      <Box display="flex" pt="30px" borderBottom="1px solid black">
        <Poster
          src={movie && `https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        <Box display="flex" flexDirection="column" pl="30px">
          <Title>{movie && movie.title}</Title>
          <Text>
            User Score: {movie && Number(movie.vote_average).toFixed(1)}
          </Text>
          <SectionHeader>Overview</SectionHeader>
          <Text>{movie && movie.overview}</Text>
          <SectionHeader>Genres</SectionHeader>
          <Text>
            {movie && movie.genres.map(genreObj => genreObj.name).join(' ')}
          </Text>
        </Box>
      </Box>
      <Box pt="30px" pb="30px" borderBottom="1px solid black">
        <NavItem to="cast" state={{ from: location.state?.from }}>
          Cast
        </NavItem>
        <NavItem to="reviews" state={{ from: location.state?.from }}>
          Reviews
        </NavItem>
      </Box>
      <Outlet />
    </Box>
  );
};
