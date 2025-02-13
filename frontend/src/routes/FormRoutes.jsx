import React from "react";
import { Routes, Route } from "react-router-dom";
import InternshipForm from "../pages/InternshipForm";
import MultiStepForm from "../pages/MultiFormStep";
import FormAccepted from "../pages/FormAccepted";

const FormRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MultiStepForm />} />
      <Route path='/accept' element={<FormAccepted/>}/>
    </Routes>
  );
};

export default FormRoutes;
