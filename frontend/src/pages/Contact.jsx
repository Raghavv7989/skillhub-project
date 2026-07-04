import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    if (!res.ok) {
      let msg = 'Failed to send message';
      try {
        const data = await res.json();
        msg = data?.error || msg;
      } catch {
        // ignore
      }
      setStatus({ type: 'error', message: msg });
      setSubmitting(false);
      return;
    }

    setStatus({ type: 'success', message: 'Message sent!' });
    setForm({ name: '', email: '', message: '' });
    setSubmitting(false);
  }

  return (
    <div className="container" style={{ maxWidth: 720 }}>
      <h1 className="h1" style={{ marginBottom: '0.75rem' }}>
        Contact
      </h1>

      {status.type === 'success' ? (
        <div className="notice notice--success" role="status">
          {status.message}
        </div>
      ) : null}

      {status.type === 'error' ? (
        <div className="notice notice--danger" role="alert">
          {status.message}
        </div>
      ) : null}

      <form className="form" onSubmit={onSubmit} style={{ marginTop: '0.75rem' }}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Your name"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="Your email"
            type="email"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            placeholder="Your message"
            rows={5}
            required
          />
        </div>

        <button className="btn" type="submit" disabled={submitting}>
          {submitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}



