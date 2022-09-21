import {
  Box, AppBar, Divider,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { CustomerHeader } from './CustomerHeader';
import { VisitorHeader } from './VisitorHeader';

export function Header() {
  const theme = useTheme();
  const { userInfo } = useSelector((state) => state);
  return (
    <Box height="100%" overflow="hidden" width="100%">
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.background.topbar,
        }}
        elevation={0}
      >
        {userInfo.token ? <CustomerHeader /> : <VisitorHeader />}
        <Divider />
      </AppBar>
    </Box>
  );
}
