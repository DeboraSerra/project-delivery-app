import { useFormik } from 'formik';
import { Box, Grid, TextField, Button, Typography, Link } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { loginFormValidation } from 'utils/formValidations';
import { Container } from 'components/Common';

export function LoginForm() {
  const navigate = useNavigate();
  const INITIAL_STATE = {
    email: '',
    password: '',
  };

  const onSubmit = () => {
    navigate('/customer');
  };

  const formik = useFormik({
    initialValues: INITIAL_STATE,
    validationSchema: loginFormValidation,
    onSubmit,
  });

  return (
    <Box
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <Container maxWidth={600}>
        <Box>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="subtitle2" sx={{ marginBottom: 2 }}>
                  Enter your email
                </Typography>
                <TextField
                  label="Email *"
                  variant="outlined"
                  name="email"
                  fullWidth
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" sx={{ marginBottom: 2 }}>
                  Enter your password
                </Typography>
                <TextField
                  label="Password *"
                  variant="outlined"
                  name="password"
                  type="password"
                  fullWidth
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item container xs={12}>
                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'stretched', sm: 'center' }}
                  justifyContent="space-between"
                  width="100%"
                  maxWidth={600}
                  margin="0 auto"
                >
                  <Box marginBottom={{ xs: 1, sm: 0 }}>
                    <Typography variant="subtitle2">
                      <Link
                        component={RouterLink}
                        color="primary"
                        to="/forgot-password"
                        underline="none"
                      >
                        Forgot your password?
                      </Link>
                    </Typography>
                  </Box>
                  <Button size="large" variant="contained" type="submit">
                    Login
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Box>
  );
}
