import Head from 'next/Head';
import Image from 'next/image';
import NavBar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <NavBar />
      <h1 className={styles.hello}>Hello World</h1>
      <h2 style={{ color: 'green' }}>Welcome</h2>
      <h3>Good job</h3>

      <Image src="/vercel.svg" width="300" height="300" alt="" />
      <Image
        src="https://images.pexels.com/photos/5097443/pexels-photo-5097443.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        width="200"
        height="250"
        alt=""
      />

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
