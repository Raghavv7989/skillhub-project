import Contact from '../models/Contact.js';

function toNonEmptyString(value) {
  if (typeof value !== 'string') return '';
  return value.trim();
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function createContact(req, res, next) {
  try {
    const name = toNonEmptyString(req.body?.name);
    const email = toNonEmptyString(req.body?.email);
    const message = toNonEmptyString(req.body?.message);

    if (!name) return res.status(400).json({ error: 'Name is required' });
    if (!email || !isEmail(email)) return res.status(400).json({ error: 'Valid email is required' });
    if (!message) return res.status(400).json({ error: 'Message is required' });

    const contact = await Contact.create({ name, email, message });
    return res.status(201).json(contact);
  } catch (err) {
    return next(err);
  }
}


