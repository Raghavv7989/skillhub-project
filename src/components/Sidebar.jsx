import React from 'react';

export default function Sidebar() {
  return (
    <aside className="card" style={{ minWidth: 240 }}>
      <h3 style={{ marginTop: 0, marginBottom: 8 }}>Categories</h3>
      <ul style={{ paddingLeft: '1.1rem', margin: 0, color: 'var(--text)' }}>
        <li style={{ padding: '0.25rem 0' }}>Web Development</li>
        <li style={{ padding: '0.25rem 0' }}>Data Science</li>
        <li style={{ padding: '0.25rem 0' }}>Design</li>
      </ul>
    </aside>
  );
}


