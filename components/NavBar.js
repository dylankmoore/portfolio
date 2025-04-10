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
      <div style={{ display: 'flex', gap: '16px' }}>
        <Link href="/" style={navLinkStyle}>Home</Link>
        <Link href="/about" style={navLinkStyle}>About</Link>
        <Link href="/projects" style={navLinkStyle}>Projects</Link>
        <Link href="/contact" style={navLinkStyle}>Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
