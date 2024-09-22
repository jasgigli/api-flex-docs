import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ code, language }) => {
  return (
    <div className="overflow-auto p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
      <SyntaxHighlighter
        language={language}
        style={darcula}
        showLineNumbers
        customStyle={{
          borderRadius: "0.5rem",
          fontSize: "0.9rem",
          padding: "1rem",
          overflowX: "auto",
        }}
        className="max-w-full"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
