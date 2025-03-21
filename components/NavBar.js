/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (window.scrollY < lastScrollY || window.scrollY < 50) {
      setShowNavbar(true); // show when scrolling up
    } else {
      setShowNavbar(false); // hide when scrolling down
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [controlNavbar]);

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="navbar-logo">
        <Link href="/" passHref>
          <a>
            <Image
              src="/dylan moore.png"
              alt="Dylan Moore Logo"
              width={150}
              height={45}
              priority
            />
          </a>
        </Link>
      </div>
      <Link href="/" passHref>
        <a className="nav-link">Home</a>
      </Link>
      <Link href="/about" passHref>
        <a className="nav-link">About</a>
      </Link>
      <Link href="/projects" passHref>
        <a className="nav-link">Projects</a>
      </Link>
      <Link href="/contact" passHref>
        <a className="nav-link">Contact</a>
      </Link>
    </nav>
  );
};

export default NavBar;
