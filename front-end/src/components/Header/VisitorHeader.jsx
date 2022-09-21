import { Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { NightModeToggle } from 'components/Buttons';
import { Logo } from 'components/Images';
import { Container } from 'components/Common';
import { LoginModal } from 'components/Modals';

export function VisitorHeader() {
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
          <LoginModal />
        </Box>
      </Box>
    </Container>
  );
}
