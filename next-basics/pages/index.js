import Head from 'next/Head';
import Image from 'next/image';
import img from '../public/mountains.jpg';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="This is the home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.hello}>Hello World</h1>
      {/* CSS in JS */}
      <h2 style={{ color: 'green' }}>Welcome</h2>
      <h3>Good job</h3>

      <Image
        src="https://images.pexels.com/photos/5097443/pexels-photo-5097443.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        blurDataURL="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="
        width="200"
        height="250"
        alt=""
      />

      {/* Bulged Placeholder */}
      <Image src={img} placeholder="blur" width="300" height="300" alt="" />

      <p className={`${styles.footer} ${styles.title}`}>
        Copyright &copy;{' '}
        <a href="https://prionto-71.web.app">Prionto Abdullah</a>
      </p>

      {/* Styled JSX */}
      <style jsx>
        {`
          h3 {
            color: yellow;
          }
        `}
      </style>
    </>
  );
}
