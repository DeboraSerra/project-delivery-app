import { useState } from 'react';
import { Button, ButtonGroup, Input } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems, removeItemFromCart } from 'redux/slicers';
import propTypes from 'prop-types';

export function AddRemoveItemCart({
  productId, productName, productPrice, productUrlImage, center,
}) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state);
  const findItem = cartItems.find((e) => e.productId === productId);
  const [quantity, setQuantity] = useState(findItem?.qty || 0);

  const handleQuantity = (e) => {
    const value = +e.target.value;
    setQuantity(value);
    if (value > 0) {
      return dispatch(setCartItems({
        productId, productName, productPrice, productUrlImage, qty: value,
      }));
    }
    return dispatch(removeItemFromCart(productId));
  };

  const handleAdd = () => {
    setQuantity(quantity + 1);
    dispatch(setCartItems({
      productId, productName, productPrice, productUrlImage, qty: quantity + 1,
    }));
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      dispatch(setCartItems({
        productId, productName, productPrice, productUrlImage, qty: quantity - 1,
      }));
    }
    if (quantity === 1) {
      dispatch(removeItemFromCart(productId));
    }
  };
  return (
    <ButtonGroup
      variant="contained"
      aria-label="outlined primary button group"
      sx={{ width: '100%', justifyContent: center ? 'center' : 'flex-start' }}
    >
      <Button
        onClick={handleRemove}
        disabled={quantity === 0}
      >
        <RemoveIcon />
      </Button>
      <Input
        sx={{ width: 50, input: { textAlign: 'center' }, backgroundColor: theme.palette.background.cart }}
        value={quantity}
        onChange={handleQuantity}
      />
      <Button
        onClick={handleAdd}
      >
        <AddIcon />
      </Button>
    </ButtonGroup>
  );
}

AddRemoveItemCart.propTypes = {
  productId: propTypes.number.isRequired,
  productName: propTypes.string.isRequired,
  productPrice: propTypes.string.isRequired,
  productUrlImage: propTypes.string.isRequired,
  center: propTypes.bool,
};

AddRemoveItemCart.defaultProps = {
  center: false,
};
