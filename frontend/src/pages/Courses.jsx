import React, { useEffect, useState } from 'react';
import { getCourses } from '../api/courseApi.js';
import CourseCard from '../components/CourseCard.jsx';

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setStatus({ type: 'idle', message: '' });
      try {
        const data = await getCourses();
        setCourses(Array.isArray(data) ? data : data?.courses || []);
      } catch (e) {
        setStatus({ type: 'error', message: e?.message || 'Failed to load courses' });
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="container">
      <h1 className="h1" style={{ marginBottom: '0.75rem' }}>
        Courses
      </h1>

      {status.type === 'error' ? (
        <div className="notice notice--danger" role="alert">
          {status.message}
        </div>
      ) : null}

      {loading ? <p className="muted">Loading courses...</p> : null}

      <div className="courses-grid" style={{ marginTop: loading ? '0.75rem' : '1rem' }}>
        {courses.map((c) => (
          <CourseCard key={c._id || c.id} course={c} />
        ))}
      </div>
    </div>
  );
}


