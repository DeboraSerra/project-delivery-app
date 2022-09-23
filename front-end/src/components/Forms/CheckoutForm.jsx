import {
  Typography, Box, TextField, Button, Divider,
} from '@mui/material';
import { useSelector } from 'react-redux';

export function CheckoutForm() {
  const { cartItems } = useSelector((state) => state);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.qty * item.productPrice, 0);

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
      <TextField
        id="outlined-basic"
        label="Delivery Address"
        variant="outlined"
        sx={{ marginBottom: 2, width: 300 }}
      />
      <TextField
        id="outlined-basic"
        label="Complement"
        variant="outlined"
        sx={{ marginBottom: 4, width: 300 }}
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
      <Button
        variant="contained"
        size="large"
        sx={{
          width: 200, height: 50, fontSize: '1.1rem', marginBottom: 2,
        }}
      >
        Confirm Order
      </Button>
    </Box>
  );
}
