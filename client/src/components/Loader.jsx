import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <FaSpinner className="text-4xl text-blue-600 dark:text-blue-400 animate-spin" />
      <span className="ml-3 text-lg font-medium text-gray-700 dark:text-gray-300">
        Loading...
      </span>
    </div>
  );
};

export default Loader;
