import { useState } from 'react';
import {
  Box, Toolbar, IconButton, Typography, Menu, Avatar, Button, Tooltip, MenuItem, Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { Logo } from 'components/Images';
import { NightModeToggle } from 'components/Buttons';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

const pages = [
  {
    name: 'Product',
    link: '/customer',
  },
  {
    name: 'My Orders',
    link: '/customer/orders',
  },
];

const settings = [
  {
    name: 'Profile',
    link: '/customer/profile',
  },
  {
    name: 'Account Settings',
    link: '/customer/settings',
  },
  {
    name: 'Logout',
    link: '/customer/logout',
  },
];

export function CustomerHeader() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const theme = useTheme();
  const { userInfo } = useSelector((state) => state);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: theme.palette.text.primary,
            textDecoration: 'none',
          }}
        >
          <Logo />
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ color: theme.palette.text.primary }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map(({ name, link }) => (
              <MenuItem key={`mobile-${name}`} onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  sx={{ color: theme.palette.text.primary }}
                  component={RouterLink}
                  to={link}
                >
                  {name}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography
          variant="h5"
          noWrap
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: theme.palette.text.primary,
            textDecoration: 'none',
          }}
        >
          <Logo />
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map(({ name, link }) => (
            <Button
              key={name}
              component={RouterLink}
              to={link}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                textTransform: 'uppercase',
                fontWeight: 'bold',
                m: 1,
                color: theme.palette.text.primary,
                display: 'block',
                textDecoration: 'none',
              }}
            >
              {name}
            </Button>
          ))}
        </Box>

        <Box marginRight="1rem">
          <NightModeToggle />
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt={`${userInfo.name}`} src={`${userInfo.name}`} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map(({ name, link }) => (
              <MenuItem key={name} onClick={handleCloseUserMenu}>
                <Typography
                  textAlign="center"
                  component={RouterLink}
                  to={link}
                  sx={{ color: theme.palette.text.primary, textDecoration: 'none' }}
                >
                  {name}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  );
}
