import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { form } from "../models/form.model.js";

const createForm = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    university,
    department,
    semester,
    domain,
    projects,
    internshipPeriod,
    selectedProject,
    role,
  } = req.body;

  if (!req.file) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "No Resume Attached"));
  }

  let parsedProjects;
  try {
    parsedProjects = JSON.parse(projects);
  } catch (e) {
    parsedProjects = [];
  }

  let pdfUrl = null;
  try {
    if (req.file.mimetype !== "application/pdf") {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "Only PDF files are allowed"));
    }

    // 🔹 Upload file buffer to Cloudinary
    pdfUrl = await uploadOnCloudinary(req.file.buffer);

    if (!pdfUrl) {
      return res
        .status(500)
        .json(new ApiResponse(500, null, "Error uploading PDF"));
    }
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Error uploading PDF"));
  }

  try {
    const newForm = await form.create({
      firstName,
      lastName,
      email,
      phone,
      university,
      department,
      semester,
      domain,
      projects: parsedProjects,
      internshipPeriod,
      selectedProject,
      role,
      resume: pdfUrl, // ✅ Assign the uploaded file URL
    });

    return res
      .status(201)
      .json(new ApiResponse(201, newForm, "Form submitted successfully"));
  } catch (error) {
    console.error("Database Save Error:", error);
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Error saving form"));
  }
});

export { createForm };
