import React from "react";

const Form1 = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white text-center mb-6">
        Internship Application
      </h2>

      <form className="space-y-5">
        {/* Email Field */}
        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            className="peer block w-full px-4 py-2 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email Address"
            required
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            {/* Email Address */}
          </label>
        </div>

        {/* Name Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="peer block w-full px-4 py-2 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="First Name"
              required
            />
            <label
              htmlFor="first_name"
              className="absolute left-4 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
            >
              {/* First Name */}
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="peer block w-full px-4 py-2 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Last Name"
              required
            />
            <label
              htmlFor="last_name"
              className="absolute left-4 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
            >
              {/* Last Name */}
            </label>
          </div>
        </div>

        {/* Phone Number */}
        <div className="relative">
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="phone"
            id="phone"
            className="peer block w-full px-4 py-2 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Phone Number"
            required
          />
          <label
            htmlFor="phone"
            className="absolute left-4 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            {/* Phone Number (123-456-7890) */}
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg shadow-md transition-all focus:ring-4 focus:ring-blue-300"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Form1;
