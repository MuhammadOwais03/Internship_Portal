import React, { useState, useEffect } from "react";

const StepThree = ({ formData, setFormData }) => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedInfo, setSelectedInfo] = useState(null);

  useEffect(() => {
    // Simulating API Fetch
    const fetchedProjects = [
      {
        id: 1,
        name: "AI Research Project",
        description: "Researching new AI algorithms.",
        technologies: "Python, TensorFlow",
        roles: ["AI Developer", "Data Scientist", "ML Engineer"],
      },
      {
        id: 2,
        name: "Mobile App Development",
        description: "Building a cross-platform mobile app.",
        technologies: "Flutter, Dart",
        roles: ["Mobile Developer", "App Tester", "UI/UX Designer"],
      },
      {
        id: 3,
        name: "Embedded Systems",
        description: "Working on embedded system solutions.",
        technologies: "C, Arduino",
        roles: ["Embedded Engineer", "Hardware Engineer", "Firmware Developer"],
      },
    ];
    setProjects(fetchedProjects);
  }, []);



  const handleProjectSelection = (e) => {
    const selectedId = e.target.value;
    setSelectedProject(selectedId);

    const project = projects.find((p) => p.id === parseInt(selectedId));
    

    setSelectedInfo(project || null); // Handle case where project is not found
    setFormData((prev) => ({ ...prev, selectedProject: project?.name || "" }));
  };

  const handleRoleSelection = (e) => {
    const role = e.target.value;
    setSelectedRole(role);
    setFormData((prev) => ({ ...prev, role: role }));
  };

  useEffect(() => {
    
    if (formData.selectedProject) {
      setSelectedProject(projects.findIndex((p)=>p.name===formData.selectedProject))
      const project = projects.find((p) => p.name === formData.selectedProject);
      if (project) setSelectedInfo(project);
    }
  }, [formData.selectedProject, projects]); // Runs when formData.selectedProject or projects change

  useEffect(() => {
    if (formData.role) {
      setSelectedRole(formData.role);
    }
  }, [formData.role]); // Runs when formData.role changes

  

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        Ongoing Projects
      </h2>

      {/* Project Selection */}
      <select
        name="projectSelection"
        value={selectedProject}
        onChange={handleProjectSelection}
        className="p-2 border border-gray-300 rounded-md w-full mt-2"
        required
      >
        <option value="">Select a Project</option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {" "}
            {/* Store ID */}
            {project.name}
          </option>
        ))}
      </select>

      {/* Project Details */}
      {selectedInfo && (
        <div className="mt-4">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Project Description
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {selectedInfo.description}
          </p>

          <h3 className="font-semibold text-gray-900 dark:text-white mt-4">
            Technologies Used
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {selectedInfo.technologies}
          </p>
        </div>
      )}

      {/* Role Selection */}
      {selectedInfo && (
        <div className="mt-4">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Select Your Role
          </h3>
          <select
            name="role"
            value={selectedRole}
            onChange={handleRoleSelection}
            className="p-2 border border-gray-300 rounded-md w-full"
            required
          >
            <option value="">Select a Role</option>
            {selectedInfo.roles.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default StepThree;
