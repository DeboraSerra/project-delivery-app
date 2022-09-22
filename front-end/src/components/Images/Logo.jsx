import { useSelector } from 'react-redux';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export function Logo() {
  const { darkMode } = useSelector((state) => state);

  return (
    <Link
      component={RouterLink}
      to="/"
      underline="none"
    >
      {darkMode.active ? 'DarkLogo' : 'LightLogo'}
    </Link>
  );
}
