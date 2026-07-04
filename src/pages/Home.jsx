import React from 'react';
import Hero from '../components/Hero.jsx';
import Sidebar from '../components/Sidebar.jsx';

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <div className="page-layout">
        <Sidebar />
        <section>
          <div
            className="card"
            style={{
              borderStyle: 'dashed',
              background: 'transparent'
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: 8 }} className="h2">
              Welcome
            </h2>
            <p className="muted" style={{ margin: 0 }}>
              Explore courses, add new ones, and send a message through the contact form.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}


