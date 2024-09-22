import React from "react";
import { Link } from "react-router-dom";

const Header = ({ toggleDarkMode, darkMode, setIsOpen, isOpen }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-gray-800 dark:to-gray-700 text-white shadow-lg z-50 w-full transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-extrabold tracking-wide">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-200 transition-colors duration-300"
          >
            api-flex Docs
          </Link>
        </h1>

        <div className="flex items-center space-x-4">
          {/* Hamburger Menu Button for Mobile */}
          <button
            className="block md:hidden text-2xl px-4 py-2 transition-transform transform hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>

          {/* Dark Mode Toggle */}
          <button
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded p-2 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          {/* Navigation Links for Desktop */}
          <nav className="hidden md:flex space-x-8">
            {[
              "Home",
              "Installation",
              "Usage",
              "API Examples",
              "Caching",
              "Express Integration",
              "Comparison",
            ].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:underline transition-all duration-300 hover:text-blue-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
