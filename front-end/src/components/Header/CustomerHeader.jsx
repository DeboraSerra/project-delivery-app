import {
  Box, Button, Link, Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { NightModeToggle } from 'components/Buttons';
import { useTheme } from '@mui/material/styles';
import { Logo } from 'components/Images';
import { Container } from 'components/Common';
import { useSelector } from 'react-redux';

export function CustomerHeader() {
  const { userInfo } = useSelector((state) => state);
  const theme = useTheme();

  return (
    <Container paddingY={{ xs: 1 / 2, sm: 1 }} maxWidth={{ md: '1100px' }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Link
          component={RouterLink}
          to="/"
          underline="none"
        >
          <Logo />
        </Link>
        <Box display="flex" alignItems="center">
          <Box marginRight="1rem">
            <NightModeToggle />
          </Box>
          <Typography variant="subtitle" sx={{ color: theme.palette.text.primary }}>
            Olá,
            {' '}
            {userInfo.name}
            {' '}
            !
          </Typography>
          <Box marginLeft="1rem">
            <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/logout"
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
