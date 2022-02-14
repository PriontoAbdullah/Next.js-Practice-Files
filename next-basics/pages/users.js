import NavBar from '../components/Navbar';
import User from '../components/Users/User';

export const getStaticProps = async () => {
  const users = await fetch('https://jsonplaceholder.typicode.com/users');
  const usersData = await users.json();
  return {
    props: {
      usersData,
    },
  };
};

const UserList = ({ usersData }) => {
  return (
    <>
      <NavBar />
      <h1> List of Users </h1>
      <p>Static Site Generator</p>
      {usersData.map((user) => (
        <div key={user.id} style={{ padding: '10px' }}>
          <User user={user} />
        </div>
      ))}
    </>
  );
};

export default UserList;
