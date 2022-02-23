import { useRouter } from 'next/router';

const ReviewDetails = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <>
      <h1>
        Review {reviewId} of product {productId}
      </h1>
    </>
  );
};

export default ReviewDetails;
