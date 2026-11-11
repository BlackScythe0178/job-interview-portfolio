import { useState } from 'react';
import { Sun, Moon, ArrowUpRight, Menu, X } from 'lucide-react';

export default function Header({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Aaron Parker home">
        <span className="brand-mark">AP<span>.</span></span>
        <span className="brand-divider" />
        <span className="brand-sub">AARON PARKER</span>
      </a>

      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
        {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
            {item}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button
          className="theme-btn"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
        </button>
        <a className="header-contact" href="mailto:shadowwarhawk2@gmail.com">
          Let's talk <ArrowUpRight size={16} />
        </a>
        <button
          className="mobile-menu"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
