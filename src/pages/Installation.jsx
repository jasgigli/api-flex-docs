import React, { useState } from "react";
import CodeBlock from "../components/CodeBlock";

const Installation = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // Hide after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
        Installation Guide
      </h1>
      <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-6">
        To install <span className="font-mono text-blue-600">api-flex</span>,
        use one of the package managers below:
      </p>

      <div className="flex flex-col items-center space-y-6 w-full max-w-2xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full">
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
            Using npm
          </h2>
          <CodeBlock code="npm install api-flex" language="bash" />
          <button
            onClick={() => copyToClipboard("npm install api-flex")}
            className="mt-2 flex items-center px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-500 transition duration-200"
            aria-label="Copy npm command"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2m12 0l-4-4m4 4l-4 4m8-8h-6"
              />
            </svg>
            Copy
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full">
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
            Using Yarn
          </h2>
          <CodeBlock code="yarn add api-flex" language="bash" />
          <button
            onClick={() => copyToClipboard("yarn add api-flex")}
            className="mt-2 flex items-center px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-500 transition duration-200"
            aria-label="Copy Yarn command"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2m12 0l-4-4m4 4l-4 4m8-8h-6"
              />
            </svg>
            Copy
          </button>
        </div>
      </div>

      {copySuccess && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-3 rounded-md shadow-lg transition-opacity duration-300">
          Copied to clipboard!
        </div>
      )}

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
