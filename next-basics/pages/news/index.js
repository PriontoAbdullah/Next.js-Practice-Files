import Navbar from '../../components/navbar';

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:4000/news');
  const data = await res.json();

  return {
    props: {
      articles: data,
    },
  };
};

const NewsArticleList = ({ articles }) => {
  return (
    <>
      <Navbar />

      <h1>News Article List</h1>

      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.category}</p>
            <p>{article.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default NewsArticleList;
