import { comments } from '../../../data/comments';

export default function handler(req, res) {
  // get comments
  if (req.method === 'GET') {
    res.status(200).json(comments);
  }

  // post comments
  if (req.method === 'POST') {
    const { comment } = req.body;
    const newComment = {
      id: Date.now(),
      text: comment,
    };

    comments.push(newComment);
    res.status(201).json(newComment);
  }
}
