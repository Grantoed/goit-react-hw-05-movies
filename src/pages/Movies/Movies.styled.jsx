import styled from 'styled-components';

export const Searchbar = styled.input`
  min-width: 250px;
  height: 100%;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.background};
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  outline: none;
`;

export const SearchBtn = styled.button`
  display: inline-block;
  width: 75px;
  height: 100%;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.secondary};
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  cursor: pointer;
`;
