import { useRouter } from 'next/router';
import NavBar from '../../../../components/Navbar';

const ReviewDetails = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <>
      <NavBar />
      <h1>
        Review {reviewId} of product {productId}
      </h1>
    </>
  );
};

export default ReviewDetails;
