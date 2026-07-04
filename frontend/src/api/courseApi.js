const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

export async function getCourses() {
  const res = await fetch(`${API_BASE}/courses`);
  if (!res.ok) throw new Error('Failed to fetch courses');
  return res.json();
}

export async function createCourse(course) {
  const res = await fetch(`${API_BASE}/courses`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(course)
  });

  if (!res.ok) throw new Error('Failed to create course');
  return res.json();
}

