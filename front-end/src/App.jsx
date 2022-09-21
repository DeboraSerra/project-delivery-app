import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import AOS from 'aos';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isDarkModeActive } from 'utils/checkDarkMode';
import { setDarkMode } from 'redux/slicers/darkMode.slice';
import { Router } from 'routes';
import { checkCurrentTheme } from 'utils/checkCurrentTheme';
import { getTheme } from 'themes/getTheme';
import { Container } from 'components/Common/Container';

export function App() {
  const { darkMode } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isDarkModeActive && !darkMode.active && !darkMode.forced) {
      dispatch(setDarkMode({ active: true, forced: false }));
    }
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [darkMode.active]);

  const currentTheme = checkCurrentTheme(darkMode);

  return (
    <ThemeProvider theme={getTheme(currentTheme)}>
      <Container>
        <CssBaseline />
        <Paper elevation={0}>
          <Router />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
