import {
  Typography, Box, TextField, Divider,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { placeOrder } from 'utils/api';
import { clearCart } from 'redux/slicers';
import { checkoutFormValidation } from 'utils/formValidations';
import { StatusMessages } from 'components/StatusMessages';

const INITIAL_STATE = {
  address: '',
  number: '',
  seller: 2,
  status: 'pending',
};

export function CheckoutForm() {
  const { userInfo, cartItems } = useSelector((state) => state);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.qty * item.productPrice, 0);
  const cartItemsIdAndQty = cartItems.map((item) => ({ id: item.productId, qty: item.qty }));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async ({
    address, number, seller, status,
  }) => {
    setIsSubmitting(true);
    try {
      const { sale } = await placeOrder({
        user: userInfo.id,
        seller,
        total: totalPrice,
        address,
        number,
        date: new Date(),
        status,
        products: cartItemsIdAndQty,
      }, userInfo.token);
      dispatch(clearCart());
      navigate(`/customer/order/${sale.saleId}`);
    } catch (err) {
      setIsSubmitting(false);
      setErrorMsg(err.message);
    }
  };

  const formik = useFormik({
    initialValues: INITIAL_STATE,
    validationSchema: checkoutFormValidation,
    onSubmit: () => onSubmit(formik.values),
  });

  return (
    <Box
      textAlign="center"
      autoComplete="off"
      sx={
      { position: { xs: 'unset', md: 'fixed' }, width: { xs: '100%', md: 430 } }
      }
    >
      <Typography
        marginTop={1}
        marginBottom={3}
        gutterBottom
        variant="h6"
        component="div"
      >
        Delivery Details
      </Typography>

      <form onSubmit={formik.handleSubmit}>

        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          name="address"
          sx={{ marginBottom: 2, width: 300 }}
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
        <TextField
          id="outlined-basic"
          label="Number"
          type="number"
          name="number"
          variant="outlined"
          sx={{ marginBottom: 4, width: 300 }}
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
        <Divider variant="middle" />
        <Typography
          marginTop={1}
          marginBottom={3}
          gutterBottom
          variant="h6"
          component="div"
        >
          Your Total: R$
          {' '}
          {totalPrice.toFixed(2)}
        </Typography>
        <LoadingButton
          variant="contained"
          endIcon={<SendIcon />}
          loading={isSubmitting}
          loadingPosition="end"
          type="submit"
          size="large"
          sx={{
            width: 200, height: 50, fontSize: '1.1rem', marginBottom: 2,
          }}
        >
          Confirm Order
        </LoadingButton>
        {errorMsg && (<StatusMessages message={errorMsg} type="error" />)}
      </form>
    </Box>
  );
}
