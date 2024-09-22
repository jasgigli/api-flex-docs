import React from "react";
import CodeBlock from "../components/CodeBlock";

const Installation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">
        Installation Guide
      </h1>
      <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-4">
        To install <span className="font-mono text-blue-600">api-flex</span>,
        use one of the package managers below:
      </p>

      <div className="flex flex-col items-center space-y-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md w-full">
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
            Using npm
          </h2>
          <CodeBlock code="npm install api-flex" language="bash" />
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Run the above command in your terminal to install the library.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md w-full">
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
            Using Yarn
          </h2>
          <CodeBlock code="yarn add api-flex" language="bash" />
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Run the above command in your terminal to install the library.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          Next Steps
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          After installation, you can start using{" "}
          <span className="font-mono text-blue-600">api-flex</span> in your
          project.
        </p>
        <a
          href="/usage"
          className="inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-500 transition duration-200"
        >
          View Usage Examples
        </a>
      </div>
    </div>
  );
};

export default Installation;
