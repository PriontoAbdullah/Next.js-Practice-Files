import Link from 'next/link';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <>
      <ul className={styles.navLink}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>

        <p>Routing</p>
        <li>
          <Link href="/product">
            <a>Product</a>
          </Link>
        </li>
        <li>
          <Link href="/product/45/review/3">
            <a>Review 3 of Product 45</a>
          </Link>
        </li>

        <p>All Routing</p>
        <li>
          <Link href="/docs/feature1/concept5/example10">
            <a>Docs Features 3 of Concept 5 of Example 10</a>
          </Link>
        </li>

        <p>Static Props - SSG</p>
        <li>
          <Link href="/users">
            <a>Users List</a>
          </Link>
        </li>

        <p>Static Paths - SSG - Fallback True</p>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/71" replace>
            <a>Blog Post 71</a>
          </Link>
        </li>

        <p>ServerSide Props - SSR</p>
        <li>
          <Link href="/news">
            <a>News</a>
          </Link>
        </li>

        <p>Dynamic Paths - SSR</p>
        <li>
          <Link href="/news/sports">
            <a>News Category</a>
          </Link>
        </li>

        <p>Client Side data fetching - CSR</p>
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>

        <p>Pre rendering + Client side Data Fetching - SSR + CSR</p>
        <li>
          <Link href="/events">
            <a>Events</a>
          </Link>
        </li>

        <p>API GET POST DELETE Request</p>
        <li>
          <Link href="/comments">
            <a>Comments</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
