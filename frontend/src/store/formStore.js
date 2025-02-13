import { create } from "zustand";
import toast from "react-hot-toast";

export const formStore = create((set, get) => ({
    backendUrl: "http://localhost:5000",
    Data: {},
  
    postForm : async (formData) => {
        if (!(formData instanceof FormData)) {
          console.error("postForm received invalid FormData:", formData);
          toast.error("Form submission error. Please try again.");
          return;
        }
      
        console.log("Submitting FormData:", formData);
        
        for (let [key, value] of formData.entries()) {
          console.log(`${key}:`, value);
        }
      
        try {
          const response = await fetch(`${get().backendUrl}/internship/create`, {
            method: "POST",
            body: formData, // Let fetch handle headers automatically
          });
      
          if (!response.ok) {
            const errorText = await response.text();
            console.error("Error Response:", errorText);
            toast.error("Failed to submit form.");
            return;
          }
      
          const responseData = await response.json();
          console.log("Success Response:", responseData);
      
          set({ Data: responseData.data });
          toast.success("Form submitted successfully!");
        } catch (error) {
          console.error("Network Error:", error);
          toast.error("An error occurred while submitting the form.");
        }
      }
      
  }));
  
