import propTypes from 'prop-types';
import {
  Card, CardContent, CardMedia, Typography, CardActionArea, CardActions,
} from '@mui/material';
import { AddRemoveItemCart } from 'components/Buttons';

export function ProductCard(props) {
  const {
    productName, productPrice, productUrlImage, cardHeight, cardWidth,
  } = props;
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
        <AddRemoveItemCart center {...props} />
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
