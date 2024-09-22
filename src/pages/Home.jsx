import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 text-white text-center">
      {/* Library Name */}
      <h1 className="text-6xl font-extrabold mb-4 animate-fade-in">api-flex</h1>

      {/* Short Description */}
      <p className="text-lg md:text-xl max-w-2xl mb-8 animate-fade-in delay-200">
        A lightweight and powerful library that simplifies API integration with
        automatic retries, token management, and more.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-12 animate-fade-in delay-400">
        <Link
          to="/installation"
          className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-md shadow-lg hover:bg-gray-100 transition duration-200"
        >
          Get Started
        </Link>
        <Link
          to="/api"
          className="px-8 py-4 text-lg font-semibold bg-blue-700 text-white rounded-md shadow-lg hover:bg-blue-600 transition duration-200"
        >
          API Documentation
        </Link>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-4 animate-fade-in delay-600">
        {/* Features Card */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            Features
          </h3>
          <ul className="text-left text-gray-700 dark:text-gray-300 space-y-1">
            <li>✨ Automatic retries on failure</li>
            <li>🔑 Token management</li>
            <li>⚠️ Comprehensive error handling</li>
            <li>🗄️ Response caching</li>
            <li>📊 Performance monitoring</li>
            <li>🌍 CORS support</li>
          </ul>
        </div>

        {/* Support Card */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            Get Support
          </h3>
          <p className="text-left text-gray-700 dark:text-gray-300">
            Need help? Visit our{" "}
            <Link to="/support" className="text-blue-500 underline">
              support page
            </Link>{" "}
            or check out our{" "}
            <Link to="/faq" className="text-blue-500 underline">
              FAQ
            </Link>
            .
          </p>
        </div>

        {/* Testimonials Card */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            User Testimonials
          </h3>
          <p className="text-left text-gray-700 dark:text-gray-300">
            "api-flex has transformed our API integration process! It’s reliable
            and easy to use." - Jane Doe
          </p>
          <p className="mt-2 text-left text-gray-700 dark:text-gray-300">
            "With api-flex, managing tokens and retries became effortless." -
            John Smith
          </p>
        </div>
      </div>

      {/* Quick Start Guide */}
      <section className="w-full max-w-4xl text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md animate-fade-in delay-800">
        <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          Quick Start Guide
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Follow these steps to get started with api-flex:
        </p>
        <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 text-left space-y-2">
          <li>Install the package via npm or yarn.</li>
          <li>Import api-flex into your project.</li>
          <li>Set up your API configurations.</li>
          <li>Start making API requests with built-in features!</li>
        </ol>
        <Link
          to="/installation"
          className="mt-4 inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-500 transition duration-200"
        >
          Detailed Installation Steps
        </Link>
      </section>
    </div>
  );
};

export default Home;
