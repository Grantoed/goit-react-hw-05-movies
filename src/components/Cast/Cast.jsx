import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ActorName, ActorImg, Character } from './Cast.styled';
import { getCastInfo } from 'moviesAPI';
import { Box } from 'components/Box';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getCastInfo(movieId).then(castInfo => setCast(castInfo));
  }, [movieId]);

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(5, 1fr)"
      gridTemplateRows="repeat(4, 1fr)"
      gridColumnGap="10px"
      gridRowGap="10px"
    >
      {cast &&
        cast.map(({ id, name, character, profile_path }) => {
          return (
            <Box key={id}>
              <ActorImg
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : `https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png`
                }
              />
              <ActorName>{name}</ActorName>
              <Character>{character}</Character>
            </Box>
          );
        })}
    </Box>
  );
};
