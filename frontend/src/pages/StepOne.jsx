import React, {useEffect} from "react";

const StepOne = ({ formData, setFormData }) => {

   

    const handleChange = (e) => {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Basic Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md w-full"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-md w-full mt-4"
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-md w-full mt-4"
        required
      />
    </div>
  );
};

export default StepOne;
