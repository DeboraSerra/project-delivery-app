import { Box, Fab } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

export function ShoppingCartFloating() {
  const { cartItems } = useSelector((state) => state);
  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.qty * item.productPrice, 0);
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab
        color="secondary"
        variant="extended"
        aria-label="add"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
      >
        <ShoppingCartIcon sx={{ mr: 1 }} />
        Ver carrinho (
        {totalItems}
        )
        {' '}
        R$
        {totalPrice.toFixed(2)}
      </Fab>
    </Box>
  );
}
