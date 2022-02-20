import NavBar from '../../components/navbar';

export const getServerSideProps = async (context) => {
  const { params, req, res, query } = context;
  const { category } = params;

  // get cookie
  console.log(req.headers.cookie);
  console.log(query);

  // set cookie
  res.setHeader('Set-Cookie', ['type=ninja', 'language=javascript']);

  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );

  const data = await response.json();
  console.log(`Pre-rendering category ${category}`);

  return {
    props: {
      articles: data,
      category,
    },
  };
};

const NewsArticleCategory = ({ articles, category }) => {
  return (
    <>
      <NavBar />
      <h1> Showing News by Category: {category}</h1>

      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.category}</p>
            <p>{article.description}</p>

            <hr />
          </div>
        );
      })}
    </>
  );
};

export default NewsArticleCategory;
