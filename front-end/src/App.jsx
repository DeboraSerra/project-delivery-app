import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Paper } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDarkMode } from 'redux/slicers';
import { Router } from 'routes';
import { checkCurrentTheme, isDarkModeActive } from 'utils';
import { getTheme } from 'themes';
import { Container } from 'components/Common';
import AOS from 'aos';

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
