import React from "react";
import CodeBlock from "../components/CodeBlock";

const ApiExamples = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">
        API Examples
      </h1>
      <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8">
        Discover how to utilize{" "}
        <span className="font-mono text-blue-600">api-flex</span> for various
        API calls.
      </p>

      {/* GET Request Example */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl w-full mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
          GET Request
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Use the following code to fetch a product from the Fake Store API:
        </p>
        <CodeBlock
          code={`import apiFlex from "api-flex";

try {
  const product = await apiFlex.get("https://fakestoreapi.com/products/1");
  console.log(product);
} catch (error) {
  console.error("Failed to fetch product:", error.message);
}`}
          language="javascript"
        />
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          This code retrieves the product with ID 1 and logs it to the console.
        </p>
      </div>

      {/* POST Request Example */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl w-full mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
          POST Request
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Here’s how to create a new product using a POST request:
        </p>
        <CodeBlock
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
          language="javascript"
        />
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          This snippet sends a request to create a new product with the
          specified details.
        </p>
      </div>

      {/* PUT Request Example */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl w-full mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
          PUT Request
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Update an existing product using a PUT request:
        </p>
        <CodeBlock
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
          language="javascript"
        />
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          This code updates the product with ID 1 and logs the updated product
          details.
        </p>
      </div>

      {/* DELETE Request Example */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl w-full mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
          DELETE Request
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Remove a product from the store using a DELETE request:
        </p>
        <CodeBlock
          code={`import apiFlex from "api-flex";

try {
  const response = await apiFlex.delete("https://fakestoreapi.com/products/1");
  console.log("Product deleted:", response);
} catch (error) {
  console.error("Failed to delete product:", error.message);
}`}
          language="javascript"
        />
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          This code deletes the product with ID 1 and logs a confirmation
          message.
        </p>
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

export default ApiExamples;
