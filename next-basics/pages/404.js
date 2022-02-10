import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  return (
    <>
      <h1> Error 404</h1>
      <br />

      <button onClick={() => router.push('/')}>Go to Home</button>
    </>
  );
};

export default Error;
