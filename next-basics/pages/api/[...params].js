export default function handler(req, res) {
  const { params } = req.query;
  console.log(params);
  res.status(200).json(params);
}
