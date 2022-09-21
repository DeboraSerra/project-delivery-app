import { Box, AppBar, Divider, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { NightModeToggle } from 'components/Buttons';
import { Logo } from 'components/Images';
import { Container } from 'components/Common';
import { LoginModal } from 'components/Modals';

export function Header() {
  const theme = useTheme();
  return (
    <Box height="100%" overflow="hidden" width="100%">
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.background.topbar,
        }}
        elevation={0}
      >
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
              <LoginModal />
            </Box>
          </Box>
        </Container>
        <Divider />
      </AppBar>
    </Box>
  );
}
