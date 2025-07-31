
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="logo">tmrw.it Consulting</div>
        <button className="menu-toggle" aria-label="Menu">
          <span className="material-icons">menu</span>
        </button>
        <nav>
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
