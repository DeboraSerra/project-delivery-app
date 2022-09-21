import { useState } from 'react';
import { useFormik } from 'formik';
import {
  Box, Grid, TextField, Typography, Link,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { signUpFormValidation } from 'utils/formValidations';
import { Container } from 'components/Common';
import { StatusMessages } from 'components/StatusMessages';
import { registerNewUser } from 'utils/api';
import { setUserInfo } from 'redux/slicers';
import { useDispatch } from 'react-redux';

export function SignUpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = async ({ name, email, password }) => {
    setIsSubmitting(true);

    try {
      const result = await registerNewUser({ name, email, password });
      dispatch(setUserInfo(result));
      navigate('/customer');
    } catch (err) {
      setErrorMsg(err.message);
    }

    setIsSubmitting(false);
  };

  const formik = useFormik({
    initialValues: INITIAL_STATE,
    validationSchema: signUpFormValidation,
    onSubmit: () => onSubmit(formik.values),
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
          {errorMsg && (<StatusMessages message={errorMsg} type="error" />)}
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
                  </Box>
                  <LoadingButton
                    size="large"
                    type="submit"
                    endIcon={<SendIcon />}
                    loading={isSubmitting}
                    loadingPosition="end"
                    variant="contained"
                  >
                    Sign Up
                  </LoadingButton>
                </Box>
              </Grid>
              <Grid
                item
                container
                xs={12}
                justifyContent="center"
                alignItems="center"
              />
            </Grid>
          </form>
        </Box>
      </Container>
    </Box>
  );
}
