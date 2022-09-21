import { useFormik } from 'formik';
import { Box, Button, Grid, TextField, Typography, Link } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { signUpFormValidation } from 'utils/formValidations';
import { Container } from 'components/Common';

export function SignUpForm() {
  const navigate = useNavigate();
  const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = () => {
    navigate('/customer');
  };

  const formik = useFormik({
    initialValues: INITIAL_STATE,
    validationSchema: signUpFormValidation,
    onSubmit,
  });

  return (
    <Box
      position="relative"
      minHeight="calc(100vh - 247px)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <Container maxWidth={600}>
        <Box>
          <Box marginBottom={4}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
              }}
            >
              Create an account
            </Typography>
          </Box>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="subtitle2" sx={{ marginBottom: 2 }}>
                  Enter your name
                </Typography>
                <TextField
                  label="Name *"
                  variant="outlined"
                  name="name"
                  fullWidth
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={
                formik.touched.name && Boolean(formik.errors.name)
              }
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
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
              <Grid item xs={12} sm={6}>
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
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" sx={{ marginBottom: 2 }}>
                  Confirm your password
                </Typography>
                <TextField
                  label="Confirm Password *"
                  variant="outlined"
                  name="confirmPassword"
                  type="password"
                  fullWidth
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                  helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
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
                      Already have an account?
                      {' '}
                      <Link
                        component={RouterLink}
                        color="primary"
                        to="/login"
                        underline="none"
                      >
                        Login.
                      </Link>
                    </Typography>
                  </Box>
                  <Button size="large" variant="contained" type="submit">
                    Sign up
                  </Button>
                </Box>
              </Grid>
              <Grid
                item
                container
                xs={12}
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  align="center"
                >
                  By clicking Sign up button you agree with our
                  {' '}
                  <Link
                    component={RouterLink}
                    color="primary"
                    to="/privacy-policy"
                    underline="none"
                  >
                    Privacy policy.
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Box>
  );
}
