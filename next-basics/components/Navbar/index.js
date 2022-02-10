import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">
            <a> Home </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog </a>
          </Link>
        </li>
        <li>
          <Link href="/blog/71">
            <a>Blog Post 71 </a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
