import { Grid, Divider, Box } from '@mui/material';
import { AddRemoveItemCart } from 'components/Buttons';
import propTypes from 'prop-types';

export function ProductCheckoutCard(props) {
  const {
    productName, productPrice, productUrlImage,
  } = props;
  return (

    <Grid item xs={12} sm={12} md={12}>

      <Grid container marginTop={1} marginBottom={1} columnSpacing={1}>
        <Grid item xs={4} marginRight={1}>
          <img
            src={productUrlImage}
            alt={productName}
            style={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={7}>
          <Grid container columnSpacing={1}>

            <Box
              display="flex"
              sx={
              { flexDirection: { xs: 'column' }, marginTop: -2.5 }
              }
            >
              <Box>
                <h3>{productName}</h3>
              </Box>
              <Box
                marginLeft={1}
                sx={
                { marginTop: -5, marginLeft: -0.1 }
                }
              >
                <h5>
                  {' '}
                  R$
                  {' '}
                  {productPrice}
                </h5>
              </Box>
            </Box>
            <AddRemoveItemCart {...props} />
          </Grid>
        </Grid>
      </Grid>
      <Divider />
    </Grid>

  );
}

ProductCheckoutCard.propTypes = {
  productId: propTypes.string.isRequired,
  productName: propTypes.string.isRequired,
  productPrice: propTypes.number.isRequired,
  productUrlImage: propTypes.string.isRequired,
  qty: propTypes.number.isRequired,
};
