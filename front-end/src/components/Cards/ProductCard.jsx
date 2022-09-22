import propTypes from 'prop-types';
import {
  Card, CardContent, CardMedia, Typography, Button, ButtonGroup, CardActionArea, CardActions, Input,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCartItems } from 'redux/slicers';

export function ProductCard({
  productId, productName, productPrice, productUrlImage, cardHeight, cardWidth,
}) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

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
  };

  return (
    <Card sx={{ maxWidth: cardWidth, marginBottom: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={cardHeight}
          image={productUrlImage}
          alt={productName}
          sx={{ padding: 1 }}
        />
        <CardContent>
          <Typography gutterBottom component="div" sx={{ fontSize: '1rem', textAlign: 'center' }}>
            {productName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {productPrice}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          sx={{ justifyContent: 'center', width: '100%' }}
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
          />
          <Button
            onClick={handleAdd}
          >
            <AddIcon />
          </Button>
        </ButtonGroup>

      </CardActions>
    </Card>
  );
}

ProductCard.propTypes = {
  productName: propTypes.string.isRequired,
  productPrice: propTypes.string.isRequired,
  productUrlImage: propTypes.string.isRequired,
  productId: propTypes.number.isRequired,
  cardHeight: propTypes.number,
  cardWidth: propTypes.number,
};

ProductCard.defaultProps = {
  cardHeight: 300,
  cardWidth: 400,
};
