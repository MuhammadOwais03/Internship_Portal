
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';


import { form } from "../models/form.model.js";


const createForm = asyncHandler(async (req, res) => {

    const {
        firstName, lastName, email, phone,
        university, department, semester, domain,
        projects, internshipPeriod, selectedProject, role
    } = req.body;

    
    
    const parsedProjects = JSON.parse(projects);

    if (!req.file) {
        return res.status(400).json(new ApiResponse(400, null, 'No Resume Attached'));
    }

    let pdfUrl = null;

    try {
        
        if (req.file.mimetype !== "application/pdf") {
            fs.unlinkSync(req.file.path);
            return res.status(400).json(new ApiResponse(400, null, 'Only PDF files are allowed'));
        }

        const result = await cloudinary.uploader.upload(req.file.path, { resource_type: "raw" });
        pdfUrl = result.secure_url;

        
        fs.unlinkSync(req.file.path);
    } catch (error) {
        
        return res.status(500).json(new ApiResponse(500, null, 'Error uploading PDF'));
    }

    try {
        
        const f = await form.create({
            firstName, lastName, email, phone,
            university, department, semester, domain,
            projects: parsedProjects,
            internshipPeriod, selectedProject, role,
            resume: pdfUrl
        });

        await f.save();

        return res.status(201).json(new ApiResponse(201, f, 'Form submitted successfully'));
    } catch (error) {
        
        return res.status(500).json(new ApiResponse(500, null, 'Error saving form'));
    }
});

export {createForm}