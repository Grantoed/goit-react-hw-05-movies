import { NavItem } from './AppBar.styled';
import { Box } from 'components/Box';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <Box as="header" pt="15px" pb="15px">
      <Box as="nav" display="flex">
        {navItems.map(({ href, text }) => (
          <NavItem key={href} to={href}>
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};
