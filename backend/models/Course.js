import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    level: { type: String, default: 'Beginner' },
    duration: { type: String, default: '4 weeks' }
  },
  { timestamps: true }
);

export default mongoose.model('Course', CourseSchema);

