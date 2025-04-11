import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [controlNavbar]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      {isMobile && (
        <button
          type="button"
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      )}

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link href="/" className="nav-link" onClick={closeMenu}>Home</Link>
        <Link href="/about" className="nav-link" onClick={closeMenu}>About</Link>
        <Link href="/projects" className="nav-link" onClick={closeMenu}>Projects</Link>
        <Link href="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
