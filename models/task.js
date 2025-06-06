import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

// Prevent OverwriteModelError
const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);

export default Task;
