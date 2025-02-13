import React from "react";
import { formStore } from "../store/formStore";

const FormAccepted = () => {
  const { Data } = formStore(); // Get form data from Zustand store
  

  if (!Data) {
    return (
      <p className="text-center text-gray-500 mt-10">No form data available.</p>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          🎉 Form Accepted
        </h2>

        <div className="space-y-4">
          {/* Name */}
          {Data.firstName && Data.lastName && (
            <p className="text-lg text-gray-700">
              <strong className="text-gray-900">Name:</strong> {Data.firstName} {Data.lastName}
            </p>
          )}
          
          {/* Email */}
          {Data.email && (
            <p className="text-lg text-gray-700">
              <strong className="text-gray-900">Email:</strong> {Data.email}
            </p>
          )}
          
          {/* Phone */}
          {Data.phone && (
            <p className="text-lg text-gray-700">
              <strong className="text-gray-900">Phone:</strong> {Data.phone}
            </p>
          )}

          {/* University */}
          {Data.university && (
            <p className="text-lg text-gray-700">
              <strong className="text-gray-900">University:</strong> {Data.university}
            </p>
          )}
          
          {/* Semester */}
          {Data.semester && (
            <p className="text-lg text-gray-700">
              <strong className="text-gray-900">Semester:</strong> {Data.semester}
            </p>
          )}

          {/* Department */}
          {Data.department && (
            <p className="text-lg text-gray-700">
              <strong className="text-gray-900">Department:</strong> {Data.department}
            </p>
          )}
          
          {/* Role */}
          {Data.role && (
            <p className="text-lg text-gray-700">
              <strong className="text-gray-900">Role:</strong> {Data.role}
            </p>
          )}

          {/* Projects */}
          {Data.projects?.length > 0 && (
            <div>
              <strong className="text-lg text-gray-900">Projects:</strong>
              <ul className="list-disc ml-5 mt-2 space-y-2">
                {Data.projects.map((project, index) => (
                  <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                    {project.name && (
                      <p className="text-gray-700">
                        <strong className="text-gray-900">Name:</strong> {project.name}
                      </p>
                    )}
                    {project.description && (
                      <p className="text-gray-700">
                        <strong className="text-gray-900">Description:</strong> {project.description}
                      </p>
                    )}
                    {project.sourceCode && (
                      <p>
                        <strong className="text-gray-900">Source Code:</strong>{" "}
                        <a
                          href={project.sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 font-medium hover:underline hover:text-blue-800 transition duration-300"
                        >
                          View Code
                        </a>
                      </p>
                    )}
                    {project.deployLink && (
                      <p>
                        <strong className="text-gray-900">Live Demo:</strong>{" "}
                        <a
                          href={project.deployLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 font-medium hover:underline hover:text-green-800 transition duration-300"
                        >
                          View Project
                        </a>
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Internship Period */}
          {Data.internshipPeriod && (
            <p className="text-lg text-gray-700">
              <strong className="text-gray-900">Internship Period:</strong> {Data.internshipPeriod}
            </p>
          )}

          {/* Selected Project */}
          {Data.selectedProject && (
            <p className="text-lg text-gray-700">
              <strong className="text-gray-900">Selected Project:</strong> {Data.selectedProject}
            </p>
          )}

          {/* Resume Download */}
          {Data.resume && (
            <div className="mt-6 flex justify-center">
              <a
                href={Data.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
              >
                📄 Download Resume
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormAccepted;
