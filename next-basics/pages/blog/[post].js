import { useRouter } from 'next/router';
import NavBar from '../../components/Navbar';

export const getStaticProps = async (context) => {
  const { post } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post}`);
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  console.log(`Generating page for post ${post}`);

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  // const data = await res.json();

  // const paths = data.map((post) => ({
  //   params: {
  //     post: `${post.id}`,
  //   },
  // }));

  return {
    // paths,
    // fallback: false,

    paths: [
      {
        params: {
          post: '1',
        },
      },
      {
        params: {
          post: '2',
        },
      },
      {
        params: {
          post: '3',
        },
      },
    ],
    fallback: true,
  };
};

const Post = ({ data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div>
        <NavBar />
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <NavBar />

      <div>
        <h1 className="hello">Blog post: {data.id}</h1>
        <h3> {data.title} </h3>
        <p>{data.body} </p>
      </div>
    </>
  );
};

export default Post;
