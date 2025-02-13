import React, { useEffect } from "react";

const StepTwo = ({ formData, setFormData }) => {

  const handleProjectChange = (index, e) => {
    const updatedProjects = [...formData.projects];
    
    updatedProjects[index][e.target.name] = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      projects: updatedProjects,
    }));
  };

  const handleAddProject = () => {
    setFormData((prevData) => ({
      ...prevData,
      projects: [
        ...(prevData.projects || []),  // Ensure projects is an array
        { name: "", description: "", sourceCode: "", deployLink: "" }
      ],
    }));
  };
  
  const handleRemoveProject = (index) => {
    const updatedProjects = formData.projects.filter((_, i) => i !== index);
    setFormData((prevData) => ({
      ...prevData,
      projects: updatedProjects,
    }));
  };

  const OnChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };


  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">University Details</h2>

      <select name="university" value={formData.university} onChange={OnChange} className="p-2 border border-gray-300 rounded-md w-full mt-4" required>
        <option value="">Select University</option>
        <option value="NDUET">NDUET</option>
        <option value="SEUT">SEUT</option>
        <option value="Others">Others</option>
      </select>

      <input type="text" name="department" placeholder="Department" value={formData.department} onChange={OnChange} className="p-2 border border-gray-300 rounded-md w-full mt-4" required />

      <input type="text" name="semester" placeholder="Semester" value={formData.semester} onChange={OnChange} className="p-2 border border-gray-300 rounded-md w-full mt-4" required />

      <select name="domain" value={formData.domain} onChange={OnChange} className="p-2 border border-gray-300 rounded-md w-full mt-4" required>
        <option value="">Select Domain</option>
        <option value="AI">AI</option>
        <option value="ML">ML</option>
        <option value="Embedded">Embedded Systems</option>
        <option value="Web and App">Web & App Development</option>
        <option value="Robotics">Robotics</option>
      </select>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Projects You've Made</h3>
        {formData.projects && formData.projects.map((project, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-300 rounded-md">
            <h4 className="text-md font-semibold text-gray-900 dark:text-white">Project {index + 1}</h4>

            <input type="text" name="name" value={project.name} onChange={(e) => handleProjectChange(index, e)} placeholder="Project Name" className="p-2 border border-gray-300 rounded-md w-full mt-2" required />

            <textarea name="description" value={project.description} onChange={(e) => handleProjectChange(index, e)} placeholder="Project Description" className="p-2 border border-gray-300 rounded-md w-full mt-4" required />

            <input type="text" name="sourceCode" value={project.sourceCode} onChange={(e) => handleProjectChange(index, e)} placeholder="Source Code Link" className="p-2 border border-gray-300 rounded-md w-full mt-4" required />

            <input type="text" name="deployLink" value={project.deployLink} onChange={(e) => handleProjectChange(index, e)} placeholder="Deployment Link" className="p-2 border border-gray-300 rounded-md w-full mt-4" required />

            <button type="button" onClick={() => handleRemoveProject(index)} className="text-red-600 mt-2">Remove Project</button>
          </div>
        ))}

        <button type="button" onClick={handleAddProject} className="bg-blue-600 text-white py-2 px-4 rounded-md mt-4">+ Add Project</button>
      </div>

      <input type="text" name="internshipPeriod" placeholder="Internship Period" value={formData.internshipPeriod} onChange={OnChange} className="p-2 border border-gray-300 rounded-md w-full mt-4" required />

      <input type="file" name="file" onChange={OnChange} className="p-2 border border-gray-300 rounded-md w-full mt-4" required />
    </div>
  );
};

export default StepTwo;
