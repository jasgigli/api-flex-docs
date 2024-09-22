import React, { useState } from "react";
import CodeBlock from "../components/CodeBlock";

const ApiExamples = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
        API Examples
      </h1>
      <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8">
        Discover how to utilize{" "}
        <span className="font-mono text-blue-600">api-flex</span> for various
        API calls.
      </p>

      {/* Examples List */}
      <div className="flex flex-col space-y-6 w-full max-w-4xl">
        <ApiExampleCard
          title="GET Request"
          description="Use the following code to fetch a product from the Fake Store API:"
          code={`import apiFlex from "api-flex";

try {
  const product = await apiFlex.get("https://fakestoreapi.com/products/1");
  console.log(product);
} catch (error) {
  console.error("Failed to fetch product:", error.message);
}`}
        />
        <ApiExampleCard
          title="POST Request"
          description="Here’s how to create a new product using a POST request:"
          code={`import apiFlex from "api-flex";

try {
  const newProduct = await apiFlex.post("https://fakestoreapi.com/products", {
    title: "New Product",
    price: 29.99,
    category: "electronics",
  });
  console.log(newProduct);
} catch (error) {
  console.error("Failed to create product:", error.message);
}`}
        />
        <ApiExampleCard
          title="PUT Request"
          description="Update an existing product using a PUT request:"
          code={`import apiFlex from "api-flex";

try {
  const updatedProduct = await apiFlex.put("https://fakestoreapi.com/products/1", {
    title: "Updated Product",
    price: 39.99,
  });
  console.log(updatedProduct);
} catch (error) {
  console.error("Failed to update product:", error.message);
}`}
        />
        <ApiExampleCard
          title="DELETE Request"
          description="Remove a product from the store using a DELETE request:"
          code={`import apiFlex from "api-flex";

try {
  const response = await apiFlex.delete("https://fakestoreapi.com/products/1");
  console.log("Product deleted:", response);
} catch (error) {
  console.error("Failed to delete product:", error.message);
}`}
        />
      </div>

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          Want to Learn More?
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Explore additional documentation and examples to enhance your
          experience with{" "}
          <span className="font-mono text-blue-600">api-flex</span>.
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

// ApiExampleCard Component with Copy Functionality
const ApiExampleCard = ({ title, description, code }) => {
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
      <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
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

export default ApiExamples;
