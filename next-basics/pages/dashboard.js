import { getSession, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

const fetcher = async () => {
  const response = await fetch('http://localhost:4000/dashboard');
  const data = await response.json();

  return data;
};

const dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn('');
      } else {
        setLoading(false);
      }
    };

    securePage();
  }, []);

  const { data, error } = useSWR('dashboard', fetcher);

  if (error) return <p>An error has occurred</p>;
  if (!data) return <p>Loading...</p>;

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following - {data.following}</h2>
    </div>
  );
};

export default dashboard;
