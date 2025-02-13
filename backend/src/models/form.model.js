import mongoose from 'mongoose';  // Import mongoose

const formSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  university: { type: String, required: true },
  department: { type: String, required: true },
  semester: { type: String, required: true },
  domain: { type: String, required: true },
  projects: { type: [], required: true },
  internshipPeriod: { type: String, required: true },
  resume: { type: String, required: true },  // Store the URL of the resume
  selectedProject: { type: String, required: true },
  role: { type: String, required: true },
});

const form = mongoose.model("Form", formSchema);

export { form };
