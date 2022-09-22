import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useEffect, useState } from 'react';
import { getAllProducts } from 'utils/api';
import { useSelector } from 'react-redux';
import { Container } from 'components/Common';
import { ProductCard } from 'components/Cards';
import { Box } from '@mui/material';

export function Customer() {
  const { userInfo } = useSelector((state) => state);
  const [products, setProducts] = useState([]);
  const { cartItems } = useSelector((state) => state);
  useEffect(() => {
    getAllProducts(userInfo.token).then((data) => setProducts(data.products));
  }, []);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

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
      </Container>
      <Footer />
    </>
  );
}
