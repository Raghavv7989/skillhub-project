import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container" style={{ padding: '1rem', color: 'var(--muted)' }}>
        © {new Date().getFullYear()} Skill Hub
      </div>
    </footer>
  );
}


