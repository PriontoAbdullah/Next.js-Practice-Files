import Link from 'next/link';

export const getStaticProps = async () => {
  console.log('Regenerating page for post');

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
      <h1 className="hello">Blog Page</h1>
      {data?.slice(0, 10)?.map((post) => {
        return (
          <div key={post.id}>
            <ul>
              <li>
                <Link href={`/blog/${post.id}`}>
                  <p>{post.title}</p>
                </Link>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}
