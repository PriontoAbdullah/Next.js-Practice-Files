import Footer from '@/Layout/Footer';
import NavBar from '@/Layout/Navbar';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/Head';
import 'styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Learning Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={session}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}

export default MyApp;
