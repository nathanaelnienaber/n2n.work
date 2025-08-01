// Header.jsx
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Listen to window scroll position
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  return (
    // Apply 'scrolled' class to header based on scroll position
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="logo">tmrw.it consulting</div>

        {/* Apply 'scrolled' class to the menu-toggle button too */}
        <button
          className={`menu-toggle${scrolled ? ' scrolled' : ''}`}
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <span className="material-icons">{menuOpen ? 'close' : 'menu'}</span>
        </button>

        <nav className={menuOpen ? 'open' : ''}>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#contact">Contact Me</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

