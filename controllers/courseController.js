import Course from '../models/Course.js';

function toNonEmptyString(value) {
  if (typeof value !== 'string') return '';
  return value.trim();
}

export async function getCourses(_req, res) {
  const courses = await Course.find().sort({ createdAt: -1 });
  return res.json(courses);
}

export async function createCourse(req, res, next) {
  try {
    const title = toNonEmptyString(req.body?.title);
    const description = toNonEmptyString(req.body?.description);
    const level = toNonEmptyString(req.body?.level) || 'Beginner';
    const duration = toNonEmptyString(req.body?.duration) || '4 weeks';

    if (!title) return res.status(400).json({ error: 'Title is required' });
    if (!description) return res.status(400).json({ error: 'Description is required' });
    if (!duration) return res.status(400).json({ error: 'Duration is required' });

    const course = await Course.create({ title, description, level, duration });
    return res.status(201).json(course);
  } catch (err) {
    return next(err);
  }
}


