import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext.jsx';

export default function Navbar() {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx?.theme || 'light';

  function toggleTheme() {
    if (!themeCtx) return;
    themeCtx.setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  }

  return (
    <header className="navbar">
      <nav className="nav-inner">
        <div className="nav-links">
          <strong>Skill Hub</strong>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/add-course">Add Course</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <button type="button" className="theme-pill" onClick={toggleTheme} aria-label="Toggle theme">
          <span>{theme === 'light' ? 'Light' : 'Dark'}</span>
        </button>
      </nav>
    </header>
  );
}


