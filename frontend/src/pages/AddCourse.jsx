import React, { useState } from 'react';
import { createCourse } from '../api/courseApi.js';

export default function AddCourse() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    level: 'Beginner',
    duration: '4 weeks'
  });
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: 'idle', message: '' });
    try {
      await createCourse(form);
      setStatus({ type: 'success', message: 'Course added!' });
      setForm({ title: '', description: '', level: 'Beginner', duration: '4 weeks' });
    } catch (err) {
      setStatus({ type: 'error', message: err?.message || 'Failed to add course' });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="container" style={{ maxWidth: 720 }}>
      <h1 className="h1" style={{ marginBottom: '0.75rem' }}>
        Add Course
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
          <label htmlFor="title">Title</label>
          <input
            id="title"
            required
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            placeholder="Course title"
          />
        </div>

        <div className="field">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            value={form.description}
            onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
            placeholder="Course description"
            rows={5}
          />
        </div>

        <div className="field">
          <label htmlFor="level">Level</label>
          <select
            id="level"
            value={form.level}
            onChange={(e) => setForm((f) => ({ ...f, level: e.target.value }))}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="duration">Duration</label>
          <input
            id="duration"
            required
            value={form.duration}
            onChange={(e) => setForm((f) => ({ ...f, duration: e.target.value }))}
            placeholder="Duration"
          />
        </div>

        <button className="btn" type="submit" disabled={submitting}>
          {submitting ? 'Adding...' : 'Add'}
        </button>
      </form>
    </div>
  );
}



