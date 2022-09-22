import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useEffect } from 'react';
import { getAllProducts } from 'utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'components/Common';
import { ProductCard } from 'components/Cards';
import { Box } from '@mui/material';
import { setProducts } from 'redux/slicers';
import { ShoppingCartFloating } from 'components/Buttons';

export function Customer() {
  const { userInfo, products } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    getAllProducts(userInfo.token).then((data) => {
      dispatch(setProducts(data.products));
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-around"
          marginTop={4}
        >
          {products.map((e) => (
            <ProductCard
              key={e.id}
              productId={e.id}
              productName={e.name}
              productPrice={e.price}
              productUrlImage={e.urlImage}
            />
          ))}
        </Box>
        <ShoppingCartFloating />
      </Container>
      <Footer />
    </>
  );
}
