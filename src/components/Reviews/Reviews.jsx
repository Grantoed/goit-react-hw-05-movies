import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Nickname, ReviewText } from './Reviews.styled';
import { getReviews } from 'moviesAPI';
import { Box } from 'components/Box';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(r => setReviews(r));
  }, [movieId]);

  return (
    <Box pt="30px" pb="30px">
      {reviews?.length === 0 && (
        <ReviewText>There are no reviews for this movie yet</ReviewText>
      )}
      {reviews &&
        reviews.map(({ author, content, id }) => {
          return (
            <Box key={id}>
              <Nickname>{author}</Nickname>
              <ReviewText>{content}</ReviewText>
            </Box>
          );
        })}
    </Box>
  );
};
