import React, { useState } from "react";
import CodeBlock from "../components/CodeBlock";

const ExpressIntegration = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
        Using api-flex in Express.js
      </h1>
      <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8">
        Integrating <span className="font-mono text-blue-600">api-flex</span> in
        an Express.js application is easy. Here are some examples:
      </p>

      {/* Example 1: Simple GET Request */}
      <ExampleCodeBlock
        title="Simple GET Request"
        code={`import express from "express";
import apiFlex from "api-flex";

const app = express();

app.get("/product", async (req, res) => {
  try {
    const product = await apiFlex.get("https://fakestoreapi.com/products/1");
    res.json(product);
  } catch (error) {
    console.error("Failed to fetch product:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log(\`Server is running on port 3000\`);
});`}
      />

      {/* Example 2: POST Request */}
      <ExampleCodeBlock
        title="Creating a Product with POST Request"
        code={`import express from "express";
import apiFlex from "api-flex";

const app = express();
app.use(express.json());

app.post("/product", async (req, res) => {
  try {
    const newProduct = await apiFlex.post("https://fakestoreapi.com/products", req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Failed to create product:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log(\`Server is running on port 3000\`);
});`}
      />

      {/* Example 3: PUT Request */}
      <ExampleCodeBlock
        title="Updating a Product with PUT Request"
        code={`import express from "express";
import apiFlex from "api-flex";

const app = express();
app.use(express.json());

app.put("/product/:id", async (req, res) => {
  try {
    const updatedProduct = await apiFlex.put(\`https://fakestoreapi.com/products/\${req.params.id}\`, req.body);
    res.json(updatedProduct);
  } catch (error) {
    console.error("Failed to update product:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log(\`Server is running on port 3000\`);
});`}
      />

      {/* Example 4: DELETE Request */}
      <ExampleCodeBlock
        title="Deleting a Product with DELETE Request"
        code={`import express from "express";
import apiFlex from "api-flex";

const app = express();

app.delete("/product/:id", async (req, res) => {
  try {
    await apiFlex.delete(\`https://fakestoreapi.com/products/\${req.params.id}\`);
    res.status(204).send(); // No content
  } catch (error) {
    console.error("Failed to delete product:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log(\`Server is running on port 3000\`);
});`}
      />
    </div>
  );
};

// ExampleCodeBlock Component with Copy Functionality
const ExampleCodeBlock = ({ title, code }) => {
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
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full max-w-2xl mb-6">
      <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
        {title}
      </h2>
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

export default ExpressIntegration;
