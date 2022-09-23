import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Container } from 'components/Common';
import { ProductCheckoutCard } from 'components/Cards';
import { CheckoutForm } from 'components/Forms';
import { useSelector } from 'react-redux';
import { Divider, Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export function Checkout() {
  const { cartItems } = useSelector((state) => state);
  const theme = useTheme();
  // TODO - Ajust layout when cart is empty or with less than 3 items
  return (
    <>
      <Header />
      <Container>
        <Typography
          marginTop={{ xs: 1, sm: 2, md: -2 }}
          gutterBottom
          variant="h4"
          component="div"
          textAlign="center"
        >
          Checkout
        </Typography>
        <Divider />
        <Grid container columnSpacing={{ xs: 1 }} justifyContent="center">

          <Grid item xs={12} sm={6} md={4} marginTop={2}>

            {cartItems.map((e) => (
              <ProductCheckoutCard
                key={e.productId}
                productId={e.productId}
                productName={e.productName}
                productPrice={e.productPrice}
                productUrlImage={e.productUrlImage}
                qty={e.qty}
              />
            ))}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            sx={
            {
              marginLeft: { xs: 2, md: 5 },
              backgroundColor: theme.palette.background.level2,
              borderRadius: 2,
              minWidth: { xs: '100%', md: 450 },
              maxWidth: { xs: '100%', md: 450 },
              margin: 2,
            }
          }
          >
            <CheckoutForm />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
