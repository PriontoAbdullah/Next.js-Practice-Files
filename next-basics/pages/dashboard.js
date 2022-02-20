import useSWR from 'swr';
import NavBar from '../components/Navbar';

const fetcher = async () => {
  const response = await fetch('http://localhost:4000/dashboard');
  const data = await response.json();

  return data;
};

const dashboard = () => {
  const { data, error } = useSWR('dashboard', fetcher);

  if (error) return 'An error has occurred';
  if (!data) return 'Loading...';

  return (
    <div>
      <NavBar />
      <h2>Dashboard</h2>
      <h2>Posts - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following - {data.following}</h2>
    </div>
  );
};

export default dashboard;
