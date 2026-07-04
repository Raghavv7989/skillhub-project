import React from 'react';

export default function CourseCard({ course }) {
  if (!course) return null;

  return (
    <div className="card card--shadow">
      <h3 style={{ marginTop: 0, marginBottom: 8 }}>{course.title}</h3>
      <p className="muted" style={{ margin: 0 }}>
        {course.description}
      </p>

      <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.85rem', flexWrap: 'wrap' }}>
        <span
          style={{
            fontSize: 12,
            padding: '0.25rem 0.55rem',
            background: 'rgba(37, 99, 235, 0.08)',
            border: '1px solid rgba(37, 99, 235, 0.2)',
            borderRadius: 999,
            color: 'var(--text)'
          }}
        >
          {course.level}
        </span>
        <span
          style={{
            fontSize: 12,
            padding: '0.25rem 0.55rem',
            background: 'rgba(37, 99, 235, 0.08)',
            border: '1px solid rgba(37, 99, 235, 0.2)',
            borderRadius: 999,
            color: 'var(--text)'
          }}
        >
          {course.duration}
        </span>
      </div>
    </div>
  );
}


