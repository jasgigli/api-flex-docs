import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-4">
        Welcome to api-flex Documentation
      </h2>
      <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-6">
        api-flex is a lightweight and powerful library that simplifies API
        integration by wrapping <code className="font-mono">fetch</code> and{" "}
        <code className="font-mono">axios</code> with additional features like
        automatic retries, token management, error handling, and response
        caching.
      </p>

      <div className="flex flex-col items-center space-y-4 mb-10">
        <Link
          to="/installation"
          className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md shadow hover:bg-blue-500 transition duration-200"
        >
          Get Started
        </Link>
        <Link
          to="/usage"
          className="px-6 py-3 text-lg font-semibold text-blue-600 bg-white rounded-md shadow hover:bg-gray-100 transition duration-200"
        >
          View Usage Examples
        </Link>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {/* Features Card */}
        <div className="max-w-xs p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
            Features
          </h3>
          <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
            <li>✨ Automatic retries on failure</li>
            <li>🔑 Token management</li>
            <li>⚠️ Comprehensive error handling</li>
            <li>🗄️ Response caching</li>
            <li>📊 Performance monitoring</li>
            <li>🌍 Cross-origin resource sharing (CORS) support</li>
          </ul>
        </div>

        {/* Support Card */}
        <div className="max-w-xs p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
            Get Support
          </h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Need help? Visit our{" "}
            <Link to="/support" className="text-blue-500 underline">
              support page
            </Link>{" "}
            or check out our{" "}
            <Link to="/faq" className="text-blue-500 underline">
              FAQ.
            </Link>
          </p>
        </div>

        {/* Testimonials Card */}
        <div className="max-w-xs p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
            User Testimonials
          </h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            "api-flex has transformed our API integration process! It’s reliable
            and easy to use." - Jane Doe
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            "With api-flex, managing tokens and retries became effortless." -
            John Smith
          </p>
        </div>
      </div>

      {/* Quick Start Section */}
      <section className="mt-10 w-full max-w-4xl text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          Quick Start Guide
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Follow these simple steps to get started with api-flex:
        </p>
        <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300">
          <li>Install the package via npm or yarn.</li>
          <li>Import api-flex into your project.</li>
          <li>Set up your API configurations.</li>
          <li>Start making API requests with built-in features!</li>
        </ol>
        <Link
          to="/installation"
          className="mt-4 inline-block px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500 transition duration-200"
        >
          Detailed Installation Steps
        </Link>
      </section>
    </div>
  );
};

export default Home;
