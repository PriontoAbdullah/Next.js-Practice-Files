import { useRouter } from 'next/router';
import NavBar from '../../../components/Navbar';

const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <>
      <NavBar />
      <h1>Product Details of {productId}</h1>
    </>
  );
};

export default ProductDetails;
