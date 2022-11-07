import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieItem = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  border-radius: 8px;

  &:hover {
    color: ${p => p.theme.colors.primary};
  }
`;
