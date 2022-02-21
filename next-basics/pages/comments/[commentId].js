import NavBar from '../../components/Navbar';
import { comments } from '../../data/comments';

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { commentId: '1' } },
      { params: { commentId: '2' } },
      { params: { commentId: '3' } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { commentId } = context.params;

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );

  // DON'T DO THIS
  // const response = await fetch(`api/comments/${commentId}`);
  // const data = await response.json();

  return {
    props: {
      comment,
    },
  };
};

export const commentDetails = ({ comment }) => {
  return (
    <>
      <NavBar />

      <h1>Comment Details</h1>

      <div key={comment.id}>
        <small>{comment.id}</small>
        <h2>{comment.text}</h2>
      </div>
    </>
  );
};

export default commentDetails;