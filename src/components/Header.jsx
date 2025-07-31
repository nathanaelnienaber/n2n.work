import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">Logo</div>
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Menu
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
