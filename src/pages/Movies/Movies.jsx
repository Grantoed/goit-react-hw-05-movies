import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'moviesAPI';
import { SearchedList } from 'components/SearchedList/SearchedList';
import { Box } from 'components/Box';
import { Searchbar, SearchBtn } from './Movies.styled';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (movieName) {
      searchMovies(movieName).then(setSearchedMovies);
    }
  }, [movieName]);
  // const onInputChange = ({ target: { value } }) => {
  //   const nextParams = value !== '' ? { query: value } : {};
  //   setSearchParams(nextParams);
  // searchMovies(movieName).then(setSearchedMovies);
  // };

  const onSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.elements.movieName.value;
    const nextParams = inputValue !== '' ? { query: inputValue } : {};
    setSearchParams(nextParams);
    searchMovies(inputValue).then(setSearchedMovies);
  };

  return (
    <>
      <Box
        as="form"
        display="flex"
        flexDirection="row-reverse"
        justifyContent="flex-end"
        alignItems="center"
        height="30px"
        onSubmit={onSubmit}
      >
        <Searchbar name="movieName" />
        <SearchBtn>Search</SearchBtn>
      </Box>
      {<SearchedList movies={searchedMovies} />}
    </>
  );
};

export default Movies;
