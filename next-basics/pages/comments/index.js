import { useState } from 'react';
import NavBar from '../../components/Navbar';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const fetchComments = async () => {
    const response = await fetch('api/comments');
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch('api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment: newComment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);
    setComments([...comments, data]);
    setNewComment('');
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`api/comments/${commentId}`, {
      method: 'DELETE',
    });

    const data = await response.json();
    console.log(data);

    // update the comment list
    fetchComments();
  };

  return (
    <>
      <NavBar />
      <h1>Write Comment</h1>
      <input
        type="text"
        placeholder="Comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Comment</button>

      <hr />
      <button onClick={fetchComments}>Load Comments</button>
      <h2>List of Comments</h2>

      {comments.map((comment) => (
        <div key={comment.id}>
          <small>{comment.id}</small>
          <h2>{comment.text}</h2>
          <button onClick={() => deleteComment(comment.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Comments;
