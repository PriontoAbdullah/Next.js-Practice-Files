import { useRouter } from 'next/router';
import NavBar from '../../components/Navbar';

const Product = () => {
  const router = useRouter();

  const handleOrder = () => {
    console.log('Order placed successfully');
    router.push('/');
  };

  return (
    <>
      <NavBar />
      <h1>Product 1</h1>
      <h1>Product 2</h1>
      <h1>Product 3</h1>
      <button onClick={handleOrder}>Place Order</button>
    </>
  );
};

export default Product;
