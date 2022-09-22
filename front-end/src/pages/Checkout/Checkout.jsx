import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Container } from 'components/Common';
import { useSelector } from 'react-redux';

export function Checkout() {
  const { cartItems } = useSelector((state) => state);
  console.log(cartItems);
  return (
    <>
      <Header />
      <Container>
        <h1>Checkout</h1>
      </Container>
      <Footer />
    </>
  );
}
