import React, { useState } from "react";
import CodeBlock from "../components/CodeBlock";

const Usage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
        Usage Examples
      </h1>
      <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8">
        Explore how to use{" "}
        <span className="font-mono text-blue-600">api-flex</span> for your API
        calls.
      </p>

      <div className="flex flex-col space-y-6 w-full max-w-4xl">
        <ExampleCard
          title="Simple GET Request"
          description="Here’s an example of how to make a simple GET request using api-flex:"
          code={`import apiFlex from "api-flex";

try {
  const data = await apiFlex.get("/user?ID=12345");
  console.log(data);
} catch (error) {
  console.error(error);
}`}
        />
        <ExampleCard
          title="Advanced Usage: POST Request"
          description="You can also make POST requests. Here’s how:"
          code={`import apiFlex from "api-flex";

const userData = { name: "John Doe", email: "john@example.com" };

try {
  const response = await apiFlex.post("/users", userData);
  console.log(response);
} catch (error) {
  console.error(error);
}`}
        />
        <ExampleCard
          title="Handling Errors"
          description="Error handling is crucial in API calls. Here’s how you can handle errors effectively:"
          code={`import apiFlex from "api-flex";

try {
  const data = await apiFlex.get("/invalid-endpoint");
} catch (error) {
  console.error("API call failed:", error.message);
}`}
        />
      </div>

      <div className="mt-10 text-center">
        <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          Ready to Start?
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Check out more examples and documentation to enhance your experience
          with <span className="font-mono text-blue-600">api-flex</span>.
        </p>
        <a
          href="/installation"
          className="inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-500 transition duration-200"
        >
          Go to Installation
        </a>
      </div>
    </div>
  );
};

// ExampleCard Component with Copy Functionality
const ExampleCard = ({ title, description, code }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // Hide after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 w-full">
      <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
        {description}
      </p>
      <CodeBlock code={code} language="javascript" />
      <button
        onClick={copyToClipboard}
        className="mt-2 flex items-center px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-500 transition duration-200"
        aria-label="Copy code snippet"
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
      {copySuccess && (
        <div className="mt-2 text-green-500 text-sm">Copied to clipboard!</div>
      )}
    </div>
  );
};

export default Usage;
