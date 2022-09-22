import propTypes from 'prop-types';
import {
  Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions,
} from '@mui/material';

export function ProductCard({
  productName, productPrice, productUrlImage,
}) {
  return (
    <Card sx={{ maxWidth: 400, marginBottom: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={productUrlImage}
          alt={productName}
          sx={{ padding: 1 }}
        />
        <CardContent>
          <Typography gutterBottom component="div" sx={{ fontSize: '1rem' }}>
            {productName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {productPrice}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}

ProductCard.propTypes = {
  productName: propTypes.string.isRequired,
  productPrice: propTypes.string.isRequired,
  productUrlImage: propTypes.string.isRequired,
};
