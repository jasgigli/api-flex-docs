import React from "react";
import CodeBlock from "../components/CodeBlock";

const Caching = () => {
  return (
    <div className="page">
      <h1>Response Caching</h1>
      <p>To enable caching for a request:</p>
      <CodeBlock
        code={`import apiFlex from "api-flex";

try {
  const cachedData = await apiFlex.get(
    "https://fakestoreapi.com/products/1",
    {},
    true
  );
  console.log(cachedData);
} catch (error) {
  console.error("Failed to fetch with cache:", error.message);
}`}
        language="javascript"
      />
    </div>
  );
};

export default Caching;
