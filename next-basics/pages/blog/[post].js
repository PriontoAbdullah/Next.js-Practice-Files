import { useRouter } from 'next/router';
import NavBar from '../../components/Navbar';

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  const paths = data?.map((post) => {
    return {
      params: {
        post: post.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.post;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const Post = ({ data }) => {
  const router = useRouter();
  const { post } = router.query;

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
