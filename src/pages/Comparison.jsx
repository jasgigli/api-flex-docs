import React from "react";

const Comparison = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">
        Comparison: fetch, axios, and api-flex
      </h1>
      <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8">
        Explore the key features of three popular libraries for making API
        requests.
      </p>

      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-2 px-4 text-left">Feature</th>
              <th className="py-2 px-4 text-left">fetch</th>
              <th className="py-2 px-4 text-left">axios</th>
              <th className="py-2 px-4 text-left">api-flex</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td className="py-2 px-4">Built-in retries</td>
              <td className="py-2 px-4">❌</td>
              <td className="py-2 px-4">❌</td>
              <td className="py-2 px-4">✅</td>
            </tr>
            <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td className="py-2 px-4">Token management</td>
              <td className="py-2 px-4">❌ (manual)</td>
              <td className="py-2 px-4">❌ (manual)</td>
              <td className="py-2 px-4">✅ (automatic token handling)</td>
            </tr>
            <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td className="py-2 px-4">Error handling</td>
              <td className="py-2 px-4">❌ (manual)</td>
              <td className="py-2 px-4">✅</td>
              <td className="py-2 px-4">✅ (centralized error logging)</td>
            </tr>
            <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td className="py-2 px-4">Caching</td>
              <td className="py-2 px-4">❌</td>
              <td className="py-2 px-4">❌</td>
              <td className="py-2 px-4">✅ (in-memory caching)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-10 text-center">
        <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          Why Choose api-flex?
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          api-flex combines the best features from both fetch and axios,
          providing a seamless experience for developers with additional
          functionality for better API management.
        </p>
        <a
          href="/usage"
          className="inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-500 transition duration-200"
        >
          Explore Usage Examples
        </a>
      </div>
    </div>
  );
};

export default Comparison;
