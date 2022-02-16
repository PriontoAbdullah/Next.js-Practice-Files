import NavBar from '../../components/navbar';

export const getServerSideProps = async (context) => {
  const { category } = context.params;

  const res = await fetch(`http://localhost:4000/news?category=${category}`);
  const data = await res.json();

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
