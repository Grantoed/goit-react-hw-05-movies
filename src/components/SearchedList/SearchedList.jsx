import { Box } from 'components/Box';
import { useLocation } from 'react-router-dom';
import { MovieItem } from './SearchedList.styled';

export const SearchedList = ({ movies }) => {
  const location = useLocation();
  return (
    <Box display="flex" flexDirection="column" pt="15px" pb="15px">
      {movies.map(({ id, title, name }) => (
        <MovieItem to={`${id}`} state={{ from: location }} key={id}>
          {title ? title : name}
        </MovieItem>
      ))}
    </Box>
  );
};
