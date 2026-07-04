import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import courseRoutes from './routes/courseRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true }));

app.use('/api/courses', courseRoutes);
app.use('/api/contact', contactRoutes);

// Centralized error handling
app.use((err, _req, res, _next) => {
  console.error('[SkillHub error]', err);

  const status = err?.statusCode || err?.status || 500;
  const message = err?.message || 'Internal Server Error';

  return res.status(status).json({ error: message });
});

const PORT = process.env.PORT || 5000;

await connectDB();

app.listen(PORT, () => {
  console.log(`SkillHub backend running on http://localhost:${PORT}`);
});


