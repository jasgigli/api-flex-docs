import React from "react";
import CodeBlock from "../components/CodeBlock";

const Usage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">
        Usage Examples
      </h1>
      <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8">
        Explore how to use{" "}
        <span className="font-mono text-blue-600">api-flex</span> for your API
        calls.
      </p>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl w-full mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
          Simple GET Request
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Here’s an example of how to make a simple GET request using{" "}
          <span className="font-mono text-blue-600">api-flex</span>:
        </p>
        <CodeBlock
          code={`import apiFlex from "api-flex";

try {
  const data = await apiFlex.get("/user?ID=12345");
  console.log(data);
} catch (error) {
  console.error(error);
}`}
          language="javascript"
        />
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          This code snippet retrieves user data by making a GET request to the
          specified endpoint.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl w-full mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
          Advanced Usage: POST Request
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          You can also make POST requests. Here’s how:
        </p>
        <CodeBlock
          code={`import apiFlex from "api-flex";

const userData = { name: "John Doe", email: "john@example.com" };

try {
  const response = await apiFlex.post("/users", userData);
  console.log(response);
} catch (error) {
  console.error(error);
}`}
          language="javascript"
        />
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          This code snippet demonstrates how to create a new user by sending a
          POST request with user data.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl w-full mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
          Handling Errors
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Error handling is crucial in API calls. Here’s how you can handle
          errors effectively:
        </p>
        <CodeBlock
          code={`import apiFlex from "api-flex";

try {
  const data = await apiFlex.get("/invalid-endpoint");
} catch (error) {
  console.error("API call failed:", error.message);
}`}
          language="javascript"
        />
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          This example demonstrates catching errors and logging a user-friendly
          message.
        </p>
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

export default Usage;
