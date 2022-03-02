import Footer from 'components/Layout/Footer';
import styles from 'styles/About.module.scss';

export default function About() {
  return (
    <>
      <h1 className={styles.hello}>About Page</h1>
    </>
  );
}

// custom page layout
About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
