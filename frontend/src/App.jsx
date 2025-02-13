import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormRoutes from "./routes/FormRoutes";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Toaster />
    <Router>
      <Routes>
        <Route path="/internship/*" element={<FormRoutes />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
