/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const navLinkStyle = {
  textDecoration: 'none',
  color: 'black',
  fontWeight: 500,
  fontSize: '16px',
};

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (window.scrollY < lastScrollY || window.scrollY < 50) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
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
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '20px',
        position: 'fixed',
        width: '100%',
        backgroundColor: 'transparent',
        top: showNavbar ? '0' : '-100px',
        transition: 'top 0.3s',
        zIndex: 100,
      }}
    >
      {/* Nav Links */}
      <div
        style={{
          display: 'flex',
          gap: '16px',
        }}
      >
        <Link href="/" passHref>
          <a className={navLinkStyle}>Home</a>
        </Link>
        <Link href="/about" passHref>
          <a className={navLinkStyle}>About</a>
        </Link>
        <Link href="/projects" passHref>
          <a className={navLinkStyle}>Projects</a>
        </Link>
        <Link href="/contact" passHref>
          <a className={navLinkStyle}>Contact</a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
