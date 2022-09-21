import { useFormik } from 'formik';
import {
  Box, Grid, TextField, Typography, Link,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { loginFormValidation } from 'utils/formValidations';
import { Container } from 'components/Common';
import { loginUser } from 'utils/api';
import { StatusMessages } from 'components/StatusMessages';
import { useState } from 'react';
import { setUserInfo } from 'redux/slicers';
import { useDispatch } from 'react-redux';

export function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const INITIAL_STATE = {
    email: '',
    password: '',
  };

  const onSubmit = async ({ email, password }) => {
    setIsSubmitting(true);

    try {
      const result = await loginUser({ email, password });
      dispatch(setUserInfo(result));
      navigate(`/${result.role}`);
    } catch (err) {
      setErrorMsg(err.message);
    }

    setIsSubmitting(false);
  };

  const formik = useFormik({
    initialValues: INITIAL_STATE,
    validationSchema: loginFormValidation,
    onSubmit: () => onSubmit(formik.values),
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
          {errorMsg && (<StatusMessages message={errorMsg} type="error" />)}
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
                  <LoadingButton
                    size="large"
                    type="submit"
                    endIcon={<SendIcon />}
                    loading={isSubmitting}
                    loadingPosition="end"
                    variant="contained"
                  >
                    Login
                  </LoadingButton>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Box>
  );
}
