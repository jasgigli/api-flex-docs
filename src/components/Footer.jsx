import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-gray-800 dark:to-gray-700 text-white text-center py-6">
      <div className="container mx-auto px-4">
        <p className="text-lg font-semibold">
          © 2024 api-flex. All rights reserved.
        </p>
        <div className="mt-2">
          <a
            href="https://github.com/jasgigli/api-flex"
            className="hover:underline transition-colors duration-300 mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          |
          <a
            href="https://npmjs.com/package/api-flex"
            className="hover:underline transition-colors duration-300 mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            npm
          </a>
        </div>
        <div className="mt-4">
          <a
            href="/privacy-policy"
            className="hover:underline transition-colors duration-300 mx-2"
          >
            Privacy Policy
          </a>
          |
          <a
            href="/terms-of-service"
            className="hover:underline transition-colors duration-300 mx-2"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
