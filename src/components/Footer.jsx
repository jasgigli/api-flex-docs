import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-gray-800 dark:to-gray-700 text-white text-center py-6">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <p className="text-lg font-semibold">
          © 2024 api-flex. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <a
            href="https://github.com/jasgigli/api-flex"
            className="hover:underline transition-colors duration-300 mx-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View api-flex on GitHub"
          >
            GitHub
          </a>
          |
          <a
            href="https://npmjs.com/package/api-flex"
            className="hover:underline transition-colors duration-300 mx-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View api-flex on npm"
          >
            npm
          </a>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="/privacy-policy"
            className="hover:underline transition-colors duration-300 mx-2"
            aria-label="View Privacy Policy"
          >
            Privacy Policy
          </a>
          |
          <a
            href="/terms-of-service"
            className="hover:underline transition-colors duration-300 mx-2"
            aria-label="View Terms of Service"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
