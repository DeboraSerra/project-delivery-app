import { useSelector } from 'react-redux';
import { Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import propTypes from 'prop-types';

export function Logo({ isMobile }) {
  const { darkMode } = useSelector((state) => state);
  const theme = useTheme();

  const mobileSx = {
    mr: 2,
    display: { xs: 'flex', md: 'none' },
    flexGrow: 1,
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: theme.palette.text.primary,
    textDecoration: 'none',
  };

  const desktopSx = {
    mr: 2,
    fontFamily: 'monospace',
    display: { xs: 'none', md: 'flex' },
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: theme.palette.text.primary,
    textDecoration: 'none',
  };

  return (
    <Typography
      variant={isMobile ? 'h5' : 'h6'}
      noWrap
      sx={isMobile ? mobileSx : desktopSx}
    >
      <Link
        component={RouterLink}
        to="/"
        underline="none"
      >
        {darkMode.active ? 'DarkLogo' : 'LightLogo'}
      </Link>
    </Typography>
  );
}

Logo.propTypes = {
  isMobile: propTypes.bool.isRequired,
};
