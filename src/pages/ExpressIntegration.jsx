import React from "react";
import CodeBlock from "../components/CodeBlock";

const ExpressIntegration = () => {
  return (
    <div className="page">
      <h1>Using api-flex in Express.js</h1>
      <p>
        Integrating api-flex in an Express.js application is easy. Here’s an
        example:
      </p>
      <CodeBlock
        code={`import express from "express";
import apiFlex from "api-flex";

const app = express();

app.get("/product", async (req, res) => {
  try {
    const product = await apiFlex.get("https://fakestoreapi.com/products/1");
    res.json(product);
  } catch (error) {
    console.error("Failed to fetch product:", error.message);
  }
});

app.listen(3000, () => {
  console.log(\`Server is running on port 3000\`);
});`}
        language="javascript"
      />
    </div>
  );
};

export default ExpressIntegration;
