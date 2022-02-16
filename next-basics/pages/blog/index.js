import Link from 'next/link';
import NavBar from '../../components/Navbar';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props: {
      data,
    },
    // Incremental Static Regeneration (ISR)
    revalidate: 10,
  };
};

export default function Blog({ data }) {
  return (
    <>
      <NavBar />
      <h1 className="hello">Blog Page</h1>
      {data?.slice(0, 10)?.map((post) => {
        return (
          <div key={post.id}>
            <ul>
              <li>
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}
