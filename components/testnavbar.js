/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

const TestNavBar = () => (
  <div className="navbar">
    <Link href="/" passHref>
      <a>Home</a>
    </Link>
    <Link href="/about" passHref>
      <a>About</a>
    </Link>
    <Link href="/projects" passHref>
      <a>Projects</a>
    </Link>
    <Link href="/contact" passHref>
      <a>Contact</a>
    </Link>
  </div>
);

export default TestNavBar;
