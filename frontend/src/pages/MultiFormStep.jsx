import React, { useState, useEffect } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { formStore } from "../store/formStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const MultiStepForm = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [resume, setResume] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    projects: [],  // Array for multiple projects
    role: "",
    file: null,    // Initialize file as null (not an empty string)
    university: "",
    semester: "",
    domain: "",
    internshipPeriod: "",
    selectedProject: "",
  });
  
  const { postForm } = formStore();



  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
        if (key === "projects") {
          
            data.append(key, JSON.stringify(formData[key])); // Convert array of objects to JSON string
        } else {
            data.append(key, formData[key]);
        }
    });

   
    data.append("file", resume);
   
    postForm(data);
    navigate('/internship/accept')
};


useEffect(()=>{
  console.log(formData)
},[formData])




  return (
    <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <span
          className={`w-1/3 h-2 rounded-lg ${
            step >= 1 ? "bg-blue-600" : "bg-gray-300"
          }`}
        ></span>
        <span
          className={`w-1/3 h-2 rounded-lg ${
            step >= 2 ? "bg-blue-600" : "bg-gray-300"
          }`}
        ></span>
        <span
          className={`w-1/3 h-2 rounded-lg ${
            step === 3 ? "bg-blue-600" : "bg-gray-300"
          }`}
        ></span>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <StepOne formData={formData} setFormData={setFormData} />
        )}
        {step === 2 && (
          <StepTwo
            formData={formData}
            setFormData={setFormData}
            setResume={setResume}
          />
        )}
        {step === 3 && (
          <StepThree formData={formData} setFormData={setFormData} />
        )}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
            >
              Previous
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
